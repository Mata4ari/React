let A = [[1,2],[3,[4,5,6,7]]]
function Sum(arr){
  let sum = arr.reduce(function(sum,num){
  if(!Array.isArray(num)){
  return sum+num;
  }else{
    return sum + Sum(num);
  }
},0)
return sum}
let sum = Sum(A);

console.log(sum)