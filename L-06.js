<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>
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
        do {d++;if (d === 0) {alert(d + m);}
        else if (d % 2 == 0) {alert(d + b);}
        else {alert(d + c);}} while (d < 10);

        // функция возврата стоимости конкретного товара.
        const getItemPrice=(item, array) => {
        const items=[];
        const costs=[];

        // предполагаем, что мы знаем структуру массива со стоимостями товара, поэтому разбиваем его на 2 одномерных массива
        for (let i=0; i < array.length;
        i++) { items.push(array[i][0]);
        costs.push(array[i][1]);}

        // используя метод .indexOf получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
        return costs[items.indexOf(item)];}

        const countBasketPrice=(basketArr, costArr) => {
        let totalCost=0;
        for (let i=0; i < basketArr.length; i++)

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