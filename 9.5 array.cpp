/* 
Adding and removing elements:-
push() , unshift()
pop(), shift()
*/

const numbers = [1, 2, 3, 4, 6];

// adding elements:-
numbers.push(5); // adding 5 at the end of the array 
numbers.unshift(0); // add 0 at the beginning of the array

// removing elements:-
numbers.pop(); // removing the last element (5)
numbers.shift(); //Removing the First element (0)

console.log(numbers); // otput: [1,2,3]


// Iterating over arrays

for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
}
console.log("For Each method");
// for each method
numbers.forEach((n) => {
      console.log(n);
}
)
