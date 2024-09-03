let set = new Set();
let obj1 = { num: 16, group: 4, fio: "Maksim" };
let obj2 = { num: 6, group: 1, fio: "Pavel" };
let obj3 = { num: 11, group: 3, fio: "Nikita" };
function Add(obj) {
  set.add(obj);
}
function Del(num) {
  for (let i of set) {
    if (i.num == num) {
      set.delete(i);
      return;
    }
  }
}
function GroupSelect(g) {
  let temp = new Set();
  for (let i of set) {
    if (i.group == g) {
      temp.add(i);
    }
  }
  return temp;
}
function Order() {
  let arr = Array.from(set);
  arr.sort((a, b) => (a.num > b.num ? 1 : -1));
  let s = new Set(arr);
  return s;
}

Add(obj1);
Add(obj2);
Add(obj3);
Del(11);
console.log(set);
let firstGroup = GroupSelect(1);
console.log(firstGroup);
let set1 = Order();
console.log(set1);
