function func(...args){
  let obj = new Object();
  for(let i=0;i<args.length;i++)
  {
    Object.assign(obj,args[i]);
  }
  return obj;
}

let item=func({a:1,b:2},{c:3});
console.log(item);