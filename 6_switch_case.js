
/* 
Switches Statement: This statement is used to execute different blocks of
code based on different cases.
*/

var day=prompt("enter day","Day") ;
switch(day){
    case "monday":
        console.log("today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday.");
        break;
    case "wednesday":
        console.log("today is Wednesday.");
        break;
    case "thrusday":
        console.log("Today is Thrusday.");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("today is Saturday");
        break;
    case "sunday":
        console.log("today is Sunday");
        break;
    default:
        console.log("not a valid input ");
}
