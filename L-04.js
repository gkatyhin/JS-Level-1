<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--Задача 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
              на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
              для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
              Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
              пустой объект.-->

    <script>
        console.log('Ответ задача 1');

        var max = 999;
        var digit = {
          number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
          units: 0,
          tens: 0,
          hundreds: 0,
        };
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= 999){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        }else {
            digit.number = 0;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
        console.log(digit);

    </script>

    <!-- Задание 2.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в
               корзине хранятся в массиве. Задачи:
        a) Организовать такой массив для хранения товаров в корзине;
        b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.-->

        const basketItems = ['Утюг', 'Утюг', 'Кофеварка', 'Пылесос'];
        const ItemsCost = [['Утюг', 100], ['Кофеварка', 50], ['Пылесос', 250]];
        let m = ' - это ноль';
        let b = ' - это чётное число';
        let c = ' - это нечётное число';
        let d = -1;
        do {
        d++;
        if (d === 0) {
        alert(d + m);
    } else if (d % 2 == 0) {
        alert(d + b);
    } else {
        alert(d + c);
    }
    } while (d
        <
        10);

        // функция возврата стоимости конкретного товара.
        const getItemPrice=(item, array) => {
        const items=[];
        const costs=[];
        // предполагаем, что мы знаем структуру массива со стоимостями товара, поэтому разбиваем его на 2 одномерных массива
        for (let i=0; i
        < array.length
        ; i++) {
        items.push(array[i][0]);
        costs.push(array[i][1]);
        }
        // используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
        return costs[items.indexOf(item)];
        };

        const countBasketPrice=(basketArr, costArr) => {
        let totalCost=0;
        for (let i=0; i
        < basketArr.length
        ; i++) {
        // на каждой итерации обхода массива корзины обращаемся к функции получения стоимости единицы товара.
        totalCost += getItemPrice(basketArr[i], costArr);
        }
        return totalCost;
        };
        console.log('Массив корзины: ' + basketItems);
console.log(' Массив стоимости каждого товара: ' + ItemsCost);
console.log(' Вывод полной стоимости корзины: ' + countBasketPrice(basketItems, ItemsCost));
</body>
</html>