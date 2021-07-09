async function getRandomChinese(length) {
    let res = '';

    for (let i = 0; i < length; i++) {
        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5);
                const str = String.fromCharCode(sign);
                resolve(str);
            }, 500);
        });

        res += await myPromise;
    }

    return res;
}

const quantity = document.querySelector('.quantity'),
      result = document.querySelector('.result');

quantity.addEventListener('change', (e) => {
    getRandomChinese(e.target.value)
        .then((res) => {
            result.value = res;
        });
});