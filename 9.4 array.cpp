// Write a function to check if a given array is sorted in ascending order.

function issorted(arr){

      for(let i=0 ; i<arr.length-1 ; i++){
            if(arr[i]>arr[i+1]){
                  return false;
            }
      }
      return true;
}

console.log(issorted([1,2,3,4]));
console.log(issorted([4,3,2,1]));
