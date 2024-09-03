function rev(str) {
  str = str.replace(/[^a-z]/gi, "");
  return str.split("").reverse().join("");
}
console.log(rev("Javascr10?Привет ipt"));
