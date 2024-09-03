let A = "ABCC";

let buf = "";
let total1;

for (let i = 0; i < A.length; i++) {
  buf += A.charCodeAt(i);
}
total1 = parseInt(buf);
let total2 = parseInt(buf.replace(/7/g, "1"));

console.log(total1 - total2);
