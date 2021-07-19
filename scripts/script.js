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

//Lesson 2

//  2_1
/* 
    var a = 1, b = 1, c, d;
    c = ++a;            
        com: a = 2 , c = 2
    d = b++;             
        com: d = 1 b = 2
    c = (2+ ++a);      
        com: c = 2 + 2 + 1
    d = (2+ b++);      
        com: d = 2 + 2  
*/

//  2_2
/* 
    var a = 2;
    var x = 1 + (a *= 2);
    x = 1 + (2 * 2) = 5 
*/

// 2_3
let a = randomInteger(-10, 10),
    b = randomInteger(-10, 10)
console.log(a, b)
if((a >= 0) && (b >= 0)){
    console.log("Оба положительные \na-b="+(a-b))

} else if ((a < 0) && (b < 0)){
    console.log("Оба отрицательные \na*b="+(a*b))
} else{
    console.log("Оба разных знаков\na+b="+(a+b))
}

// 2_4
a = randomInteger(0, 15)
console.log(`Загаданное число ${a}`)
switch(a){
    case 0:
        console.log(0);
    case 1:
         console.log(1);
    case 2:
         console.log(2);
    case 3:
         console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    default:
        console.log(15);
 }

// 2_5

a = randomInteger(0, 15)
b = randomInteger(0, 15)
let addition = additionTest(a,b),    
    difference = differenceTest(a,b),
    multiplication = multiplicationTest(a,b),
    division = divisionTest(a,b)

console.log(`Загаданные числа: \na=${a}, b=${b}\nСумма: ${addition} \nВычитание: ${difference}\nУмножение: ${multiplication} \nДеление: ${division}`)
function additionTest(a,b){
    return a + b
}
function differenceTest(a,b){
    return a - b
}
function multiplicationTest(a,b){
    return a * b
}
function divisionTest(a,b){
    return a / b
}

// 2_6
// + - * / используемые операторы
let arg1 = randomInteger(0, 20),
    arg2 = randomInteger(-20, 10),
    operationArr = ['+', '-', '*', '/']
    operation = operationArr[randomInteger(0, 3)]
    value2_6 = mathOperation(arg1, arg2, operation)

console.log(`Задача 2_6: \narg1=${arg1}, arg2=${arg2} \nБыл вызван оператор ${operation}\nРезультат равен:${value2_6}`)

function mathOperation(arg1, arg2, operation){
    let answer
    switch(operation){
        case "+":
            answer = additionTest(arg1,arg2)
            break;
        case "-":
            answer = differenceTest(arg1,arg2)
            break;
        case "*":
            answer = multiplicationTest(arg1,arg2)
            break;
        case "/":
            answer = divisionTest(arg1,arg2)
            break;
        default:
            console.log("Такой оператор не найден")
    }
    return answer
}
// 2_7 
// null != 0 
// null является определённым значением отсутствия объекта

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
