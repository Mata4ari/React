function repeat(n, str) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string += str;
  }
  return string;
}
console.log(repeat(4, "Hello "));
