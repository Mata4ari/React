let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj.a+obj.b;
    cache.set(obj, result);
  }
  return cache.get(obj);
}

let obj = {a:5,b:7};

let result1 = process(obj);
console.log(cache);
let result2 = process(obj);
obj = null;
console.log(cache);
