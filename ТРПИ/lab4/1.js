let set = new Set(["Рис", "Тушенка", "Яблоки", "Огурцы", "Йогурт"]);
function Add(str) {
  set.add(str);
}
function Del(str) {
  set.delete(str);
}
function Cheack(str) {
  return set.has(str);
}
function Size() {
  return set.size;
}

Add("Гречка");
Del("Яблоки");
console.log(set);
console.log(Cheack("Рис"));
console.log(Size());
