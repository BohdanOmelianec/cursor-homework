// 3
export function getRandomPassword(quantity = 8) {
    if (isNaN(quantity) || quantity <= 0) {
        return "Please enter valid value";
    }
    let password = '';
    for (let i = 1; i <= quantity; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}

// 5
export function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

// 6
export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

export function getStudentsNames(students) {

    return students.map(obj => obj.name).sort();
}

// 8
export class Student {
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
        return `${this.course}th year student of ${this.university}, ${this.fullName}`;
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

// 9
export function getRandomColor() {
    return `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)} )`;
}

// 11
export async function getRandomChinese(length) {
    let characters = '';

    for (let i = 0; i < length; i++) {
        const myPromise = new Promise(resolve => {
            const sign = Date.now().toString().slice(-5);
            const str = String.fromCharCode(sign);
            setTimeout(() => {
                resolve(str);
            }, 50);
        });

        characters += await myPromise;
    }

    return characters;
}

// 14
export function* newFontGenerator(start) {
    let result = yield start;

    while (true) {
        if (result == 'up') {
            result = yield start += 2;
        } else if (result == 'down') {
            result = yield start -= 2;
        } else {
            result = yield start;
        }
    }
}