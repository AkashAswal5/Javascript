/*
predefined API of the promise
 topics: promise.all(),
 */

p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
})

p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
})

p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
})

//  async function promise_executor()
//  {
//     data1=await p1 //1 after 3 sec  // ------>
//                                             //------->
//                                                    //----->
//     data2=await p2 // 2 after 2 sec
//     data3 =await p3 // 3 after 1 sec
//     console.log(data1+data2+data3)  // 6 sec
//  }

//  promise_executor();



// using promise.all() to achieve paralleziation
async function promise_executor() {
    data = await Promise.all([p1, p2, p3]) // Promise.all take in array of promises as at the parameter
    console.log(data)    // 3 sec time 
    sum = data.reduce((ac, ele) => ac + ele, 0)
    console.log(sum)
}
// promise_executor()  





//-------------------  card


async function promise_executor() {
    try {
        data = await Promise.allSettled([p1, p2, p3]) // Promise.all take in array of promises as at the parameter
        sum = data.reduce((ac, obj) => {
            if (obj.status == 'fulfilled') {
                acc += obj.value()
            } return ac
        },0)console.log(sum)
    }
    catch (e) {
        console.log('promise got drupted');
    }
}


// promise_executor()
// all selected
// race , any ---->API 


async function promise_executor() {
    try {
        data = await Promise.any/**race*/([p1, p2, p3]) // Promise.all take in array of promises as at the parameter
        console.log(sum)
    }
    catch (e) {
        console.log('promise got disrputed');
    }
}


promise_executor()

