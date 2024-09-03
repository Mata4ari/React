async function f()
{
  let result = await Promise.resolve(21);
  console.log(result);
  let result2 = await Promise.resolve(result*2);
  console.log(result2);
}
f();