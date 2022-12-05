console.log("9");

const numberOne = 7;
const numberTwo = 8;
console.log(numberOne);
console.log(numberTwo);

console.log(numberOne + numberTwo);

const word = "Задание";
console.log(word.toUpperCase());
console.log(word.toLowerCase());

console.log(numberOne + numberTwo);
console.log(numberOne);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne ** 2); 
console.log(numberOne % numberTwo); 

//  Выведет случайное число от 0 до 100.
console.log("Случайное значение:", Math.round(Math.random() * 101))

//  Шестой элемент из массива.
let fruits = ["47", "85", "7", "2", "76", "11", "49", "28", "37", "95"];
console.log(fruits[5]);


function LoveCalculator() {
    firstName = prompt("Введите его имя:");
    secondName = prompt("Введите её имя");
    result = Math.round((Math.random(0, 100) * 100), 0);
    alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
}

function BMICalculator() {
    height = prompt("Введите рост в сантиметрах");
    weight = prompt("Введите вес");

    bmi = weight / (height * height)  * 10000;

    if (bmi <= 18.5) {
        alert(`Индекс массы тела: ${bmi}, у Вас недостаточный вес!`);
    } 
    else if (bmi <= 25) {
        alert(`Индекс массы тела: ${bmi}, у Вас всё нормально!`);
    } 
    else if (bmi <= 30) {
        alert(`Индекс массы тела: ${bmi}, у Вас излишки веса!`);
    } 
    else if (bmi > 30) {
        alert(`Индекс массы тела: ${bmi}, у Вас ожирение!`);
    }
}

function LeapOrNonLeap() {
    year = prompt("Введите год");

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert("Високосный год");
    } 
    else {
        alert("Не является високосным");
    }
}

function WhoPaysForDinner() {
    names = prompt("Введите имена людей через запятую");

    names = names.split(",");

    result = Math.round((Math.random(0, names.length) * names.length), 0);

    alert(`Оплачивать ужин будет ${names[result]}`);
}