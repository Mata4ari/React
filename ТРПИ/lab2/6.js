function checkEnter(str, strings2) {
  for (let i = 0; i < strings2.length; i++) {
    if (str === strings2[i]) return true;
  }
  return false;
}

function inter(strings1, strings2) {
  let strs = [];
  let i = 0;
  for (let k = 0; k < strings1.length; k++) {
    if (!checkEnter(strings1[k], strings2)) {
      strs[i] = strings1[k];
      i++;
    }
  }
  return strs;
}
let A = ["Hello", "World", "summer"];
let B = ["Yellow", "car", "World"];
console.log(inter(A, B));
