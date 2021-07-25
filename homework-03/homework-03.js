// Function 1
function getMaxDigit(num) {
    return (isNaN(num) || num == '') ?
        '' : Math.max(...num.split('').filter( (item) => !isNaN(item) ) );
}
console.log('getMaxDigit() - ', getMaxDigit('5459254'));

// Function 2
export function numberInPower(num, pow) {
    // [num, pow] = [ Math.floor(num), Math.abs(Math.floor(pow) ) ];
    // return pow === 1 ? num : num * numberInPower(num, pow - 1);
    let summ = 1;
    if(pow === 0) {
        return 1;
    } else if(pow < 0) {
        for(let i = 0; i > pow; i--) {
            summ *= num;
            console.log(summ);
        }
        return 1 / summ;
    } else {
        for(let i = 0; i < pow; i++) {
            summ *= num;
        }
        return summ;
    }
}
console.log('numberInPower() - ', numberInPower(0, 0));

// Function 3
function setFirstLetterUpper(str) {
    if (!str || typeof str === 'number') {
        return '';
    }
    const strCopy = str.toLowerCase();
    return strCopy[0].toUpperCase() + strCopy.slice(1);
}
console.log('setFirstLetterUpper() - ', setFirstLetterUpper('volOdymyr'));

// Function 4
function getClearSalary(salary) {
    if ( isNaN(salary) ) {
        return "Invalid value.";
    }

    const tax = 19.5;
    const clearSalary = (salary - tax * salary / 100).toFixed(2);
    return clearSalary;
}
console.log('getClearSalary() - ', getClearSalary('53745'));

// Function 5
function getRandomNumber(firstNum, secondNum) {
    if ( isNaN(firstNum) || isNaN(secondNum) ) {
        return "Invalid value.";
    }
    [firstNum, secondNum] = [ Math.min(...arguments), Math.max(...arguments) ];
    return Math.floor(Math.random() * (secondNum - firstNum) + firstNum);
}
console.log('getRandomNumber() - ', getRandomNumber(77, -16));

// Function 6
function countLetter(char, string) {
    // return (!char || !string) ?
    //  "Empty value." : string.match(new RegExp(char, 'gi')).length;
    for (let i = 0; i < string.length; i++) {
        if (!char || !string) {
            return 'Empty value';
        } 
        return string.match(new RegExp(char, 'gi')).length;
    }
}
console.log('countLetter() - ', countLetter('6', '648к556765656'));

// Function 7
function convertCurrency(currency) {
    const curr = document.querySelector("#uah");
    const exchangeRate = 27;
    return curr.checked ?
     `${ (+currency / exchangeRate).toFixed(2) } $` : `${ (+currency * exchangeRate) } UAH`;
}
console.log('convertCurrency() - ', convertCurrency('16.477'));


// Function 8
function getRandomPassword(quantity = 8) {
    if (isNaN(quantity) || quantity <= 0) {
        return "Please enter valid value";
    }
    let password = '';
    for (let i = 1; i <= quantity; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
}
console.log('getRandomPassword() - ', getRandomPassword(5));

// Function 9
function deleteLetters(char, string) {
    return (!char || !string) ? "Empty value." : string.replaceAll(char, '');
}
console.log('deleteLetters() - ',  deleteLetters('a', 'ababahalamaha'));

// Function 10
function isPalyndrom(string) {
    return string === string.toString().split('').reverse().join('');
}
console.log('isPalyndrom() - ', isPalyndrom(5564455));

// Function 11
function deleteDuplicateLetter(string) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        const regExp = new RegExp(string[i], 'gi');
        if (string.match(regExp).length <= 1) {
            newStr += string[i];
        }
    }
    return newStr;
}
console.log('deleteDuplicateLetter() - ', deleteDuplicateLetter("абабахаламага"));


// Код для стилізації та роботи сторінки.
const inp = document.querySelector('#maxNumber');
const span = document.querySelector('.res1');
inp.addEventListener('input', (e) => {
    e.preventDefault();
    span.textContent = getMaxDigit(inp.value);
});

const inp2 = document.querySelector('#numForPow');
const inp3 = document.querySelector('#power');
const span2 = document.querySelector('.res2');
inp2.addEventListener('input', (e) => {
    e.preventDefault();
    span2.textContent = numberInPower(inp2.value, inp3.value);
});
inp3.addEventListener('input', (e) => {
    e.preventDefault();
    span2.textContent = numberInPower(inp2.value, inp3.value);
});

const inp4 = document.querySelector('#strForUpper');
const span3 = document.querySelector('.res3');
inp4.addEventListener('input', (e) => {
    e.preventDefault();
    span3.textContent = setFirstLetterUpper(inp4.value);
});

const inps = document.querySelector('#salary');
const span4 = document.querySelector('.res4');
inps.addEventListener('input', (e) => {
    e.preventDefault();
    span4.textContent = getClearSalary(inps.value);
});

const inp6 = document.querySelector('#rundomNumber');
const inp7 = document.querySelector('#rundomNumber2');
const setRunNum = document.querySelector('.rumNum');
const span5 = document.querySelector('.res5');
setRunNum.addEventListener('click', (e) => {
    e.preventDefault();
    span5.textContent = getRandomNumber(inp6.value, inp7.value);
});

const inp8 = document.querySelector('#letter');
const inp9 = document.querySelector('#string');
const span6 = document.querySelector('.res6');
inp8.addEventListener('input', (e) => {
    e.preventDefault();
    span6.textContent = countLetter(inp8.value, inp9.value);
});
inp9.addEventListener('input', (e) => {
    e.preventDefault();
    span6.textContent = countLetter(inp8.value, inp9.value);
});

const inp10 = document.querySelector('#currency');
const span7 = document.querySelector('.res7');
inp10.addEventListener('input', (e) => {
    e.preventDefault();
    span7.textContent = convertCurrency(inp10.value);
});

const inp11 = document.querySelector('#quantityNum');
const span8 = document.querySelector('.res8');
const genPass = document.querySelector('.pass');
genPass.addEventListener('click', (e) => {
    e.preventDefault();
    span8.textContent = getRandomPassword(inp11.value);
});

const inp12 = document.querySelector('#letter2');
const inp13 = document.querySelector('#string2');
const span9 = document.querySelector('.res9');
inp12.addEventListener('input', (e) => {
    e.preventDefault();
    span9.textContent = deleteLetters(inp12.value, inp13.value);
});
inp13.addEventListener('input', (e) => {
    e.preventDefault();
    span9.textContent = deleteLetters(inp12.value, inp13.value);
});

const inp14 = document.querySelector('#palyn');
const span10 = document.querySelector('.res10');
inp14.addEventListener('input', (e) => {
    e.preventDefault();
    span10.textContent = isPalyndrom(inp14.value);
});

const inp15 = document.querySelector('#string3');
const span11 = document.querySelector('.res11');
inp15.addEventListener('input', (e) => {
    e.preventDefault();
    span11.textContent = deleteDuplicateLetter(inp15.value);
});


// Fun

const elem = document.querySelectorAll('.function-block');
elem.forEach((item) => {
    if (item.getBoundingClientRect().top < document.documentElement.clientHeight) {
        item.style.opacity = 1;
    }
});

document.addEventListener('scroll', () => {
    elem.forEach((item) => {
        let coor = item.getBoundingClientRect().top;
        if (coor < document.documentElement.clientHeight * 0.85) {
            item.style.opacity = 1;
            item.style.marginTop = '20px';

        } else if (coor > document.documentElement.clientHeight * 0.75) {
            item.style.opacity = 0;
            item.style.marginTop = '100px';
        }
    });
});
