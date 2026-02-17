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