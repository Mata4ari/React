function execute(students) {
  let k = 0;
  let mark = [];
  let A=[];

  for (let i = 0; i < students.length; i++) {
    if (students[i].age > 17) {
      if (mark[students[i].groupId - 1] === undefined)
        mark[students[i].groupId - 1] = new Object();
      mark[students[i].groupId - 1].key = students[i].groupId;
      if(mark[students[i].groupId-1].arrStudents===undefined)
      mark[students[i].groupId - 1].arrStudents = [];
      mark[students[i].groupId - 1].arrStudents.push(students[i]);
    }
  }
  return mark;
}

let students = [
  { name: "Artem", age: 14, groupId: 4 },
  { name: "Oleg", age: 20, groupId: 1 },
  { name: "Maksim", age: 18, groupId: 3 },
  { name: "Nikita", age: 17, groupId: 3 },
  { name: "Nikita", age: 19, groupId: 3 },
  { name: "Sasha", age: 19, groupId: 2 },
];
console.log(execute(students));
