const process = require("process");
const pathModule = require("path");
const filesystemModule = require("fs");
//require() altijd bovenaan het bestand


// const studentsPath = "./students.json";
const studentsPath = pathModule.join(__dirname, "students.json");

//filesystem kan om bestanden te lezen
const fileContent = filesystemModule.readFileSync(studentsPath, "utf8");
const fileContentAsArray = JSON.parse(fileContent);
fileContentAsArray.push({
    name: "Yens",
    age: 25
});
console.log(fileContentAsArray);

filesystemModule.writeFileSync(studentsPath, JSON.stringify(fileContentAsArray));

// const pathToFunctionCourse = "../../week_1/les_1/functions.js";
const pathToFunctionCourse = pathModule.join("..", "..", "Week_1", "les_1", "functions.js");

//nut van path = platformonafhankelijk ( \ vs / )
//veiliger/robuster - speciale tekens zoals spatie kunnen wel.
//toekomst! Nieuwe operating system? 

console.log(__dirname);