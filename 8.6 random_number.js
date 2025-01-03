/*
 Exercise 6: Guessing game: Write a program that generates a random
number between 1 and 10. Ask the user to guess the number, and keep
prompting until they guess correctly.
*/


let num =Math.floor(Math.random()*10 ) +1 ;  // (0-0.9)  *10 + 1

while (true) {
      let guess = prompt("guess a number: ");

      if (Number(guess) == num) {
            console.log("You Win");
            break;
      }
}
