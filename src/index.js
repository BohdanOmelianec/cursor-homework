import './style.css';
import logo from './logo.png';
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

console.log(`Homework 3: ${getRandomPassword(4)}`);
console.log(`Homework 5: ${filterEvenNumbers(6, 42, 51, 3, 18)}`);
console.log(`Homework 6: ${getStudentsNames(students)}`);
const student = new Student('NULP', 4, 'Iron Man');
console.log(`Homework 8: `);
student.getInfo();
console.log(`Homework 9: ${ getRandomColor()}`);

const fontGenerator = newFontGenerator(14);
console.group('Font generator, Homework 14');
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.groupEnd('End');

// (async function load() {
//     const {getRandomChinese} = await import('./homework-16');
//     console.log(`Homework 11: ${await getRandomChinese(4)}`);
// })();

// console.log(`Homework 11: ${res}`);
getRandomChinese(4)
.then(res => {
    console.log(`Homework 11: ${res}`);
});