// Function 1
function getMaxDigit(num) {
    num = num.toString();
    return `Maximum number is: ${Math.max(...num.split('').filter((item) => !isNaN(item)))}`;
}
console.log(getMaxDigit('trn754gf'));

// Function 2
function numberInPower(num, pow) {
    [num, pow] = [Math.floor(num), Math.abs(Math.floor(pow))];
    return pow === 1 ? num : num * numberInPower(num, pow - 1);
}
console.log(numberInPower(-2, -3));

// Function 3
function setFirstLetterUpper(str) {
    const err = "Empty string or number!";
    if (!str || typeof str === 'number') {
        return err;
    }
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
    return `First letter is upperCase: ${str}`;
}
console.log(setFirstLetterUpper('fhbih IUGY'));

// Function 4
function getClearSalary(salary) {
    if (isNaN(salary)) {
        return "Invalid value.";
    }
    const tax = 19.5;
    const clearSalary = (salary - tax * salary / 100).toFixed(2);
    return `Salary witout tax is: ${clearSalary} UAH`;
}
console.log(getClearSalary('53745'));

// Function 5
function getRandomNumber(N, M) {
    if (isNaN(N) || isNaN(M)) {
        return "Invalid value.";
    }
    [N, M] = [Math.min(...arguments), Math.max(...arguments)];
    return `Random number between ${N} and ${M} is: ${Math.floor(Math.random() * (M - N) + N)}`;
}
console.log(getRandomNumber(7, 16));

// Function 6
function countLetter(char, string) {
    if (!char || !string) {
        return "Empty value.";
    }
    char = char.toString();
    string = string.toString();
    const regExp = new RegExp(char, 'gi');
    return (string.match(regExp)) ?
        `Character '${char}' appears ${string.match(regExp).length} times` :
        'No matches are found.';
}
console.log(countLetter(5, '648к676556'));

// Function 7
function convertCurrency(currency) {
    currency = currency.toString().toLowerCase();
    const exchangeRate = 27;
    if (currency.includes('$')) {
        return `${currency} = ${parseInt(currency) * exchangeRate} UAH`;
    } else if (currency.includes('uah')) {
        return `${currency} = ${(parseInt(currency) / exchangeRate).toFixed(2)} $`;
    } else {
        return `You have entered an incorrect currency!`;
    }
}
console.log(convertCurrency('16.477 uah'));


// Function 8
function getRandomPassword(quantity = 8) {
    if (isNaN(quantity) || quantity <= 0) {
        return "Please enter valid value";
    }
    let password = '';
    for (let i = 1; i <= quantity; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return `Password is: ${password}`;
}
console.log(getRandomPassword(5));

// Function 9
function deleteLetters(char, string) {
    if (!char || !string) {
        return "Empty value.";
    }
    char = char.toString();
    string = string.toString();
    const regExp = new RegExp(char, 'gi');
    return `String without ${char}: ${string.replace(regExp, '')}`;
}
console.log(deleteLetters('a', 'ababahalamaha'));

// Function 10
function isPalyndrom(string) {
    string = string.toString();
    return `Is the string palyndrom? ${string === string.split('').reverse().join('')}`;
}
console.log(isPalyndrom(5564455));

// Function 11
function deleteDuplicateLetter(string) {
    let newStr = '';
    let regExp;
    for (let i = 0; i < string.length; i++) {
        regExp = new RegExp(string[i], 'gi');
        if (string.match(regExp).length > 1) {
            continue;
        }
        newStr += string[i];
    }
    return `String without dublicated letters: ${newStr}`;
}
console.log(deleteDuplicateLetter("абабахаламага"));


document.querySelector('.price-counter').innerHTML = 
`${getMaxDigit('68578')}<br>
 ${numberInPower(-2, -3)}<br>
 ${setFirstLetterUpper('stEvEn')}<br>
 ${getClearSalary('53745')}<br>
 ${getRandomNumber(7, 16)}<br>
 ${countLetter(5, '648к676556')}<br>
 ${convertCurrency('16.477 uah')}<br>
 ${getRandomPassword(5)}<br>
 ${deleteLetters('a', 'ababahalamaha')}<br>
 ${isPalyndrom(5564455)}<br>
 ${deleteDuplicateLetter("абабахаламага")}<br>
 `;
