//Exercise 5: Calculate the factorial of a given number.
let num1=prompt("Enter a number to find its Factorial" , "5");
num1=Number(num1) // convert num1 to number
let fact=1;
for(let i=1; i<=num1; i++){
      fact=fact*i;
}
console.log(fact);
