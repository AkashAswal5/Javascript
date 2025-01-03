//Exercise 4: Iterate over an array and print each element in reverse order.

let arr=[1,2,3,4,54,578,875,45,84,5,7,88,54];
console.log("Original Array ");
for(let i=0 ; i<arr.length ; i++){
      console.log(arr[i]);
}

console.log("Reverse Array ");
for(let i=arr.length-1 ; i>0 ; i--){
      console.log(arr[i]);
}
