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

/* let i = 0;
while(i <= 100){
    console.log(i++);
    i++;
}
 */
const basket = document.querySelector('.basket__content')
document.querySelector('.repeatBasket').onclick = () =>{
    basket.textContent = ''
    basketRepeat()
};

function basketRepeat(){
    let arrProduct = [],
        cost = 0

    for(i=0; i<randomInteger(1, 10); i++){
        arrProduct[i] = newProduct(`Product#${i+1}`, randomInteger(50, 400))
        addCard(arrProduct[i])
        cost += arrProduct[i].price
    }

    document.querySelector('.quantit').innerHTML = arrProduct.length
    document.querySelector('.cost').innerHTML = cost

    console.log(`Обший массив товаров:\n${writeArr(arrProduct)}\nОбщая стоимость всех товаров:${cost}`);

}

function writeArr(arr){
    let str = ""
    for(i=0; i<arr.length; i++) str += `Name: ${arr[i].name} Price: ${arr[i].price} \n`
    return str
}

function addCard(obj){
    let html = `<div class="basket__item">
                    <h3 class="basket__title">${obj.name}</h3>
                    <div class="basket__price">${obj.price}</div>
                </div>`
    basket.innerHTML += html
}

function newProduct(name, price){
    return {"name":name, "price":price}
}

function randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}