let arr = [1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<10;i++){
  if(arr[i]%2===0){
    arr[i]+=2
    console.log(arr[i])
    continue
  }
  console.log(arr[i]+"mm")
}