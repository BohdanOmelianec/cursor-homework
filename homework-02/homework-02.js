let firstNumber;
let secondNumber;
let skipEven;
let summOfNumbers = 0;

function numberCounter() {
    // Просимо ввести число до тих пір поки користувач введе нормальне число.
    do {
        firstNumber = parseInt(+prompt('Enter first number:', ''));
        secondNumber = parseInt(+prompt('Enter second number:', ''));
        skipEven = confirm('Do you want to skip even numbers?');
    } while ((isNaN(firstNumber) || isNaN(secondNumber)) ||
        (firstNumber === 0 || secondNumber === 0));

    // Перебираємо всі числа у відповідному діапазоні і перевіряємо на парність.
    for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
        if (skipEven) {
            if (firstNumber % 2 === 0) {
                continue;
            }
            summOfNumbers += firstNumber;
        } else {
            summOfNumbers += firstNumber;
        }
    }
    document.querySelector('.number-container').innerHTML = summOfNumbers;

}
// Встановив setTimeout щоб загрузились стилі а потім почали появлятись промпти.
setTimeout(numberCounter, 300);