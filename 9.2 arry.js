//   Reverse an Array

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]


// Example array
let arr = [1, 2, 3, 4, 5];

// Reverse the array
arr.reverse();

// Print the reversed array
console.log(arr); // Output: [5, 4, 3, 2, 1]
