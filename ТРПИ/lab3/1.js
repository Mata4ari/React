let A = [1, [1, 2, [3, 4]], [2, 4]];

function arrTransform(arr) {
  return arr.reduce(function (currentArr, current) {
    if (Array.isArray(current)) {
      return currentArr.concat(arrTransform(current));
    } else {
      return currentArr.concat(current);
    }
  }, []);
}

let B = arrTransform(A);

console.log(B);
