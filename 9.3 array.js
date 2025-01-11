
//Exercise 4: Create an array of numbers in reverse order of the elements of an existing array.
let arr3 = [4, 65, 45, 78, 46]
n = arr3.length;
for (let i = 0; i < n; i++) {
       // Swap arr3[i] with arr3[n-i-1]
      let temp = arr3[i];
      arr3[i] = arr[n - i - 1];
      arr3[n - i - 1] = temp;
}

for (let i = 0; i < n; i++) {
      console.log(arr3[i]);
}
