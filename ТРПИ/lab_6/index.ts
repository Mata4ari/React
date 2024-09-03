type Student = {
    id:number,
    name:string,
    group:number
}

const array:Student[] = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
/////////////////////2
type CarsType= {
    manufacturer?:string,
    model?:string
}

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

/////////////////////3
const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

type ArrayCarsType = {
    cars:CarsType[]
}

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

///////////////////////////////4
type DoneType = boolean;
type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}

type GroupFilterType = 1|2|3|4|5|6|7|8|9|10|11|12;

type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students:StudentType[] // массив студентов типа StudentType
    studentsFilter: (group: GroupFilterType) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: MarkFilterType) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

class Group implements GroupType{
    students: StudentType[]
    mark: MarkFilterType
    group: GroupFilterType

    studentsFilter(group: GroupFilterType):Array<StudentType>{
        let arr:Array<StudentType> = new Array<StudentType>;
        this.students.forEach(el => {
            if(el.group===group){
                arr.push(el);
            }
        });
        return arr;
    }
    marksFilter(mark:MarkFilterType):Array<StudentType>{
        let arr:Array<StudentType> = new Array<StudentType>;
        let hasMark:boolean;
        this.students.forEach(student => {
            hasMark = false;
            student.marks.forEach(el=>{
                if(el.mark===mark){
                    hasMark=true;
                }
            })
            if(hasMark) arr.push(student);
        });
        return arr;
    }
    deleteStudent(id: number): void{
        for(let i=0;i<this.students.length;i++){
            if(this.students[i].id===id){
                this.students.splice(i,1);
                return;
            }
        }
        console.log('Студента с таким id нету в списке');
    }
}

let group = new Group();
group.students=[
    {id:1,name:'maksim',group:5,marks:[{subject:'OOP',mark:5,done:true},{subject:'KSIS',mark:6,done:true}]},
    {id:2,name:'oleg',group:2,marks:[{subject:'OOP',mark:6,done:true}]},
    {id:3,name:'ivan',group:3,marks:[{subject:'OOP',mark:7,done:true}]},
    {id:4,name:'lesha',group:3,marks:[{subject:'OOP',mark:8,done:true}]},
    {id:5,name:'nikita',group:1,marks:[{subject:'OOP',mark:9,done:true}]},
]

let a:Array<StudentType>=group.marksFilter(6);
console.log(a);
group.deleteStudent(1);
console.log(group);