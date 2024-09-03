let f = n => {
  let x = 0;
  for (let i = 1; i <= Math.abs(n); i++) {
    x += i * i;
  }
  console.log(x);
};
f(3);
