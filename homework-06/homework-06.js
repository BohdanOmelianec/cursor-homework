const students = [{
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

// Function 1
function getSubjects(student) {
    
    return Object.keys(student?.subjects ?? {}).map( item => setFirstLetterUpper(item) );
}
console.log('Список всіх предметів: ', getSubjects(students[1]));


// Function 2
function getAverageMark({subjects}) {
    const marks = [];

    Object.values(subjects).forEach((marksArray) => {
        marks.push(...marksArray); 
    });

    return getAverage(...marks).toFixed(2);
}

console.log('Середня оцінка студента: ', getAverageMark(students[1]));


// Function 3
function getStudentInfo(student) {
    return {
        name: student.name,
        course: student.course,
        averageMark: +getAverageMark(student)
    };
}
console.log('Інформація про студента: ', getStudentInfo(students[0]));


// Function 4
function getStudentsNames(students) {

    return students.map(obj => obj.name).sort();
}
console.log('Список всіх студентів: ', getStudentsNames(students));


// Function 5
function getBestStudent(students) {
    let bestStudent = '';
    let bigestMark = 0;
    const getAM = getAverageMark;

    students.forEach(obj => {
        if (getAM(obj) > bigestMark) {
            bigestMark = getAM(obj);
            bestStudent = obj.name;
        }
    });

    return bestStudent;
}
console.log('Найкращий студент: ', getBestStudent(students));


// Function 6
function calculateWordLetters(str) {
    const strangeObject = {};

    for (let i = 0; i < str.length; i++) {
        const regExp = new RegExp(str[i], 'gi');

        if (str[i] in strangeObject) {
            continue;
        }

        strangeObject[str[i]] = str.match(regExp).length;
    }

    return strangeObject;
}
console.log('Об\'єкт з букв переданого слова: ', calculateWordLetters('test'));



// Additional functions
function setFirstLetterUpper(str) {
    if (!str || typeof str === 'number') {
        return '';
    }
    const strCopy = str.toLowerCase().replace('_', ' ');

    return strCopy[0].toUpperCase() + strCopy.slice(1);
}

function getAverage(...rest) {
    rest = rest.filter(num => Number.isInteger(num));

    return rest.reduce((prev, current) => {
        return (prev + current);
    }, 0) / rest.length;
}


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

// 
const selectElement = document.querySelectorAll('.form-control');

selectElement[0].addEventListener('change', (event) => {
    if (event.target.value) {
        result.textContent = getSubjects(students[event.target.value]);
    } else {
        result.textContent = "";
    }
});

selectElement[1].addEventListener('change', (event) => {
    if (event.target.value) {
        result.textContent = getAverageMark(students[event.target.value]);
    } else {
        result.textContent = "";
    }
});

selectElement[2].addEventListener('change', (event) => {
    if (event.target.value) {
        result.textContent = JSON.stringify(getStudentInfo(students[event.target.value]));
    } else {
        result.textContent = "";
    }
});

selectElement[3].addEventListener('change', (event) => {
    if (event.target.value) {
        result.textContent = getStudentsNames(students);
    } else {
        result.textContent = "";
    }
});

selectElement[4].addEventListener('change', (event) => {
    if (event.target.value) {
        result.textContent = getBestStudent(students);
    } else {
        result.textContent = "";
    }
});

selectElement[5].addEventListener('input', (event) => {
    result.textContent = JSON.stringify(calculateWordLetters(event.target.value));
});


