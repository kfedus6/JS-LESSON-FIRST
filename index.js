
//Пример работы с документ

/*document.write("Hello");
document.getElementById('test').style.background = 'red';
*/

//Пример создание переменных
/*
var x = 3;
let y = 3;
const z = 2;
*/

//let t = "Dima";
//let name = "dima"; 

//let @name;
//let name%s;
//let 2name;

//let dep_in_my_bank;
//let depInMyBank;

//let name = "kolya";
//let age = 24;

//let num1,num2,sum;

//num1 = 5;
//num2 = num1-3;
//sum = num1+num2;

/*
let num = 3; //Number;
let num3 = 32.13; //Float;
let name = "dima"; //String;
let age; // Undefined;
let num2 = null; //Null;
let person = {name:"dima",age:"22"}; //Object
let heStudent = true/false; //Boolean
*/

//let name = "kolya";
//let age = 24;
//let heigt = 171.22;
//let isMerry = false;
//let number = null;

//typeof показывает тип данных

//console.log(typeof name);
//name = 24;
//console.log(typeof name);

//document.write(`Name: ${name} age: ${age} heigt: ${heigt} isMerry: ${isMerry} namber: ${number}`)

let x = 5;
let y = 5;
let sum = x * y;
console.log(sum);
x = 7;
y = 3;
console.log(x - y);

x = 5;
y = 3;
sum = 5 / 2;
console.log(typeof sum)

//parseFloat(переменная) // преобразует переменную в тип флоат. 

z = "2.5"
sum = sum + parseFloat(z);

console.log(sum)

/*
let t = "kolya";
let u = "4.5";
sum = parseFloat(t) + parseFloat(u);
console.log(sum);
*/

let name = "12.3";
let result = parseFloat(name);
console.log(isNaN(result));
console.log(`Переменная name не содержит цифры - это: ${isNaN(result)}`);
