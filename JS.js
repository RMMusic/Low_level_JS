/**
 * Created by admin on 04.02.2016.
 */

//**********************************************
    // Неправильно поняте завдання.
var film = 'The Man from U.N.C.L.E.';

var count = 0;
var x;
for (x = 0; x < film.length; x++) {
    if (film[x] != ' '){
        count++;
    }
}

console.log(count);

//**********************************************

var strOne = "Mercedes, Ferrari, Williams, Red Bull, Force India, Renault, Toro Rosso, Sauber, McLaren, Manor, Haas";
function spliTTing (strOne)
{
    var spl = strOne.split(",");
    return spl.length;
}

console.log(spliTTing(strOne));

//**********************************************

var number = 1.000058;
console.log(number);

var numToStr = number.toFixed(3); //string
console.log(numToStr);

var clipNumber = parseFloat(number.toFixed(3)); //number
console.log(clipNumber);


//**********************************************

var strTwo = '11h1g2hnmsdofigdf67hgfgh87fgh8fg87hfghf';

function numbersCounter (strTwo)
{
    var number = 0;
    for (var x = 0; x < strTwo.length; x++) {
        var pars = parseInt(strTwo[x]);
        if (pars) number += pars;
    }
    return number;
}

console.log(numbersCounter(strTwo));

//**********************************************

var age = prompt ('Вік');


if (age >= 1 && age <= 17) {
    alert('Не дозволено');
}
else if (age >= 18 && age <= 130) {
    alert('Дозволено');
}
else {
    alert('Помилка');
}

//**********************************************