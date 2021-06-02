const BREAD = 15.678,
      CHEESE = 123.965,
      MILK = 90.2345;
const CLIENT_MONEY = 500;
let date = new Date().toDateString();

//Basic

let maximum = Math.max(BREAD, CHEESE, MILK);
let minimum = Math.min(BREAD, CHEESE, MILK);
let summOfProducts = BREAD + CHEESE + MILK;
let summOfProductsFloor = Math.floor(BREAD) + Math.floor(CHEESE) + Math.floor(MILK);
let discount = Math.random();
let priceWithDiscount = summOfProducts - (summOfProducts * discount);
let profit = priceWithDiscount - (summOfProducts / 2);

//Advanced

document.querySelector('.price-counter').innerHTML = 
(`<ol>
    <li>Найбільше число: <b>${maximum}</b> грн</li>
    <li>Найменше число: <b>${minimum}</b> грн</li>
    <li>Сума всіх товарів: <b>${summOfProducts}</b> грн</li>
    <li>Сума всіх товарів округлена: <b>${summOfProductsFloor}</b> грн</li>
    <li>Сума округлена до сотень: <b>${(Math.round(summOfProductsFloor / 100)) * 100}</b> грн</li>
    <li>Чи парне число: <b>${summOfProductsFloor % 2 == 0}</b></li>
    <li>Решта з 500 грн складає: <b>${(CLIENT_MONEY - summOfProducts).toFixed(2)}</b> грн</li>
    <li>Середнє значення цін: <b>${((BREAD + CHEESE + MILK) / 3).toFixed(2)}</b> грн</li>
    <li>Ваша знижка складає: <b>${(discount * 100).toFixed(0)}%</b></li>
    <li>Cума зі знижкою: <b>${priceWithDiscount.toFixed(2)}</b> грн</li>
    <li>Чистий прибуток складає: <b>${profit.toFixed(2)}</b> грн</li>
    </ol>
    <hr>
    <div class="date">${date}</div>`);