function Shoes(id,size,color,cost){
  this.id=id;
  this.size=size;
  this.color=color;
  this.cost=cost;
}
let products={
  shoes:{botinki:[],krosovki:[],sandali:[]}
}
addProduct("shoes","botinki",14,39,"black",555);
addProduct("shoes","sandali",13,40,"green",755);
addProduct("shoes","botinki",11,39,"red",111);
addProduct("shoes","sandali",10,40,"red",145);
addProduct("shoes","krosovki",77,39,"black",325);
addProduct("shoes","krosovki",15,40,"green",100);

function addProduct(category,type,id,size,color,cost){
  products[category][type].push(new Shoes(id,size,color,cost));
}
function selectCost(min,max){
  let arr = [...products.shoes.botinki,...products.shoes.krosovki,...products.shoes.sandali]
  arr.forEach(el => {
    if(el.cost>=min&&el.cost<=max){
      console.log(el.id);
    }
  });
}
function selectColor(color){
  let arr = [...products.shoes.botinki,...products.shoes.krosovki,...products.shoes.sandali]
  arr.forEach(el => {
    if(el.color===color){
      console.log(el.id);
    }
  });
}
function selectSize(size){
  let arr = [...products.shoes.botinki,...products.shoes.krosovki,...products.shoes.sandali]
  arr.forEach(el => {
    if(el.size===size){
      console.log(el.id);
    }
  });
}
selectCost(10,250);
selectColor("green");
selectSize(39);
console.log(products);