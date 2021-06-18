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

    if (student === undefined) {

        return 'No matches';
    }

    if ('subjects' in student) {
        const studentSubjects = Object.keys(student.subjects);
        const modifiedSubjects = [];

        studentSubjects.forEach((subject) => {
            modifiedSubjects.push( setFirstLetterUpper(subject) ); 
        });
            
        return modifiedSubjects;
    } else {

        return 'No matches';
    }
}
console.log('Список всіх предметів: ', getSubjects(students[0]) );


// Function 2
function getAverageMark({subjects}) {
    const marks = [];

    for ( let key in subjects) {
        marks.push( ...subjects[key] );
    }

    return getAverage(...marks).toFixed(2);
}

console.log('Середня оцінка студента: ', getAverageMark(students[0]) );


// Function 3
function getStudentInfo(student) {
    const studentInfo = {...student};

    delete studentInfo.subjects;
    studentInfo.averageMark = +getAverageMark(student);

    return studentInfo;
}    
console.log('Інформація про студента: ', getStudentInfo(students[0]) );


// Function 4
function getStudentsNames(students) {
    const studentNames = [];

    students.forEach(obj => {
        studentNames.push(obj.name);
    });

    return studentNames.sort();
}
console.log('Список всіх студентів: ', getStudentsNames(students) );


// Function 5
function getBestStudent(students) {
    let bestStudent = '';
    let bigestMark = 0;

    students.forEach(obj => {
        if (getAverageMark(obj) > bigestMark) {
            bigestMark = getAverageMark(obj);
            bestStudent = obj.name;
        }
    });

    return bestStudent;
}
console.log('Найкращий студент: ', getBestStudent(students) );


// Function 6
function calculateWordLetters(str) {
    const strangeObject = {};

    for (let i = 0; i < str.length; i++) {
        const regExp = new RegExp(str[i], 'gi');

        if(str[i] in strangeObject) {
            continue;
        }

        strangeObject[ str[i] ] = str.match(regExp).length;
    }

    return strangeObject;
}
console.log('Об\'єкт з букв переданого слова: ', calculateWordLetters('test') );



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