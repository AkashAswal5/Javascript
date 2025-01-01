/*
Prompt & Alert: In JavaScript, prompt() and alert() are built-in functions that
allow you to interact with users and display messages in your web
applications.

alert() is a function that displays an alert box with a message and an 
OK button. The syntax for using the alert() function is:  
      alert("This is an alert message!");

prompt() is a function that displays a dialog box that prompts the
user for input. The syntax for using the prompt() function is:
             prompt(message, defaultValue);
*/

alert("hello it is AK");

let name = prompt("What is your name?", "Guest");
if (name) {
    alert("Welcome, " + name + "!");
} else {
    alert("No name entered.");
}


let age = prompt("How old are you?", "18");
if (age !== null) {
    alert("Your age is " + age);
}
else {
    alert("you didn't provide your age. ");
}
