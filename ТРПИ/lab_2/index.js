let thimble1 = document.getElementById("thimble1");
let thimble2 = document.getElementById('thimble2');
let thimble3 = document.getElementById('thimble3');
let bool1 = document.getElementById("bool1");
let bool2 = document.getElementById('bool2');
let bool3 = document.getElementById('bool3');
let boolArr = document.querySelectorAll('.thimbleImg2');
let thimbleArr = document.querySelectorAll('.thimble');
let diametrInput = document.getElementById('inputDiametr');
let heightInput = document.getElementById('inputHeight');
let widthInput = document.getElementById('inputWidth');
let form = document.getElementById('form');
let resDiv = document.querySelector('.resDiv');
let message = document.querySelector('.message');
let count = 0;
let Active = false;
let boll; 
let diametr,thimbleW,thimbleH;


thimble1.addEventListener("click", function() {
  if(!Active){
    Active = true;
    liftAndDrop(thimble1,1);
    }
});
thimble2.addEventListener("click", function() {
  if(!Active){
    Active = true;
    liftAndDrop(thimble2,2);
    }
});
thimble3.addEventListener("click", function() {
  if(!Active){
  Active = true;
  liftAndDrop(thimble3,3);
  }
});

let reloadInp = document.querySelector('.reloadInp').addEventListener("click",function(){
  count =0;
    resDiv.textContent = "Результат: 0";
});

function liftAndDrop(thimble,thimbleNum){
  bool = Math.floor(Math.random() * 3) + 1;
  if(bool === 1){
    bool1.style.visibility = "visible";
    if(thimbleNum===1){
      count++;
      resDiv.textContent = "Результат: "+count;
      message.classList.add("messageG");
      message.textContent = "Верно";
    }
    else{
      if(count>0)
      count--;
      resDiv.textContent = "Результат: "+count;
      message.classList.remove("messageG");
      message.textContent = "Неверно";
    }
  }
  else if(bool===2){
    bool2.style.visibility = "visible";
    if(thimbleNum===2){
      count++;
      resDiv.textContent = "Результат: "+count;
      message.classList.add("messageG");
      message.textContent = "Верно";
    }
    else{
      if(count>0)
      count--;
      resDiv.textContent = "Результат: "+count;
      message.classList.remove("messageG");
      message.textContent = "Неверно";
    }
  }
  else if(bool===3){
    bool3.style.visibility = "visible";
    if(thimbleNum===3){
      count++;
      resDiv.textContent = "Результат: "+count;
      message.classList.add("messageG");
      message.textContent = "Верно";
    }
    else{
      if(count>0)
      count--;
      resDiv.textContent = "Результат: "+count;
      message.classList.remove("messageG");
      message.textContent = "Неверно";
    }
  }



  thimble.style.top = "0";
  thimble.offsetWidth;
  thimble.style.transition = "top 2s ease";
  thimble.style.top = "-150px";
  setTimeout(function() {
    thimble.style.transition = "top 2s ease";
    thimble.style.top = "0"; 
    setTimeout(function() {
    Active = false;
    bool3.style.visibility = "hidden";
    bool2.style.visibility = "hidden";
    bool1.style.visibility = "hidden";
    message.textContent="";
  }, 2000)
}, 2000);
}

form.onsubmit= function(){
  diametr = parseInt(diametrInput.value);
  thimbleH = parseInt(heightInput.value);
  thimbleW = parseInt(widthInput.value);

  console.log(boolArr);
  
  if(diametr!==NaN){
    if(diametr>200){ 
      boolArr.forEach(element => {
        element.style.width = 200+"px";
        element.style.height = 200+"px";
      });
    }
    else if(diametr<20) {
      boolArr.forEach(element => {
        element.style.width = 20+"px";
        element.style.height = 20+"px";
      });
    }
    else {
      boolArr.forEach(element => {
        element.style.width = diametr+"px";
        element.style.height = diametr+"px";
      });
    }
  }

  if(thimbleW!==NaN){
    if(thimbleW>250){ 
      thimbleArr.forEach(element => {
        element.style.width = 200+"px";
      });
    }
    else if(thimbleW<20) {
      thimbleArr.forEach(element => {
        element.style.width = 50+"px";
      });
    }
    else {
      thimbleArr.forEach(element => {
        element.style.width = thimbleW+"px";
      });
    }
  }

  if(thimbleH!==NaN){
    if(thimbleW>250){ 
      thimbleArr.forEach(element => {
        element.style.height = 200+"px";
      });
    }
    else if(thimbleH<20) {
      thimbleArr.forEach(element => {
        element.style.height = 50+"px";
      });
    }
    else {
      thimbleArr.forEach(element => {
        element.style.height = thimbleH+"px";
      });
    }
  }

  return false;
}