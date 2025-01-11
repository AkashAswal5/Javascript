// Example array
const numbers = [1, 2, 3, 4, 5];

// Initialize a variable to hold the sum
let sum = 0;

// Loop through each element in the array and add it to the sum
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum of the array elements is:", sum);


// Exercise 1: Calculate the sum of all the elements in the array.

//Exercise 2: create an array of numbers and then double each element of array.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
      arr[i] = 2 * arr[i];  // Doubles each element
      console.log(arr[i]); // logs the doubled element
}
