// console.log(firstName);
// console.log(lastName);
const firstName = "Asher";
var lastName = "Blommaert";   //var lastName     lastName = "Blommaert"    var gebeurt op lijn 1
let age = 19; // hoisting met variabele gebeurt enkel met var.


showMessage();

function showMessage() {
    console.log("Hello world");
}    //is zoals de var variable. Kan overal bereikt worden



const showAnotherMessage = function () {
    console.log("Another world");
}

const showArrowMessage = () => {
}

showAnotherMessage();