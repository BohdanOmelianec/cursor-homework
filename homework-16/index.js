import './style16.css';
import {
    getRandomPassword,
    filterEvenNumbers,
    students,
    getStudentsNames,
    Student,
    getRandomColor,
    newFontGenerator,
    getRandomChinese
} from './homework-16';

const hw3 = document.querySelector('.hw3'),
    hw5 = document.querySelector('.hw5'),
    hw6 = document.querySelector('.hw6'),
    hw8 = document.querySelector('.hw8'),
    hw9 = document.querySelector('.hw9'),
    hw11 = document.querySelector('.hw11'),
    hw14 = document.querySelector('.hw14');

hw3.textContent = `getRandomPassword: ${getRandomPassword(4)}`;
hw5.textContent = `filterEvenNumbers: ${filterEvenNumbers(6, 42, 51, 3, 18)}`;
hw6.textContent = `getStudentsNames: ${getStudentsNames(students)}`;
const student = new Student('NULP', 4, 'Iron Man');
hw8.textContent = `getStudentInfo: ${student.getInfo()}`;
hw9.textContent = `getRandomColor: ${getRandomColor()}`;

getRandomChinese(4)
    .then(res => {
        hw11.textContent = `getRandomChinese: ${res}`;
    });

const fontGenerator = newFontGenerator(14);
let result = '';
result += `fontGenerator: value: ${fontGenerator.next().value}; `;
result += `up: ${fontGenerator.next("up").value}; `;
result += `down: ${fontGenerator.next("down").value}; `;
result += `down: ${fontGenerator.next("down").value}; `;
hw14.textContent = result;
