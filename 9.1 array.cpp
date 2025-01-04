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
