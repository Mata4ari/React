function func(n){
  let obj = new Object();
  for(let i=1;i<=n;i++)
  {
    let str="";
    for(let j=1;j<=i*2-1;j++)
    {
      str+="*";
    }
    Object.assign(obj,{[i]:str});
  }
  return obj;
}
let n=4
let item=func(n);
for(let i=1;i<=n;i++)
{
  let str="";
  for(let j=n-i;j>0;j--)
  {
    str+=" ";
  }
  console.log(str+item[i]);
}