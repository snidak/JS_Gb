//Функция рандомного числа от min до max
function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}


let btn     = document.querySelector(".form-btn");
btn.onclick = function() {

    let celsius     = document.querySelector(".input-celsius");
    let fahrenheit  = Math.round((9 / 5) * Number(celsius.value) + 32);

    document.querySelector(".answer").innerHTML = fahrenheit + "Tf";
    alert("Температура по Фаренгейту = "+ fahrenheit);
};

let admin = name = "Василий";
console.log(admin);
let answer3 =  1000 + "108";
console.log("Вырожение 1000 + '108' = "+answer3 + "\nт.к. 1000 число, а '108' строка");

//Lesson 3

//Функция возврата простых чисел от 0 до 100
 console.log('Задача вывода простых чисел от 0 до 100')
let maxNum = 100,
    num = 0

numbr: while(num <= maxNum){
    //Простое число должно быть больше 1
    if((num < 1) || (num === 1)) {
        num++ 
        continue numbr
    }
   //Числа на деление 
    for(i = 2; i < num; i++ ){
        if(num % i == 0) {
            num++
            continue numbr
        }
    }
    //Число является простым
    console.log(num);
    num++
}

//Определяем массив товаров в корзине
console.log('Задача подсчитать общую стоимость товаров в корзине')
let arrProduct = [
        ["Продукт 1", 300],
        ["Продукт 2", 100],
        ["Продукт 3", 140],
        ["Продукт 4", 60],
        ["Продукт 5", 225],
        ["Продукт 6", 80],
        ["Продукт 7", 15]
    ],
    price = 0

for(let product of arrProduct){
    price += product[1]
}
console.log(`Общая стоимость товаров в корзине: \n ${price}`)

// Lesson 4

console.log(`Задача на преобразование числа (от 0 до 999) в объект`)
let numb = randomInteger(0, 999),
    objNums = getNumObj(numb)

console.log(`Число ${numb}`)
console.log(objNums)

//Функция обработки числа в объект
function getNumObj(numb){
    numb = String(numb).split("");
    objNum = {
        "единицы"   : numb[numb.length-1], 
        "десятки"   : numb[numb.length-2], 
        "сотни"     : numb[numb.length-3]
    }
    //Проверка объекта на undefined
    for(variab in objNum){
        if(objNum[variab] === undefined) delete objNum[variab]
    }
    return objNum
}

//Реальзация объекта корзины
console.log('Реальзация объекта корзины')
let basket = [
        getProduct("Продукт 1", 300),
        getProduct("Продукт 2", 250),
        getProduct("Продукт 3", 200),
        getProduct("Продукт 4", 150),
        getProduct("Продукт 5", 100)
    ],
    generalPrice = countPrice(basket)

console.log("Корзина состоит из:")
console.log(basket)
console.log(`Общая стоимость корзины ${generalPrice}`)

//Вычисляем общую стоимость
function countPrice(obj){
    let price = 0
    for( let product of obj ) price += product.price
    return price
}

//Объявляем объект продукта
function getProduct(name, price){
    return {
        name,
        price
    }
}
