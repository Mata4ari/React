let store={
  state:{
    profilePage:{
      posts:[
        {id:1,message:'Hi',likesCount:12},
        {id:2,message:'By',likesCount:1},
      ],
      newPostText:'Bbout me',
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


let { state: { profilePage: { posts }, dialogsPage: { dialogs, messages } } } = store;


let likesCounts = posts.map(post => post.likesCount);
console.log(likesCounts); 


let filteredDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);
console.log(filteredDialogs);


store.state.messages = messages.map(message => ({ id: message.id, message: 'Hello user' }));
console.log(store); 