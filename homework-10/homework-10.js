const keys = document.querySelectorAll('.key');
const audio = document.querySelector('#audio');


document.addEventListener('keydown', (e) => {
    removeClassPlaying();

    keys.forEach((key) => {
        if(key.classList.contains(e.code)) {
            key.classList.add('playing');
            playAudio(e.code);
        }
    });

});

keys.forEach((key) => {
    key.addEventListener('click', () => {
        removeClassPlaying();
        key.classList.add('playing');
        playAudio(key.classList.item(1));
    });
});


function playAudio(id) {
    document.querySelectorAll('audios').forEach(audio => {
        audio.pause();
    });
    const audio = document.querySelector(`#${id}`);
        audio.load();
        audio.play();
}

function removeClassPlaying() {
    keys.forEach((key) => {
        key.classList.remove('playing');
    });
}