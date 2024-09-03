function params(a,b){
  if(a===b){
    return a*2+b*2;
  }
  return a*b;
}

let f =function params1(a,b){
  if(a===b){
    return a*2+b*2;
  }
  return a*b;
}

let prms = (a,b) => a===b?a*2+b*2:a*b;
console.log(params(5,5))
console.log(params1(4,5))
console.log(prms(3,2))