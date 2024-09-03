function Volume(l) {
  return function(w) {
    return function(h) {
      return l*w*h;
    };
  };
}

function Volume2(l) {
    return function(h) {
      return l*l*h;
    };
}

let volume = Volume(3)(4)(5); 
console.log( volume);

let volumeSameSide = Volume2(2)(3);
console.log(volumeSameSide);