let tasks = [
  {id:1,title:"HTML&CSS",isDone:true},
  {id:2,title:"JS",isDone:true},
  {id:3,title:"ReactJS",isDone:false},
  {id:4,title:"Rest API",isDone:false},
  {id:5,title:"GraphQL",isDone:false},
];

let task={id:6,title:"Survive",isDone:false};
tasks= {...tasks,task};
console.log(tasks);