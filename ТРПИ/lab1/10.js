let days = [
  {
    num:1,
    nameofday:"понедельник"},
  {
    num:2,
    nameofday:"вторник"},
  {
    num:3,
    nameofday:"среда"},
  {
    num:4,
   nameofday:"четверг"},
  {
    num:5,
    nameofday:"пятница"},
  {
    num:6,
    nameofday:"суббота"},
  {
    num:7,
    nameofday:"воскресенье"},
  ]

const N=7
for(let i=0;i<N;i++){
  console.log(days[i].num,days[i].nameofday)
}
let x;
x=prompt("Введите номер дня недели","");
alert(days[x-1].nameofday);
