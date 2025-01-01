/* Exercise 3: Write a program that prompts the user to enter two numbers
 and displays a message indicating which number is larger.
*/

let num1 = prompt("Enter First Number", "num1");
num1 = Number(num1);

let num2 = prompt("Enter Second Number", "Num2");
num2 = Number(num2);

var message =
    num1 > num2
        ? "first number is greater "
        : num1 < num2
            ? " second number is greater."
            : "Both numbers are equal.";
console.log(message);
