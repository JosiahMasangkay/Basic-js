// alert("Answer in console.")
// 1.Create an empty array called fruits.

let fruits = [];
console.log("1.")
console.log(fruits);

// 2.Add the following fruits to the fruits array: "apple," "banana," "cherry," "date," and "elderberry."

fruits.push("apple", "banana", "cherry", "date", "elderberry");
console.log("2.")
console.log(fruits);

// 3.Add "apricot" to the beginning of the fruits array.

fruits.unshift("apricot");

console.log("3.")
console.log(fruits);

// 4.Use the length property to find and display the length of the fruits array.

console.log("4.")
console.log(fruits.length);

// 5.Remove the last element from the fruits array.

fruits.pop();
console.log("5.")
console.log(fruits);

// 6. Remove the first element from the fruits array.

fruits.shift();
console.log("6.")
console.log(fruits);

// 7. Create a new array called berries that includes elements from the fruits array starting from the 3rd element ("cherry") to the end.

let berries = ["cherry", "date", "elderberry"];
console.log("7.")
console.log(berries);

// 8. Remove "banana" and "date" from the fruits array.

fruits.splice(1, 1);
fruits.splice(2, 1);
console.log("8.")
console.log(fruits);

// 9. Create a new array called moreFruits with the following fruits: "fig," "grape," and "honeydew."

let moreFruits = ["fig", "grape", "honeydew"];
console.log("9.")
console.log(moreFruits);
// 10. Concatenate the fruits array and the moreFruits array into a new array called allFruits.

let allFruits = fruits.concat(moreFruits);
console.log("10.")
console.log(allFruits);

// 11. Delete the element at index 1 in the allFruits array.

delete allFruits[1];
console.log("11.")
console.log(allFruits);

// 12. Remove "fig" and "grape" from the allFruits array.

allFruits.splice(2, 2);
console.log("12.")
console.log(allFruits);
// 13. Display the contents of the fruits, berries, moreFruits, and allFruits arrays after performing all the above operations.
console.log("13.")
console.log(fruits, berries, moreFruits, allFruits)

// 14. Explain the differences between pop, shift, delete, and splice in terms of how they remove elements from an array.
let pop = "Pop removes the last element from the array and returns it. It modifies the original array by reducing its length by one.";
let shift = "Shift removes the first element from the array and returns it. Like pop, it modifies the original array by reducing its length by one.";
let del = "Deletes an element at a specific index in the array, but it does not change the length of the array. It sets the element to undefined and leaves an empty slot.";
let splice = "Splice removes elements from the array starting at a specified index and optionally adds new elements. It can modify the original array by changing its length.";

console.log("14.")
console.log(pop);
console.log(shift);
console.log(del);
console.log(splice);

// 15. Discuss when you would use concat to combine arrays instead of other methods.
let concat = "You would use the concat method to combine arrays when you want to create a new array that contains the elements of multiple arrays without modifying the original arrays. If you want to preserve the original array 'concat' creates a new array and leaves the original arrays unchanged.";

console.log("15.")
console.log(concat);

// Bonus Task
// Sort the allFruits array in alphabetical order.
allFruits.sort

// Display the sorted allFruits array.
console.log(allFruits)
