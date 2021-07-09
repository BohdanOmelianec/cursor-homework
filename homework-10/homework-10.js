const keys = document.querySelectorAll('.key');
const audio = document.querySelector('#audio');


document.addEventListener('keydown', (e) => {
    removeClassPlaying();

    keys.forEach((key) => {
        if (key.classList.contains(e.code) || e.target == 'span' || e.target == 'kbd') {
            key.classList.add('playing');
            playAudio(e.code);
        }
    });

});

document.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);

    removeClassPlaying();
    key.classList.add('playing');
    playAudio(audio);

});

keys.forEach((key) => {
    key.addEventListener('mouseover', (e) => {
        const audio = document.querySelector(`audio[data-key='${e.target.dataset.key}']`);

        removeClassPlaying();
        key.classList.add('playing');
        playAudio(audio);
    });
});


function playAudio(audio) {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
    });
    if (!audio) {
        return;
    }
    
    audio.load();
    audio.play();
}

function removeClassPlaying() {
    keys.forEach((key) => {
        key.classList.remove('playing');
    });
}