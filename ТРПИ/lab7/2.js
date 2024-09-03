function Shoes(id,size,color,cost){
  this.id=id;
  this.size=size;
  this.color=color;
  this.cost=cost;
  Object.defineProperty(this, "cost", {
    writable: true,
    enumerable: true,
    configurable: false

  }); 
  Object.defineProperty(this, "id", {
    writable: false,
    enumerable: true,
    configurable: false

  }); 
  Object.defineProperty(this, 'discountCost', {
    get() {
      return this.cost-newProducts.shoes.discount/100*this.cost;
    }
  });
}
let newProducts={
  shoes:{botinki:[],krosovki:[],sandali:[],discount:15}
}
addProduct("shoes","botinki",14,39,"black",555);
addProduct("shoes","sandali",13,40,"green",755);
addProduct("shoes","botinki",11,39,"red",111);
addProduct("shoes","sandali",10,40,"red",145);
addProduct("shoes","krosovki",77,39,"black",325);
addProduct("shoes","krosovki",15,40,"green",100);

function addProduct(category,type,id,size,color,cost){
  newProducts[category][type].push(new Shoes(id,size,color,cost));
}
newProducts.shoes.krosovki[0].id=5;
console.log(newProducts.shoes.krosovki[0])


let descriptor = Object.getOwnPropertyDescriptor(newProducts.shoes.botinki[0], 'cost');
console.log( JSON.stringify(descriptor, null, 2 ) );
let descriptor2 = Object.getOwnPropertyDescriptor(newProducts.shoes.botinki[0], 'id');
console.log( JSON.stringify(descriptor2, null, 2 ) );
console.log(newProducts.shoes.botinki[0].discountCost);
console.log(newProducts);