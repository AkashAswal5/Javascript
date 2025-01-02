// Exercise 3: Print the multiplication table of a given number.
let num= prompt("Enter a number to print its table" , "2");
 num=Number(num);

 for(let i=1 ; i<=10 ; i++){
      console.log(`${num} * ${i} = ${num*i}`);
 }
