//ophalen van waardes uit een array of object en die opslaan in een variabele
const person = ["Asher", "Blommaert"];

const firstName = person[0];
const lastName = person[1];

//destructuring
//door aan de linkerzijde vierkante haakjes te gebruiken, weten we dat we waardes uit een array gaan destructuring
const [firstN, lastN] = ["Asher", "Blommaert"];
const [firstNm, lastNm, age = 19] = person;  //standaard waarde kunnen ook toegevoegd worden

const result = ["Ignace", "Arif", "Kobe", "Justin"];
const [firstWinner, , thirdWinner] = result;  //Je kan elementen overslaan door een spatie tussen komma's
console.log(firstWinner, thirdWinner);

const songs = [
    {
        name: "Ophelia",
        artist: "Taylor Swift"
    },
    {
        name:"Still DRE",
        artist: "Snoop Dogg"
    }
]

const [,firstTrack, lastTrack] = songs;  //let op de komma
console.log(lastTrack); //undefined

//combinatie van de rest operator en destructuring
//doel: array opsplitsen in 1ste element en de rest
const [head, ...tail] = [1, 2, 3, 4, 5];  //tail is een array met [2, 3, 4, 5]

