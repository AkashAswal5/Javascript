/*
 Exercise 4: Write a program that prompts the user to enter a password. If
the password is correct, display a welcome message. If the password is
incorrect, display an error message.
*/

let password = prompt("Enter a password", ""); // Prompt user to set a password
let verifyPassword = prompt("Re-enter the password to verify", ""); // Prompt user to verify

if (password === verifyPassword) {
    console.log("Password is correct.");
    console.log("Welcome, guest!");
} else {
    console.log("Wrong password. Please try again.");
}

