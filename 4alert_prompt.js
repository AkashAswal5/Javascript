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



var num=6;

if(num>10){
    console.log("the number is greater than 10/");
}
else if( num>5 && num<10){
    console.log("number is greater than 5 and less than or equal to 10.")
}
else{
    console.log("the number id less than or equal to 5.");
}

