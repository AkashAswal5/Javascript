// how to handle asynchronous functions

// two function when they are depended on each other ,cause error
/* 
promise : is a js object. whenever  

*/

function add(a,b) // you have to finish the assignment 
{
    return a+b;
}

function play() // after that you can play 
{
    console.log("you are allowed to play");
}


// // now make sum as synchronous 
// setTimeout(()=> console.log(add(2,5)),10000); // asynchronous
// play();

// const p=new Promise((resolve, reject) =>              // 3 states  (1) pending --->( (2)resolved or  (3)reject )
// {
//     setTimeout(()=> {
//         console.log(add(2,5))  ;
//     play();   }
//     ,10000);
// }) 

// issue : 1) scalibility 2) response time  3) debugging difficult
// solid state function:  ---->    one function one work 

// promise

const p=new Promise((resolve, reject) =>              // 3 states  (1) pending --->( (2)resolved or  (3)reject )
{
    setTimeout(()=> {
        success=true
        if (success){s
            console.log(add(2,5));
            resolve(' the add function is successfully executed') // signalling mechansim
        }
        else{
            reject('the add function has some issues');
        }
        console.log(add(2,5))  ;
   resolve('the add function is successfully  executed')    } // signalling mechanism
    ,10000);
}) 

p.then((msg)=>{
    console.log(msg);  // siginalling message which we got after successfully resolving  the promise 
    play(); // we can call the play function
}).catch((error)=> console.log(error))







