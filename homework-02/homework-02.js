function numberCounter() {
    let firstNumber = 0;
    let secondNumber = 0;
    let summOfNumbers = 0;
    // Просимо ввести число до тих пір поки користувач введе нормальне число.
    do {
        firstNumber = +prompt('Enter first number:', '0');
        secondNumber = +prompt('Enter second number:', '0');
    } while ((isNaN(firstNumber) || isNaN(secondNumber)) ||
        (firstNumber !== parseInt(firstNumber) || secondNumber !== parseInt(secondNumber)));

    const skipEven = confirm('Do you want to skip even numbers?');
    // Визначаємо менше і більше число щоб підставити у цикл в правильному порядку.
    const minNumber = Math.min(firstNumber, secondNumber);
    const maxNumber = Math.max(firstNumber, secondNumber);

    // Перебираємо всі числа у відповідному діапазоні і перевіряємо на парність.
    for (let i = minNumber; i <= maxNumber; i++) {
        if (!skipEven || i % 2 !== 0) {
            summOfNumbers += i;
            }
            
    }
    document.querySelector('.number-container').innerHTML = summOfNumbers;

}
// Встановив setTimeout щоб загрузились стилі а потім почали появлятись промпти.
setTimeout(numberCounter, 1000);