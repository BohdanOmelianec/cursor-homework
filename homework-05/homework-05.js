const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// Function 1
function getRandomArray(length, min, max) {
    const arr = [];

    while (arr.length < length) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }

    return arr;
}
console.log('Function 1 getRandomArray(9, 69, 13) ', getRandomArray(9, 69, 13));


// Function 2
function getModa(...numbers) {
    if (numbers.length == 1) {
        return numbers[0];
    }

    const nums = numbers.filter(num => Number.isInteger(num)).sort((a, b) => a - b);
    let counter = 1;
    const arrayOfOccurrences = [];

    nums.forEach((number, index) => {
        if (number == nums[index + 1]) {
            counter++;
        } else {
            counter = 1;
        }

        arrayOfOccurrences.push(counter);
    });

    const maximumOccurrence = Math.max(...arrayOfOccurrences);
    const modaArr = [];

    arrayOfOccurrences.forEach((occurr, index) => {
        if (occurr === maximumOccurrence) {
            modaArr.push(nums[index]);
        }
    });

    return modaArr;

}
console.log('Function 2 getModa(6, 55, 11, 6, 55, 2, 78, 6, 77, 87, 2, 77, 3, 2) - ',
            getModa(6, 55, 11, 6, 55, 2, 78, 6, 77, 87, 2, 77, 3, 2));


// Function 3
function getAverage(...rest) {
    rest = rest.filter(num => Number.isInteger(num));

    return rest.reduce((prev, current) => {
        return (prev + current);
    }, 0) / rest.length;
}
console.log('Function 3 getAverage(6, 4.2, 51) ', getAverage(6, 4.2, 51));


// Function 4
function getMedian(...numbers) {
    let median = 0;
    const nums = numbers.filter(num => Number.isInteger(num)).sort((a, b) => a - b);

    if (nums.length % 2 === 0) {
        median = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    } else {
        median = nums[Math.floor(nums.length / 2)];
    }

    return median;
}
console.log('Function 4 getMedian(1, 5, 3, 6, 2, 4) ', getMedian(1, 5, 3, 6, 2, 4));


// Function 5
function filterEvenNumbers(...numbers) {
    return numbers.filter(number => number % 2 !== 0);
}
console.log('Function 5 filterEvenNumbers(6, 42, 51, 3, 18) ', filterEvenNumbers(6, 42, 51, 3, 18));


// Function 6
function countPositiveNumbers(...numbers) {
    return numbers.filter(number => number > 0).length;
}
console.log('Function 6 countPositiveNumbers(6, -42, 51, -3, 18, 0, -5) ',
            countPositiveNumbers(6, -42, 51, -3, 18, 0, -5));


// Function 7
function getDividedByFive(...numbers) {
    return numbers.filter(number => number % 5 === 0);
}
console.log('Function 7 getDividedByFive(6, 42, 50, 3, 15, 24, 105, 18) ',
            getDividedByFive(6, 42, 50, 3, 15, 24, 105, 18));


// Function 8
function replaceBadWords(string) {
    const regExp = /fuck|shit/gi;

    return string.replace(regExp, '****');
}
console.log('Function 8 replaceBadWords(It\'s bullshit!) ', replaceBadWords("It's bullshit!"));


// Function 9
function divideByThree(word) {
    const modifiedWord = word.toLowerCase().replace(/\s/g, '');
    const arr = [];

    for (let i = 0; i < modifiedWord.length; i += 3) {
        arr.push(modifiedWord.slice(i, i + 3));
    }

    return arr;
}
console.log('Function 9 divideByThree("k  a vUn ch ik ") ', divideByThree('k  a vUn ch ik '));


// Function 10
function generateCombinations(word) {

}