let array = [4, 7, 11, 6, 9];
function average(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = x + arr[i];
  }
  x = (x / arr.length).toFixed(3);
  return x;
}
console.log(average(array));
