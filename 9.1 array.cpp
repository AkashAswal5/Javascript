//  Find the Largest Element in an Array
const findLargest = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(findLargest([3, 1, 4, 1, 5, 9])); // Output: 9


// Exercise 3: Find the largest element of an array of numbers.
let arr2 = [45, 6, 487, 642, 4641];
let large = arr2[0];

for (let i = 0; i < arr2.length; i++) {
      if (large < arr2[i]) {
            large = arr2[i];
      }
}
console.log(`largest Element: ${large}`);
