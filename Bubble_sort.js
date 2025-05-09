let arr = [12, 2, 43, 55, 76, 1, 0, 99];
for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);

  for (j = 0; j < arr.length; j++) {
    // console.log(arr[j]);
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
