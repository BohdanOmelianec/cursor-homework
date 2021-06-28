class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
    }

    get studentMarks() {
        if (this.expelled) {
            return null;
        }
        return this.marks;
    }

    set studentMarks(mark) {
        if (this.expelled) {
            console.log(null);
            return;
        }
            this.marks.push(mark);
            console.log(`Ви встановили нову оцінку: ${ JSON.stringify(this.marks) }`);   
    }

    getInfo() {
        console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}`);
    }

    getAverageMark() {
        if (this.marks.length === 0) {
            return 0;
        }

        const averageMark = this.marks.reduce((prev, curr) => {
            return prev + curr;
        }, 0);

        return (averageMark / this.marks.length).toFixed(1);
    }

    dismiss() {
        this.expelled = true;
    }

    recover() {
        this.expelled = false;
    }

    
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);

        this.timerId = setInterval(() => {
            this.getScholarship();
        }, 1000);

        setTimeout(() => {
            clearInterval(this.timerId);
        }, 5000);
    }

    
    getScholarship() {
        if (this.getAverageMark() >= 4 && !this.expelled) {
            console.log('Ви отримали 1400 грн. стипендії');
        } else {
            console.warn('Ви не отримуєте стипендії.');
            console.warn(this.expelled ? 'Ви відраховані.' : `Ваша середна оцінка: ${this.getAverageMark()}`);
        }   
    }
}


// Екземпляр класу Student
console.group('Звичайний студент');
const Roman = new Student('НУЛП м.Львів', 3, 'Роман Бараболя');

Roman.getInfo();
Roman.studentMarks = 4;
Roman.studentMarks = 3;
Roman.studentMarks = 3;
console.log(`Оцінки студента: ${ JSON.stringify(Roman.studentMarks) }`);
console.log(`Ваша середня оцінка: ${Roman.getAverageMark()}`);


Roman.dismiss();
console.error('Студента відраховано');
Roman.studentMarks = 5;

Roman.recover();
console.warn('Студента поновлено');
Roman.studentMarks = 5;
console.groupEnd();


// Екземпляр класу BudgetStudent
console.group('Студент бюджетник');
const Petro = new BudgetStudent('університет ім. І.Франка', 4, 'Петро Вжик');

Petro.getInfo();
Petro.studentMarks = 4;
Petro.studentMarks = 5;
Petro.studentMarks = 4;
console.log(`Оцінки студента: ${ JSON.stringify(Petro.studentMarks) }`);

console.log(`Ваша середня оцінка: ${Petro.getAverageMark()}`);

Petro.dismiss();
console.error('Студента відраховано');
Petro.studentMarks = 5;

Petro.recover();
console.warn('Студента поновлено');
Petro.studentMarks = 5;
console.groupEnd();