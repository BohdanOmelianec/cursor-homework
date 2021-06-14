 const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
 const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
 const marks = [4, 5, 5, 3, 4, 5];

 // Завдання 1
 // Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
 // У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
 function getPairs(arr) {
     const studentsPairs = [];
     studentsPairs.push([arr[0], arr[3]]);
     studentsPairs.push([arr[1], arr[2]]);
     studentsPairs.push([arr[4], arr[5]]);
     return studentsPairs;
 }
 console.log('Function 1', getPairs(students));


 // Завдання №2
 // Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
 // Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
 function devideThemes() {
     // map при кожній ітерації повертає масив з рядком типу - "Олександр і Олена" і новою темою.
     // в кінці функція повертає масив з цими підмасивами.
     const pairs = getPairs(students);
     return pairs.map((pair, index) => [pair.join(' i '), themes[index]]);

     //  const group = [];
     //  const pairs = getPairs(students);          // Отримуємо багаторівневий масив з попередньої функції.
     //  pairs.forEach((item, index) => {           // Перебираємо масив з парами.
     //      item = item.join(' і ');              // Кожний вкладений масив петворюємо в рядок - "Олександр і Олена".
     //      group.push( [ item, themes[index] ] ); // В пустий масив пушимо масив з двох елементів, рядка і теми.
     //  });
     //  return group;
 }
 console.log('Function 2', devideThemes());


 // Завдання 3
 // Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
 function setMarks(studentsArr) {
     return studentsArr.map((student, index) => [student, marks[index]]);
 }
 console.log('Function 3', setMarks(students));

 
 // Завдання 4
 // Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою,
 // але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
 function randomMark() {
     const studentsGroup = devideThemes();
     return studentsGroup.map(item => [...item, Math.ceil(Math.random() * 5)]);
 }
 console.log('Function 4', randomMark());

 document.body.innerHTML = `<div style="color:white; padding:50px">
    <div style="text-align:center">${JSON.stringify(getPairs(students))}</div><br>
    <div style="text-align:center">${JSON.stringify(devideThemes() )}</div><br>
    <div style="text-align:center">${JSON.stringify(setMarks(students))}</div><br>
    <div style="text-align:center">${JSON.stringify(randomMark())})</div>
 </div>`;


 //  Мутують початковий масив
 //  sort()
 //  pop()
 //  push()
 //  shift()
 //  unshift()
 //  forEach()


 //  Не мутують початковий масив
 //  slice()
 //  join()
 //  split()
 //  map()