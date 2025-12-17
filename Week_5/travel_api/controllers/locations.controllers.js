const { getContentFromFile } = require("../utils/files.utils");
const fileSystem = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const fileLocation = path.join(__dirname, "..", "models", "locations.json")


function getLocations(req, res)  {
    console.log("get locations");
    res.send("data verstuurd naar gebruiker");
}

async function addLocation(req, res) {
    const locations = await getContentFromFile("locations.json");
    const updatedBody = { ...req.body, id: crypto.randomUUID() };
    locations.push(updatedBody);
    await fileSystem.writeFile(fileLocation, JSON.stringify(locations, null, 4), "utf8");
    console.log("post new locations", req.body, locations);
    res.status(201);
    res.send("data is succesvol toegevoegd");
}


module.exports = {
    getLocations,
    addLocation
}