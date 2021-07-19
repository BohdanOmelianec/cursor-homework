const root = document.querySelector('#root');
const load = document.querySelector('.load');

async function getJSONResponse(url) {
  return fetch(url).then(data => {

    if (data.status !== 200) {
      throw new Error(data.status);
    } else {
      return data.json();
    }
  });
}
////////////////////////////

const getInfoBtn = document.querySelector('#getInfo');
const select = document.querySelector('select');


async function getCharacters(num) {
  load.style.display = 'block';
  try {
    const result = await getJSONResponse(`https://swapi.dev/api/films/${num}`);
    root.textContent = '';
    load.style.display = 'none';

    result.characters.forEach(async function (each) {
      const person = await getJSONResponse(each);
      const id = parseInt((person.url).replace(/\D+/g, ""));
      const data = `
        <div class="item">
          <h2>${person.name}</h2>
          <img class="avatar" src="./img/${id}.jpg" alt="avatar">
          <p><b>Birthday:</b> ${person.birth_year}</p>
          <p><b>Gender:</b> ${person.gender === 'male' ? String.fromCodePoint('0x2642') :
          person.gender === 'female' ? String.fromCodePoint('0x2640') :
          String.fromCodePoint('0x26A7')}</p>
        </div>
      `;

      root.innerHTML += data;
    });
  } catch (err) {
    console.warn(err);
  }
}

getInfoBtn.addEventListener('click', () => {
  getCharacters(select.value);
});


////////////////////////////////

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

async function getPlanet(url) {
  try {
    load.style.display = 'block';
    const data = await getJSONResponse(url);
    nextBtn.dataset.url = data.next ? data.next : '';
    prevBtn.dataset.url = data.previous ? data.previous : '';
    root.textContent = '';
    load.style.display = 'none';

    data.results.forEach(each => {
      const data = `
        <div class="item">
          <h2>${each.name}</h2>
          <p><b>Climate:</b> ${each.climate}</p>
          <p><b>Population:</b> ${each.population}</p>
        </div>
      `;

      root.innerHTML += data;
    });
  } catch (err) {
    console.warn(err);
  }
}

///////////// control buttons

nextBtn.addEventListener('click', async (e) => {
  if (e.target.dataset.url) {
    getPlanet(e.target.dataset.url);
  }
});

prevBtn.addEventListener('click', async (e) => {
  if (e.target.dataset.url) {
    getPlanet(e.target.dataset.url);
  }
});

const planetsBtn = document.querySelector('.planets');

planetsBtn.addEventListener('click', () => {
  getPlanet('https://swapi.dev/api/planets/?page=1');
});

///////////////

const nav = document.querySelector('.nav');

document.addEventListener('scroll', () => {
  if (nav.offsetTop > 148) {
    nav.style.background = 'black';
  } else {
    nav.style.background = 'none';
  }
});