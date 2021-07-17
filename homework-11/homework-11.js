async function getRandomChinese(length) {
    let characters = '';

    for (let i = 0; i < length; i++) {
        const myPromise = new Promise(resolve => {
            const sign = Date.now().toString().slice(-5);
            const str = String.fromCharCode(sign);
            setTimeout(() => {
                resolve(str);
            }, 50);
        });

        characters += await myPromise;
    }

    return characters;
}

const quantity = document.querySelector('.quantity'),
      result = document.querySelector('.result');

quantity.addEventListener('change', (e) => {
    getRandomChinese(e.target.value).then(res => result.value = res);
});