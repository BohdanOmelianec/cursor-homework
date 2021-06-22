const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476,
    country: 'ukraine'
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921,
    country: 'latvia'
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114,
    country: 'litva'
};

// Function 1


function getMyTaxes(salary) {
    const result = salary * this.tax;
    return `You will pay ${result.toFixed(2)}$ of tax in ${this.country}`;
}
console.log(getMyTaxes.call(litva, 10000));

// Function 2

function getMiddleTaxes() {
    const result = this.middleSalary * this.tax;
    return `The middle tax in ${this.country} is: ${result}$`;
}

console.log(getMiddleTaxes.call(ukraine));

// Function 3

function getTotalTaxes() {
    const result = this.middleSalary * this.tax * this.vacancies;
    return `Summ of tax is: ${result}$`;
}

console.log(getTotalTaxes.call(litva));

// Function 4

function getMySalary() {
    const salary = +(Math.random() * (2000 - 1500) + 1500).toFixed(2);
    const tax = this.tax;
    const profit = +(salary - salary * this.tax).toFixed(2);
    const obj = {
        salary: salary,
        tax: tax,
        profit: profit,
    };
    return `In ${this.country} ${ JSON.stringify(obj) }`;
}

console.log( getMySalary.call(latvia) );

const timerId = setInterval(() => {
    console.log( getMySalary.call(latvia) );
}, 1000);

setTimeout(() => {
    clearInterval(timerId);
    console.log('setInterval is stopped.');
}, 5000);




//////////////////////////////////////////////////////////////////////////////

// Tabs
const tabcontent = document.getElementsByClassName("tabcontent");
const tablinks = document.getElementsByClassName("tablinks");
const tab = document.querySelector(".tab");
const result = document.querySelector('.result');

function hideContent() {

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    result.textContent = '';
}

function showContent(index = 0) {
    tablinks[index].classList.add("active");
    tabcontent[index].style.display = "block";
}

hideContent();
showContent();

tab.addEventListener('click', (event) => {

    Array.from(tablinks).forEach((item, i) => {

        if (item === event.target) {
            hideContent();
            showContent(i);
        }
    });
});

/////////////////////////////////////////////////

const selectElement = document.querySelectorAll('.form-control');
const salary = document.querySelector('.salary');
const btn = document.querySelector('.count');

// Finction 1
btn.addEventListener('click', () => {
    switch (selectElement[0].value) {
        case 'ukraine':
            result.textContent = getMyTaxes.call(ukraine, salary.value);
            break;
        case 'latvia':
            result.textContent = getMyTaxes.call(latvia, salary.value);
            break;
        case 'litva':
            result.textContent = getMyTaxes.call(litva, salary.value);
            break;

        default:
            result.textContent = "";
            break;
    }
});

// Finction 2
selectElement[1].addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'ukraine':
            result.textContent = getMiddleTaxes.call(ukraine);
            break;
        case 'latvia':
            result.textContent = getMiddleTaxes.call(latvia);
            break;
        case 'litva':
            result.textContent = getMiddleTaxes.call(litva);
            break;

        default:
            result.textContent = "";
            break;
    }
});

// Finction 3
selectElement[2].addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'ukraine':
            result.textContent = getTotalTaxes.call(ukraine);
            break;
        case 'latvia':
            result.textContent = getTotalTaxes.call(latvia);
            break;
        case 'litva':
            result.textContent = getTotalTaxes.call(litva);
            break;

        default:
            result.textContent = "";
            break;
    }
});

// Finction 4
selectElement[3].addEventListener('change', (event) => {
    setInterval(() => {
        switch (event.target.value) {
            case 'ukraine':
                result.textContent = getMySalary.call(ukraine);
                break;
            case 'latvia':
                result.textContent = getMySalary.call(latvia);
                break;
            case 'litva':
                result.textContent = getMySalary.call(litva);
                break;
    
            default:
                result.textContent = "";
                break;
        }
    }, 1000);
});