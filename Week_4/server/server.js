const express = require('express');
const pathModule = require("path");
const filesystemModule = require("fs");
const myServer = express();
const PORT = 3000;
const HOST = 'localhost';

//    http://localhost:3000

myServer.get("/api", (request, response) => {
    console.log("Verzoek op de server");
    response.status(200);
    // response.send("Antwoord van de server");
    // response.send(`De tijd op de server bedraagd ${Date.now()}`)    //er mag maar 1 .send zijn
    response.json({
        name: "Asher"
    })
})

myServer.get("/api/recipes", (request, response) => {
    const recipesPath = pathModule.join(__dirname, "recipes.json");
    const fileContent = filesystemModule.readFileSync(recipesPath, "utf8");
    response.send(fileContent);
})

myServer.listen(PORT, HOST, () => {  //   .listen start server op
    console.log(`Server staat aan op http://${HOST}:${PORT}`);   //afsluiten door ctrl + C
})

console.log("server bestand");