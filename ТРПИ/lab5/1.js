let currentCount=1;
function makeCounter(){
  
  return function(){
    return currentCount++;
  }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

let counter2=makeCounter();
console.log(counter2());