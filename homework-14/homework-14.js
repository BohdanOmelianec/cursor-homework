function* createIdGenerator() {
    let i = 1;

    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();

console.group('Infinity generator');
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.groupEnd();


////////////////
// Advanced
function* newFontGenerator(start) {
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

const fontGenerator = newFontGenerator(14);

console.group('Font generator');

console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.groupEnd();

console.group('To see hot to work "Font generator" Enter:');
console.log('fontGenerator.next("up").value');
console.log('or');
console.log('fontGenerator.next("down").value');
console.groupEnd();
// За допомогою замикання
// function newFontGenerator(start) {
//     let count = start;
//     return function (str) {
//         if (str === 'up') {
//             return count += 2;
//         } else if (str === 'down') {
//             return count -= 2;
//         } else {
//             return count;
//         }
//     };
// }
