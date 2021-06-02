const bread = 15.678,
      cheese = 123.965,
      milk = 90.2345;
const clientMoney = 500;
const date = new Date().toDateString();

//Basic

const maxProductsPrice = Math.max(bread, cheese, milk);
const minProductsPrice = Math.min(bread, cheese, milk);
const summOfProducts = bread + cheese + milk;
const summOfProductsFloor = Math.floor(bread) + Math.floor(cheese) + Math.floor(milk);
const summProductsRounded = (Math.round(summOfProductsFloor / 100)) * 100;
const isEven = summOfProductsFloor % 2 === 0;
const clientChange = (clientMoney - summOfProducts).toFixed(2);
const averageAmount = ((bread + cheese + milk) / 3).toFixed(2);
const discount = Math.random();
const discountInCash = (discount * 100).toFixed(0);
const priceWithDiscount = (summOfProducts - (summOfProducts * discount)).toFixed(2);
const profit = (priceWithDiscount - (summOfProducts / 2)).toFixed(2);

//Advanced

document.querySelector('.price-counter').innerHTML = 
(`<ol>
    <li>Найбільше число: <b>${maxProductsPrice}</b> грн</li>
    <li>Найменше число: <b>${minProductsPrice}</b> грн</li>
    <li>Сума всіх товарів: <b>${summOfProducts}</b> грн</li>
    <li>Сума всіх товарів округлена: <b>${summOfProductsFloor}</b> грн</li>
    <li>Сума округлена до сотень: <b>${summProductsRounded}</b> грн</li>
    <li>Чи парне число: <b>${isEven}</b></li>
    <li>Решта з 500 грн складає: <b>${clientChange}</b> грн</li>
    <li>Середнє значення цін: <b>${averageAmount}</b> грн</li>
    <li>Ваша знижка складає: <b>${discountInCash}%</b></li>
    <li>Cума зі знижкою: <b>${priceWithDiscount}</b> грн</li>
    <li>Чистий прибуток складає: <b>${profit}</b> грн</li>
    </ol>
    <hr>
    <div class="date">${date}</div>`);