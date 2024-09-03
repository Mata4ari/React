new Promise((resolve,reject)=>{
  setTimeout(() => resolve(Math.floor(Math.random() * 10)), 3000);
})
.then(result=>console.log(result))
.catch(error=>console.log(error));

function rand(delay){
  return new Promise((resolve)=>{setTimeout(() => resolve(Math.floor(Math.random() * 10)), delay)})
}

Promise.all([
  rand(1000),
  rand(4000),
  rand(2000)
]).then(result=>console.log(result));

let pr = new Promise((res,rej) => {
  rej('ku')
})

pr
  .then(() => console.log(1))
  .catch(() => console.log(2))
  .catch(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5+'\n'))


