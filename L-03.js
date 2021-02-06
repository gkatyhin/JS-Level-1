<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <title>Title</title>
    </head>
    <body>

        <!-- Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 -->

        <script>
            console.log("Ответ на первое задание");

            // Создаем массив от 1 до 100
            var arr = [];
            var end = 1;
            while (end
            <
            100){
            end++;
            arr.push(end);
            }
            //      Удаляем все четные цифры
            var a=2;
            var b=2;
            while (a
            <
            = 100){
            a += b;
            arr.splice(arr.indexOf(a), 1);
            }
            //      Удаляет все цифры которые деляться на нечетные до 10
            a = 4;
            b = 3;
            while (a
            <
            100){
            if (a % b ===0 && arr.indexOf(a) !== -1){
            arr.splice(arr.indexOf(a), 1);
            }else {
            a++;
        }
            }

            a = 6;
            b = 5;
            while (a
            <
            100) {
            if (a % b === 0 && arr.indexOf(a) !== -1) {
            arr.splice(arr.indexOf(a), 1);
            } else {
            a++;
        }
            }

            a = 8;
            b = 7;
            while (a
            <
            100) {
            if (a % b === 0 && arr.indexOf(a) !== -1) {
            arr.splice(arr.indexOf(a), 1);
            } else {
            a++;
        }
            }
            console.log(arr);
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

        <!--Задание 3.  Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
                        for(…){// здесь пусто}-->

        <script>
            console.log("Ответ на третье задание");

            var i;
            for ( i = 0; i
            <
            = 9; i++){
            console.log(i);
            }
        </script>

        <!--Задание 4.  Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть
                        20 рядов, а не 5:-->

        <script>
            console.log("Ответ на четвертое задание");

            var arr = [];
            var end = 0;
            while (end
            <
            20){
            end++;
            arr.push(' x');
            console.log(arr);
        }
    </script>

</body>
</html>