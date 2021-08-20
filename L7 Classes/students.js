const GROUP =  {
    teacher: { 
        name: 'Andrew', 
        surname: 'White', 
        age: 30,
    },
    students: [
        { 
            name: 'Micheal', 
            surname: 'Montoya', 
            age: 36,
            marks: [3,3,4,5,3]
        },
        { 
            name: 'Ronan',
            surname: 'Cullen', 
            age: 32,
            marks: [5,5,4,5,5]
        },
        { 
            name: 'Kitty',
            surname: 'Fields', 
            age: 26,
            marks: [3,5,4,4,4]
        },
        { 
            name: 'Brielle',
            surname: 'Chan', 
            age: 22,
            marks: [5,5,5,5,5]
        }
    ]
}

class User {
    constructor({name, surname, age}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    print(selector, info) {
        let section = document.querySelector(selector);
        let userInfo = document.createElement('div');

        userInfo.classList.add('user-info');

        userInfo.innerHTML = `
            <h3>${this.getFullName()}</h3>
            <i>Age ${this.age}</i>
            <p>${info}</p>
        `;

        section.append(userInfo);
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Teacher extends User {
    constructor({students, ...info}) {
        super(info);
        this.students = students;
    }

    getStudentByName(name) {
        return this.students.find( student => student.name === name);
    }

    getStudentListByAverageMark() {
        return this.students.sort((student1, student2) => student2.getAverageMark() - student1.getAverageMark())
                     .map( student => student.name )
    }
}

class Student extends User {
    constructor({marks, ...info}) {
        super(info);
        this.marks = marks;
    }

    getAverageMark() {
        return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
    }

}

let andrewUser = new User({ 
    name: 'Andrew', 
    surname: 'White', 
    age: 30,
});


let students = getUsers(GROUP.students.slice())
let teacher = new Teacher({ students, ...GROUP.teacher});

console.log(teacher.getStudentByName('Ronan'));
console.log(teacher.getStudentListByAverageMark());


function getUsers(students) {
    return students.map( student => new Student(student) )
}
