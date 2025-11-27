
//VAT bij Europese webshop.
//BTW bij Belgische webshop.

//instelling
const regionNotation = "btw";

//object
const product = {
    price: 25,
    name: "Gameboy",
    [regionNotation]: 21
}

// const productKeys = ['price', 'name'];
const productKeys = Object.keys(product);

productKeys.length; 


product.color = "Red";
product.color = "Blue";
product[regionNotation] = 32;

const productMap = new Map();
productMap.set('price', 25);
productMap.set('name', "Gameboy");
productMap.set("color", "Red");
productMap.set("color", "Blue");
productMap.set(regionNotation, 20);

//voordeel: makkelijker de lengte ophalen.
const productMapLength = productMap.size;


console.log(product, productMap);