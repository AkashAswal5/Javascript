
/* 
Exercise 2: Write a program that prompts the user to enter a month
number (1-12) and displays the name of the month.
*/

let month = prompt("Enter month number", "1");

month = Number(month);  // convert the input to a number

switch (month) {
    case 1:
        console.log("Month is January ");
        break;
    case 2:
        console.log("Month is Feburary");
        break;

    case 3:
        console.log("Month is March ");
        break;
    case 4:
        console.log("Month is April ");
        break;
    case 5:
        console.log("Month is May ");
        break;
    case 6:
        console.log("Month is June ");
        break;
    case 7:
        console.log("Month is July ");
        break;
    case 8:
        console.log("Month is August");
        break;
    case 9:
        console.log("Month is September");
        break;
    case 10:
        console.log("Month is October");
        break;
    case 11:
        console.log("Month is November");
        break;
    case 12:
        console.log("Month is December");
        break;
    default:
        console.log("Not a vaild number.");

}
