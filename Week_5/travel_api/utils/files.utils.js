const fileSystem = require("fs/promises");
const pathModule = require("path");

async function getContentFromFile(file) {
    const pathToFile = pathModule.join(__dirname, "..", "models", file);
    const fileContentAsString = await fileSystem.readFile(pathToFile, "utf8");
    const fileContentAsValidJS = JSON.parse(fileContentAsString);
    return fileContentAsValidJS;
}



module.exports = {
    getContentFromFile
}