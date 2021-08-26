// let n: number = 10;
// let str: string = '';
// let is: boolean = true;

// // let smth: any = 'dd';

// // smth = 10;


// function sum(a: number, b: number): number {
//     return a + b;
// }

// console.log(sum(n, 10));

// let numbers: number[] = [1,2];

// let result: number[] = numbers.filter( (n: number) => n >= 2);


// interface IBaseAnimalInfo {
//     name: string;
//     age: number;
// }

// interface ICatInfo {
//     locate: string;
//     owner: string;
// }

// interface ICat extends IBaseAnimalInfo {
//     isRed: boolean;
//     packs: number[];
//     info: ICatInfo;
//     showNameWithPrefix: (prefix: string) => void;
// }

// let cat: ICat = {
//     name: "Bob",
//     age: 10,
//     isRed: true,
//     packs: [1,2,3,4,5],
//     info: {
//         locate: 'Kharkiv',
//         owner: 'Dima'
//     },
//     showNameWithPrefix(prefix: string): void {
//         console.log(`${prefix}-${this.name}`);
//     }
// };

// cat.showNameWithPrefix('cat');
enum Status {
    ACTIVE = 'red',
    SUCCESS = 'green',
    PENDING = 'gray',
}

interface IUser {
    name: string;
    surname: string;
    age: number;
}

interface IUserWithStatus {
    name: string;
    surname: string;
    age: number;
    status: Status;
}

interface IStudent extends IUser {
    marks: number[];
}

interface IGroupData {
    teacher: any;
    students: IStudent[];
}

let userInfo: IUserWithStatus = {
    name: 'string',
    surname: 'string',
    age: 10,
    status: Status.ACTIVE,
}

console.log(userInfo);


const GROUP: IGroupData =  {
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
    public name: string;
    public surname: string;
    public age: number;

    protected privateInfo: string = 'password';

    constructor({ name, surname, age }: IUser) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    print(selector: string, info: string): void {
        let section: HTMLElement | null = document.querySelector(selector);
        let userInfo: HTMLElement = document.createElement('div');

        userInfo.classList.add('user-info');

        userInfo.innerHTML = `
            <h3>${this.getFullName()}</h3>
            <i>Age ${this.age}</i>
            <p>${info}</p>
        `;

        if(section) {
            section.append(userInfo);
        }
    }

    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }

    login() {
        console.log(this.privateInfo);
    }
}

class Student extends User {
    public marks: number[];

    constructor({marks, ...info}: IStudent) {
        super(info);
        this.marks = marks;
    }

    getAverageMark(): number {
        return this.marks.reduce((sum: number, mark: number) => sum + mark) / this.marks.length;
    }

    login() {
        console.log(this.privateInfo);
    }

    getFullName(): string {
        return `${this.name} ${this.surname}-student`;
    }

}

let student: Student = new Student(GROUP.students[0]);
