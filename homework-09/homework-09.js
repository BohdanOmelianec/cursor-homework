const blocks = document.querySelector('.blocks');
const btnSwitch = document.querySelector('.switch_on');
const btnShow = document.querySelector('.show');


function getRandomColor() {
    return `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)} )`;
}

function setColor() {
    const divs = Array.from(document.getElementsByClassName('item'));

    divs.forEach((div) => {
        div.style.backgroundColor = getRandomColor();
    });
}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        blocks.append(div);
    }

    setColor();
    btnShow.removeEventListener('click', generateBlocks);
}

function generateBlocksInterval() {
    let timerId = setInterval(setColor, 1000);

    setTimeout(() => {
        clearInterval(timerId);
    }, 15000);
}

btnShow.addEventListener('click', generateBlocks);
btnSwitch.addEventListener('click', generateBlocksInterval);