let form = document.querySelector('.form'),
  formInputs = document.querySelectorAll('.js-input'),
  nameInput = document.getElementById('name-input'),
  surnameInput = document.getElementById('surname-input'),
  emailInput = document.getElementById('email-input'),
  phoneInput = document.getElementById('phone-input'),
  aboutInput = document.getElementById('about-input'),
  courseInputs = document.querySelectorAll('.course-input'),
  cityInput = document.getElementById('city-input'),
  studyInput = document.getElementById('study-input');

form.onsubmit = function(){
  let isValid = true;
  if(surnameInput.value===''){
    isValid=false;
    document.getElementById('nonvalid-surname').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-surname').textContent="";
    if(!/^[a-zA-Zа-яА-Я]{1,20}$/.test(surnameInput.value)){
      isValid=false;
      document.getElementById('nonvalid-surname').textContent="Поле может содержать до 20 символов русского или английского алфавита";
    }
    else{
      document.getElementById('nonvalid-surname').textContent="";
    }
  }


  if(nameInput.value===''){
    isValid=false;
    document.getElementById('nonvalid-name').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-name').textContent="";
    if(!/^[a-zA-Zа-яА-Я]{1,20}$/.test(nameInput.value)){
      isValid=false;
      document.getElementById('nonvalid-name').textContent="Поле может содержать до 20 символов русского или английского алфавита";
    }
    else{
      document.getElementById('nonvalid-name').textContent="";
    }
  }


  if(emailInput.value===''){
    isValid=false;
    document.getElementById('nonvalid-email').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-email').textContent="";
    if(!/^\w+([\.\w]+)*\w@\w((\.\w)*\w+)*\.\w{2,3}$/.test(emailInput.value)){
      isValid=false;
      document.getElementById('nonvalid-email').textContent="Недопустимый формат";
    }
    else{
      document.getElementById('nonvalid-email').textContent="";
    }
  }


  if(phoneInput.value===''){
    isValid=false;
    document.getElementById('nonvalid-phone').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-phone').textContent="";
    if(!/^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/.test(phoneInput.value)){
      isValid=false;
      document.getElementById('nonvalid-phone').textContent="Недопустимый формат";
    }
    else{
      document.getElementById('nonvalid-phone').textContent="";
    }
  }


  if(aboutInput.value===''){
    isValid=false;
    document.getElementById('nonvalid-about').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-about').textContent="";
    if(aboutInput.value.length>250){
      isValid=false;
      document.getElementById('nonvalid-about').textContent="Размер текста не должен превышать 250 символов";
    }
    else{
      document.getElementById('nonvalid-about').textContent="";
    }
  }
  
  let isChecked = false;
  courseInputs.forEach(el => {
    if(el.checked) isChecked = true;
  });
  if(!isChecked){
    document.getElementById('nonvalid-course').textContent="поле должно быть заполненно";
  }
  else{
    document.getElementById('nonvalid-course').textContent="";
  }

  let isCorrect=true;
  if(isValid){
    if(cityInput.value!=="Minsk") isCorrect =false;
    if(!courseInputs[2].checked) isCorrect = false;
    if(!studyInput.checked) isCorrect =false;
    
    if(!isCorrect){
      isValid=confirm("Вы уверены в своем ответе?")
    }
  }

  return isValid;
}
