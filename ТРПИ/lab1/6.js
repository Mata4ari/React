const firstName = "Ольга"
const surName = "Панченко Ольга Леонидовна"
const lastName = "Ольга Леонидовна"
inpName = prompt("Введите имя преподавателя","");
console.log(inpName)
if(inpName.toUpperCase()===firstName.toUpperCase()||inpName.toUpperCase()===surName.toUpperCase()||
inpName.toUpperCase()===lastName.toUpperCase()){
  alert("Имя введено верно")
}
else{
  alert("Имя введено неверно")
}