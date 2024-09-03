function* move(str) {
  let x = 0;
  let y = 0;
  let count = 0;

  while (count < 10) {
    if (str === 'left') {
      x -= 1;
    } else if (str === 'right') {
      x += 1;
    } else if (str === 'up') {
      y += 1;
    } else if (str === 'down') {
      y -= 1;
    }
    count += 1;
    yield { x, y };
  }
  
}

let str = prompt('Введите направление (left, right, up, down):');

let generator = move(str);

for (let i = 0; i < 10; i++) {
  let { x, y } = generator.next().value;
  console.log("Координаты: "+x+","+y);
}

var a=33;
var b=15;
console.log(window);
window.a=24;
console.log(window.a);
console.log(window.b);
