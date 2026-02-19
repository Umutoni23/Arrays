
// Exercise one: Array initialization and property Access

let productCategories = ["Electronics", "Books", "Flash disks", "Mouses"]
// a
console.log(productCategories[0]);

// b
console.log(productCategories[productCategories.length -1]);

// c
console.log(productCategories.length);

// d
productCategories[1] = "Leoncie";

// e
console.log(productCategories);

// Exercise Two: Push, Pop, Shift, Unshift, Splice
let inventory = ["10", "20", "30"]

// a
inventory.push("40");
console.log(inventory);

// b
inventory.pop(30);
console.log (inventory);

// c
inventory.unshift("0");
console.log(inventory);

// d
inventory.shift("10");
console.log(inventory);

// e
inventory.splice(1, 1, "25", "35");
console.log(inventory);
