const person= {
    firstName: "Asher",
    lastName: "Blommaert",
    age: 19
}

const myFirstName = person.firstName;  //variabele naam zelfde als keynaam
const myLastName = person.lastName;
const myAge = person.age;

// const {firstName, lastName, age} = person;

const {firstName, age, gender = "Male"} = person  //verschil tussen array en object destructuring = object is op basis van de key en niet de index. Dus volgorde maakt niet uit (in tegenstelling tot array destructuring)
console.log(age, gender);  //19, undefined (Male wanneer default waarde)

//nadeel van object destructuring = zelfde naam als key in object
const options = {
    c: 20000,
    w: 3000,
    mod: "C8",
    b: undefined
}

const {c: cost, w: weight, mod: model, b:brand = "Citroen"}= options  //volgorde van keys maakt niet uit    c:cost = nieuwe key name

const {w: altWeight, ...rest} = options;

const song = {
    name: "Flowers",
    artist: "Miley"
}

const edit = {
    name: "7 Things"
}

function editSong(s, {name}) {
    s.name = name;
}

editSong(song, edit);