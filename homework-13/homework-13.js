const WOOKIEE = '/?format=wookiee';
const root = document.querySelector('#root'); // Елемент в який рендеряться дані
const load = document.querySelector('.load');

// Функції для зручності отримання даних
/////////////////////////////////////////
async function getPage(url) {
    return fetch(url).then(data => {
        if(data.status !== 200) {
            return null;
        } else {
            return data.json();
        }
    });
}

async function getElementOf(element, sequenceNumber = 1) {
    return getPage(`https://swapi.dev/api/${element}/${sequenceNumber}`);

}

async function getPageOf(elements, page) {
    return getPage(`https://swapi.dev/api/${elements}/?page=${page}`);
}

async function getAllElementsOf(staff) {
    let arr = [];

    getPage(`https://swapi.dev/api/${staff}`)
        .then(response => {
            let count = response.count / 10 + 1;
            for (let i = 1; i < count; i++) {
                getPageOf(staff, i)
                    .then(res => {
                        arr.push(...res.results);
                    });
            }
        });
    arr = await Promise.all(arr);
    return arr;
}

////////////////////////////////////////////
// Створення функції як рендерить дані на сторінку

let curPage = null;
let prevPage = null;

async function render(page) {
        load.style.display = 'block';

    

    getPage(page)
        .then(res => {
    load.style.display = 'none';

            root.textContent = '';
            curPage = res.next;
            prevPage = res.previous;

            res.results.map(item => {
                let div = document.createElement('div');
                div.classList.add('item');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                const img =document.createElement('img');

                if(page.indexOf('people') !== -1) {    
                    const id = parseInt((item.url).replace(/\D+/g,""));
                    img.setAttribute('src', `./img/${id}.jpg`);
                    img.setAttribute('alt', 'avatar');
                    img.setAttribute('class', 'avatar');
                    // div.append(img);
                }
                // const img =document.createElement('img');
                if(page.indexOf('films') !== -1) {
                    const id = parseInt((item.url).replace(/\D+/g,""));
                    img.setAttribute('src', `./img/film${id}.jpg`);
                    img.setAttribute('alt', 'poster');
                    img.setAttribute('class', 'poster');
                    // div.append(img);
                }

                h2.textContent = item.title || item.name;

                p1.textContent = item.birth_year || item.climate || item.classification ||
                    item.starship_class || item.vehicle_class || item.release_date.slice(0, 4);

                p2.textContent = item.director || item.diameter ||
                    item.language || item.max_atmosphering_speed ||
                    (item.gender === 'male' ? String.fromCodePoint('0x2642') :
                        item.gender === 'female' ? String.fromCodePoint('0x2640') :
                        String.fromCodePoint('0x26A7'));

                div.append(h2, img, p1, p2);
                root.append(div);
            });
        });
}
/////////////////////////////////////////

//  Показати інфо про персонажів вибраного фільму
// Завдання 1, 4

const getInfoBtn = document.querySelector('#getInfo');
const select = document.querySelector('select');

getInfoBtn.addEventListener('click', async () => {
    removeActive();
    const film = await getElementOf('films', select.value);
    // let allCharacters = [];
    root.textContent = '';

    film.characters.forEach(character => {
        let shortInfo = getPage(character)
            .then(response => {
                let div = document.createElement('div');
                div.classList.add('item');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                const img =document.createElement('img');
                const id = parseInt((response.url).replace(/\D+/g,""));
                img.setAttribute('src', `./img/${id}.jpg`);
                img.setAttribute('alt', 'avatar');
                img.setAttribute('class', 'avatar');

                h2.textContent = response.name;
                p1.textContent = `Birthday: ${response.birth_year}`;
                p2.textContent = `Gender: ${(response.gender === 'male') ? String.fromCodePoint('0x2642') :
                    (response.gender === 'female') ? String.fromCodePoint('0x2640') :
                    String.fromCodePoint('0x26A7')}`;

                div.append(h2, img, p1, p2);
                root.append(div);
            });
    });

});



///////////////////////////////////////////
// Показати список всіх елементів у консоль

const getAllInfo = document.querySelector('.nav');

getAllInfo.addEventListener('click', async (e) => {
    let target = e.target.dataset.key;
    console.log(await getAllElementsOf(target));

});


////////////////
// Переключання між вкладками і рендеринг відповідних даних
// Завдання 2

const navlinks = document.querySelectorAll(".nav_link");
const nav = document.querySelector(".nav");

function removeActive() {
    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].className = navlinks[i].className.replace("active", "");
    }
}

function showContent(index = 0) {
    navlinks[index].classList.add("active");
}

removeActive();
showContent();

nav.addEventListener('click', (event) => {
    event.preventDefault();
    navlinks.forEach((item, i) => {

        if (item === event.target) {
            removeActive();
            showContent(i);
            render(`https://swapi.dev/api/${event.target.dataset.key}/?page=1`);
        }
    });
});

render('https://swapi.dev/api/films/?page=1');

/////////////////////////////////////////////////////////////
// Створення кнопок next та previous для перемикання сторінок
// Завдання 3

const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (curPage !== null) {
        render(curPage);
    }
});

previousBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (prevPage !== null) {
        render(prevPage);
    }
});