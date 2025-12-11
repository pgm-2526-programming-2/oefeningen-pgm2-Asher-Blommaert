const path = require("path");
const fs = require("fs");

function returnFile(file) {
    const fileContent = fs.readFileSync(path.join(__dirname,"..", "models", file), 'utf8');
    return JSON.parse(fileContent);
}

module.exports = {
    returnFile
}