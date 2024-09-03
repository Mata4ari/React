const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
let car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
/////////////////////3
const car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
class Group {
    studentsFilter(group) {
        let arr = new Array;
        this.students.forEach(el => {
            if (el.group === group) {
                arr.push(el);
            }
        });
        return arr;
    }
    marksFilter(mark) {
        let arr = new Array;
        let hasMark;
        this.students.forEach(student => {
            hasMark = false;
            student.marks.forEach(el => {
                if (el.mark === mark) {
                    hasMark = true;
                }
            });
            if (hasMark)
                arr.push(student);
        });
        return arr;
    }
    deleteStudent(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id === id) {
                this.students.splice(i, 1);
                return;
            }
        }
        console.log('Студента с таким id нету в списке');
    }
}
let group = new Group();
group.students = [
    { id: 1, name: 'maksim', group: 5, marks: [{ subject: 'OOP', mark: 5, done: true }, { subject: 'KSIS', mark: 6, done: true }] },
    { id: 2, name: 'oleg', group: 2, marks: [{ subject: 'OOP', mark: 6, done: true }] },
    { id: 3, name: 'ivan', group: 3, marks: [{ subject: 'OOP', mark: 7, done: true }] },
    { id: 4, name: 'lesha', group: 3, marks: [{ subject: 'OOP', mark: 8, done: true }] },
    { id: 5, name: 'nikita', group: 1, marks: [{ subject: 'OOP', mark: 9, done: true }] },
];
let a = group.marksFilter(6);
console.log(a);
group.deleteStudent(1);
console.log(group);
