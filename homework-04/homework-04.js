 const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
 const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
 const marks = [4, 5, 5, 3, 4, 5];

 // Завдання 1
 // Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
 // У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
 function getPairs(arr) {
     const studentsPairs = [];
     studentsPairs.push( [arr[0], arr[3] ] );
     studentsPairs.push( [arr[1], arr[2] ] );
     studentsPairs.push( [arr[4], arr[5] ] );
     return studentsPairs;
 }
 console.log('Function 1', getPairs(students));


 // Завдання №2
 // Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
 // Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
 function devideThemes() {
     const group = [];
     const pairs = getPairs(students);          // Отримуємо багаторівневий масив з попередньої функції.
     pairs.forEach((item, index) => {           // Перебираємо масив з парами.
         item = item.join(' і ');               // Кожний вкладений масив петворюємо в рядок типу - "Олександр і Олена".
         group.push( [ item, themes[index] ] ); // В пустий масив пушимо масив з двох елементів, рядка і теми.
     });
     return group;
 }
 console.log('Function 2', devideThemes());


 // Завдання 3
 // Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
 function setMarks(arr) {
     const markedStudents = [];
     arr.forEach((item, index) => {                     // Перебираємо масив зі студентів
         markedStudents.push( [ item, marks[index] ] ); // та кожний елемент пушим в новий масив разом з оцінкою.
     });
     return markedStudents;
 }
 console.log('Function 3', setMarks(students));

 // Завдання 4
 // Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою,
 // але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
 function randomMark() {
    const markedGroup = devideThemes();           // Отримуємо масив з 2-ї функції.
    markedGroup.forEach((item) => {                 
        item.push(Math.ceil(Math.random() * 5) );    // Перебираємо масив та пушимо у підмасив рандомну оцінку. 
    });
    return markedGroup;
 }
 console.log('Function 4', randomMark());

