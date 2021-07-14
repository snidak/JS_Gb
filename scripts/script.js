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