//throw "Fout!";

const message = new Error("Er ging iets mis!");
//throw message;

try {
    console.log("We voeren code uit!");

    //real-life = zelden gaan we zelf een error throwen, dit komt meestal uit library of ingebouwde js-feature
    //bijvoorbeeld: item in databank bestaat niet

    throw new Error("Item in databank bestaat niet!");
} catch (error) {
    console.log("Hier geraken we wanneer er iets mis gaat!", error.message);
} finally {
    console.log("Code die sowieso moet uitgevoerd worden zelfs als er iets mis gaat, maar ook indien niet.")
}