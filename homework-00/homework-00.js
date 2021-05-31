const BREAD = 15.678,
      CHEESE = 123.965,
      MILK = 90.2345;

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
    <li>Найбільше число: ${maximum}</li>
    <li>Найменше число: ${minimum}</li>
    <li>Сума всіх товарів: ${summOfProducts}</li>
    <li>Сума всіх товарів округлена: ${summOfProductsFloor}</li>
    <li>Сума округлена до сотень: ${(Math.ceil(summOfProductsFloor / 100)) * 100}</li>
    <li>Чи парне число: ${summOfProductsFloor % 2 == 0}</li>
    <li>Решта з 500 грн складає: ${(500 - summOfProducts).toFixed(2)}</li>
    <li>Середнє значення цін: ${((BREAD + CHEESE + MILK) / 3).toFixed(2)}</li>
    <li>Ваша знижка складає: ${(discount * 100).toFixed(0)}%!!!</li>
    <li>Cума зі знижкою: ${priceWithDiscount.toFixed(2)}</li>
    <li>Чистий прибуток складає: ${profit.toFixed(2)}</li>
    </ol>`);