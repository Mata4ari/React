let  user = {
  name: 'Masha',
  age: 21
};

let numbers = [1, 2, 3];

let user1 = {
  name: 'Masha',
  age: 23,
  location: {
      city: 'Minsk',
      country: 'Belarus'
  }
};

let user2 = {
  name: 'Masha',
  age: 28,
  skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
  {id: 1, name: 'Vasya', group: 10}, 
  {id: 2, name: 'Ivan', group: 11},
  {id: 3, name: 'Masha', group: 12},
  {id: 4, name: 'Petya', group: 10},
  {id: 5, name: 'Kira', group: 11},
]

let user4 = {
  name: 'Masha',
  age: 19,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      exams: {
          maths: true,
          programming: false
      }
  }
};

let user5 = {
  name: 'Masha',
  age: 22,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
          faculty: 'FIT',
          group: 10,
      },
      exams: [
          { maths: true, mark: 8},
          { programming: true, mark: 4},
      ]
  }
};

let user6 = {
  name: 'Masha',
  age: 21,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
          faculty: 'FIT',
          group: 10,
      },
      exams: [
          { 
  maths: true,
  mark: 8,
  professor: {
      name: 'Ivan Ivanov ',
      degree: 'PhD'
  }
     },
          { 
  programming: true,
  mark: 10,
  professor: {
      name: 'Petr Petrov',
      degree: 'PhD'
  }
     },
      ]
  }
};

let user7 = {
  name: 'Masha',
  age: 20,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
          faculty: 'FIT',
          group: 10,
      },
      exams: [
          { 
  maths: true,
  mark: 8,
  professor: {
      name: 'Ivan Petrov',
      degree: 'PhD',
      articles: [
                      {title: "About HTML", pagesNumber: 3},
                      {title: "About CSS", pagesNumber: 5},
                      {title: "About JavaScript", pagesNumber: 1},
                  ]
  }
     },
          { 
  programming: true,
  mark: 10,
  professor: {
      name: 'Petr Ivanov',
      degree: 'PhD',
      articles: [
                      {title: "About HTML", pagesNumber: 3},
                      {title: "About CSS", pagesNumber: 5},
                      {title: "About JavaScript", pagesNumber: 1},
                  ]
  }
     },
      ]
  }
};

let store = {
  state:{
    profilePage: {
      posts: [
        {id:1,message:'Hi',likesCount:12},
        {id:1,message:'Hi',likesCount:12},
      ],
      newPostText:'About me',
    },
    dialogsPage:{
      dialogs:[
        {id:1,name:'Valera'},
        {id:2,name:'Andrey'},
        {id:3,name:'Sasha'},
        {id:4,name:'Viktor'},
      ],
      messages:[
        {id:1,message:'hi'},
        {id:2,message:'hi hi'},
        {id:3,message:'hi hi hi'},
      ],
    },
    sidebar:[],
  },
}

let clone1 = clone(user);
console.log(user);
console.log(clone1);

let clone2 = clone(numbers);
console.log(numbers);
console.log(clone2);

let clone3 = clone(user1);
console.log(user1);
console.log(clone3);

let clone4 = clone(user2);
console.log(user2);
console.log(clone4);

let clone5 = clone(array);
console.log(array);
console.log(clone5);

let clone6 = clone(user4);
console.log(user4);
console.log(clone6);

let clone7 = clone(user5);
clone7.studies.department.group=12;
clone7.studies.exams[1].mark=10;
console.log(user5);
console.log(clone7);

let clone8 = clone(user6);
clone8.studies.exams[1].professor.name='Smelov';
console.log(user6);
console.log(clone8);

let clone9 = clone(user7);
clone9.studies.exams[1].professor.articles[1].pagesNumber=3;
console.log(user7);
console.log(clone9);

let clone10 = clone(store);
clone10.state.dialogsPage.messages.forEach(el => {
  el.message='Hello';
});
console.log(store);
console.log(clone10);

if(Array.isArray(user))
console.log('true');


function clone(obj){
  let newObj;
  if(Array.isArray(obj)){
    newObj = [...obj];
  }
  else{
    newObj = {...obj};
  }
  for(key in newObj){
    if(typeof(newObj[key])=='object'){
      newObj[key]=clone(newObj[key]);
    }
  }
  return newObj;
}