let products = [
 { id:111,name:"apple",col:5,cost:20},
 { id:116,name:"apple",col:44,cost:15},
 { id:112,name:"tomato",col:10,cost:7},
 { id:113,name:"orange",col:33,cost:3},
 { id:114,name:"cucumber",col:1,cost:50},
 { id:115,name:"lemon",col:14,cost:11}
]

let map=new Map();

products.forEach(element => {
  Add(element);
});

function Add(el)
{
  map.set(el.id,el);
}
function Del(id)
{
  map.delete(id);
}

function DelByName(name)
{
  map.forEach(el=>{
    if(el.name===name)
    {
      Del(el.id)
    }
  });
}

function changeCol(id,col)
{
  map.get(id).col=col;
  console.log(map.get(id));
}

function changeCost(id,cost)
{
  map.get(id).cost=cost;
  console.log(map.get(id));
}

function generalCost()
{
  console.log("size = "+map.size);
  let sum=0;
  map.forEach(el=>{
    sum+=el.cost;
    })
    console.log("general cost = "+sum);
}

Del(112);
DelByName("apple");
changeCol(113,67);
changeCost(113,15);
generalCost();
console.log(map);