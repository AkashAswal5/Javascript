/* learn anout various higher order function 
1) Map
2) reduce
3) filter
4)foreach

*/

// map: a=[2,5,4,6]==> a=[4,10,8,12]
//double array
// using  loop


/* 
MAP: is  a higher order function. it will take a callback function as a parameter

*/
a = [2, 5, 4, 6]
function double(data) {  // data is denoting every element of the array

    return data * 2;
}
b = a.map(double);
console.log(b) // [4, 10, 8, 12]

a.map(double)
console.log(a) //  [2, 5, 4, 6]

a = a.map(double)
console.log(a) // [4, 10, 8, 12]


// sort the array
a = a.map((data) => // it is arrow function and anomymous function
{
    return data * 2;
})
console.log(a); // [8, 20, 16, 24]


b = [2, 5, 4, 6]
/*     Filter method  */
c = b.filter((data) => data % 2 == 0)
console.log(c)  // [2, 4, 6]


/*
Reduce method
 */
a=[2,5,4,6];
acc=a.reduce((acc,data)=>acc=acc+data,0); // First parameter acc
console.log(acc); // 17

a.forEach((data)=>console.log(data)) 
/*
2 
5 
4 
6 
*/

const faculty={
    Name: "Debanjan",
    Education:"BITS Pilani",
    Work_place:"UPES"
}
console.log(faculty.Work_place); //UPES
console.log(faculty["Work_place"]); // UPES

// for each use in loop

for(let prop in faculty){     // for in loop 
    // use in to iterate over the array
    console.log(prop);
    // console.log(faculty[prop]);
}



  const users = [
  { name: "Alice", purchases: ["Laptop", "Phone"] },
  { name: "Bob", purchases: ["Tablet", "Laptop"] },
  { name: "Charlie", purchases: ["Phone", "Tablet"] }
];
/**
            OUTPUT:-

{
  "Laptop": ["Alice", "Bob"],
  "Phone": ["Alice", "Charlie"],
  "Tablet": ["Bob", "Charlie"]
}

 */

// user : is a array of object
// use array method , higher order function, for each

output={} // empty object
users.forEach((user)=>
{
    user.purchases.forEach((item)=>{
        if(!output[item]){
            output[item]=[] /// we have created the key item
        }output[item].push(user.name) // key ban gaya 
    })
})
console.log(output)
