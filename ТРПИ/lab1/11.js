 function getLine(parm1=18,a,b=prompt("write line","")){
  let str = parm1+a+b;
  return str
}
let str = getLine(undefined,"Hello");
alert(str);