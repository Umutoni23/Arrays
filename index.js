// Exercise 1 : array initialization and Property Access
const productCategories = ["", "Electronics", "Clothing", "Home & Kitchen", "Books", "Toys & Games"];
// a
console.log(productCategories[0]); 

// b
console.log(productCategories[productCategories.length - 1]);

// c
console.log(productCategories.length);

// d
productCategories[1] = "pen";
// e
console.log(productCategories);

//  Exercise 2 : Apush, pop, shift, unshift, splice

let inventory = ["10", "20", "30", "40",];

// a
inventory.push("40");
console.log(inventory);

// b
inventory.pop();
console.log(inventory);

// c
inventory.shift();
console.log(inventory);

// d
inventory.unshift("0");
console.log(inventory); 

// e
inventory.splice(1, 1, 25, 35);
console.log(inventory);

// Exercise 3 : Shallow copying of Arrays and the references trap

// a
const originalScores = [90, 85, 78];

// b
const  referenceCopy = originalScores;
console.log(originalScores);

// c
referenceCopy[0] = 100;
console.log("originalScores: ", originalScores);
console.log("referenceCopy: ", referenceCopy);

// d

const spreadCopy = [...originalScores];
console.log("Original Scores: ", originalScores);
console.log("Spread Copy: ", spreadCopy);

// e
spreadCopy[2] = 50;
console.log("Original Scores: ", originalScores);
console.log("Spread Copy: ", spreadCopy);

// Section 3: Searching & Cheking 

// Exercise 4: Finding Elements by value and Index
const studentsNames = ["Alice", "Bob", "Charlie", "ALice", "David"];
// a
console.log(studentsNames.indexOf("Alice"));

// b
console.log(studentsNames.lastIndexOf("Alice"));

// c
console.log(studentsNames.includes("Charlie"));

// d
console.log(studentsNames.includes("Eve"));

// Exercise 5: Advanced Searching with fidn and FindIndex


const products = [
  { id:1, name: "Laptop", price: 999 },
  { id:2, name: "Smartphone", price: 499 },
  { id:3, name: "Tablet", price: 299 },
  { id:4, name: "Headphones", price: 1999 },
];

// a

let foundproducts = products.find(product => product.name === "Headphones");
console.log(foundproducts);

// b
let foundIndex = products.findIndex(product => product.price === 199);