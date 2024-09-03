interface IProduct{
  id:number;
  size:number;
  color:string;
  cost:number;
  discount:number;
}

interface Shoes{
  boots:Product[];
  sandali:Product[];
  krossovki:Product[];
}

class Product implements IProduct{
  public id:number;
  public cost:number;
  public color:string;
  public discount:number;
  public size:number;
  private _finalCost: number;

  constructor(id:number,size:number,color:string,cost:number) {
    this.color=color;
    this.cost=cost;
    this.id=id;
    this.size=size;
    this.discount=0;
  }
  public get finalCost(): number {
    this._finalCost=this.cost-this.discount*this.cost;
    return this._finalCost;
  }
  public set finalCost(cost:number){
    if(cost<=this.cost)
    this.discount=(this.cost-cost)/this.cost;
    if(cost>0)
    this._finalCost=cost;
  }
}

class Products implements Iterable<Product>{
  public shoes:Shoes;

  constructor(shoes:Shoes){
    this.shoes=shoes;
  }

  public addShoes(shoesType:string,id:number,size:number,color:string,cost:number):void{
    if(shoesType!=='boots'&&shoesType!=='sandali'&&shoesType!=='krossovki')
      console.log('Неправильная категория товара')

      let product:Product = new Product(id,size,color,cost);
      this.shoes[shoesType].push(product);
  }

  public selectByCost(min:number,max:number):void{
    console.log('Товары по заданной цене:')
    for(let item of this){
      if(item.cost>=min&&item.cost<=max)
        console.log(item.id);
    }
  }

  public selectByColor(color:string){
    console.log('Товары по заданному цвету:')
    for(let item of this){
      if(item.color.toUpperCase()===color.toUpperCase())
        console.log(item.id);
    }
  }

  public selectBySize(size:number){
    console.log('Товары по заданному размеру:')
    for(let item of this){
      if(item.size===size)
        console.log(item.id);
    }
  }

  [Symbol.iterator]():Iterator<Product> {
    let index:number=0;
    let arr: Product[] = [...this.shoes.boots, ...this.shoes.krossovki, ...this.shoes.sandali];
    return {
        next(): IteratorResult<Product> {
          return index < arr.length
          ? { value: arr[index++], done: false }
          : { done: true,value:undefined };
        }
    };
  }

}

let products:Products = new Products({boots:[],sandali:[],krossovki:[]});

products.addShoes('boots',1,42,'black',2500);
products.addShoes('boots',4,43,'blue',2750);
products.addShoes('sandali',2,39,'white',1500);
products.addShoes('sandali',3,38,'pink',1700);
products.addShoes('krossovki',8,40,'green',3000);
products.addShoes('krossovki',10,41,'black',2950);

for(let i of products){
  console.log(i);
}

products.selectByCost(1000,2000);
products.selectByColor('black');
products.selectBySize(40);

products.shoes.boots[0].finalCost=1500;
console.log('\n'+products.shoes.boots[0].discount);