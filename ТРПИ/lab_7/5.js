new Promise((resolve,reject)=>{
  resolve(21);
})
.then((result)=>{console.log(result);return result})
.then((result)=>console.log(result*2));


