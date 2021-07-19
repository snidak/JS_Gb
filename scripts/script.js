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

