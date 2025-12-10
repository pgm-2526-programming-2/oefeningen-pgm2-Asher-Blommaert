//Spread 

//oef1
const originalArray = [1, 2, 3];

function copyArray(arr) {
    const newArray = [...arr];
    return newArray;
}

const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]

//oef2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    const newArray = [...arr1, ...arr2];
    return newArray;
}

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//oef3
const originalObject = { name: "Alice" };

function addProperty(obj, key, value) {
    const newObject = {...obj, [key]: value};
    return newObject;
}

const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }

//oef4
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2) {
    const newObject = {...obj1, ...obj2};
    return newObject;
}

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//oef5
function add(a, b, ...rest) {
    return a + b + rest.reduce((prev, curr) => prev + curr);
}

add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7
console.log(add(1, 5, 6));
console.log(add(1, 5, 6, 5, 1561, 2, 5));

//oef6
function combineAllArrays(arr1, arr2, ...rest) {
    return arr1 + arr2 + rest.flat(Infinity);
}
combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]
console.log(combineAllArrays([10, 12], [5, 4]));
console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6]));

//oef7
function addOnlyNumbers(num1, num2, ...rest) {
    const addedNumbers = num1 + num2 + rest.reduce((prev, curr) => prev + curr);
    console.log(`Er waren ${rest} argumenten, de som van de getallen is ${addedNumbers}`);
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.
console.log(addOnlyNumbers(1, 5, 6, "cat", "dog", 3));