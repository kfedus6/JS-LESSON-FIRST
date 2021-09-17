
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

/*let x = 5;
let y = 5;
let sum = x * y;
console.log(sum);
x = 7;
y = 3;
console.log(x - y);

x = 5;
y = 3;
sum = 5 / 2;
console.log(typeof sum)*/

//parseFloat(переменная) // преобразует переменную в тип флоат. 

/*z = "2.5"
sum = sum + parseFloat(z);
console.log(sum)*/

/*
let t = "kolya";
let u = "4.5";
sum = parseFloat(t) + parseFloat(u);
console.log(sum);
*/

/*let name = "12.3";
let result = parseFloat(name);
console.log(isNaN(result));
console.log(`Переменная name не содержит цифры - это: ${isNaN(result)}`);*/

// ДЗ
// 1)
/*console.log("Я в консоли");

// 2)
let name = "kolya";
let age;
let num = 25;
let num2 = null;
let isOleg = true;
console.log(`Name: ${name} Age: ${age} IsThisOleg: ${isOleg} Number: ${num} Num2: ${num2}`)

// 3)

let initial = 250000;
let interest = 8 / 100;
let years = 1;
let result = Math.round(initial * (1 + interest * years));
console.log(result);*/


//let b = 2 !== "2";
//console.log(b);

/*
let b = 2 > 3 ? "Правильно" : "Не правильно";
console.log(b)

let x1 = "4";
let x2 = 2;


//+= -= *= /=


//parseInt(переменная)
//parseFloat(переменная)

let y = "5"
y = parseInt(y);
y += y
console.log(y)

//int 123453 1 54 3 2 123 
//float 31.12 65.23 11.43

let t = "5";
t = parseFloat(t);
t += t;
console.log(t);


let result = x1 > x2 ? parseInt(x1) + 2 : x2 - 2;
console.log(result);

let z = "q";
let s = isNaN(z)
console.log(s);

let tmp = 'w';
let o = isNaN(tmp) ? "не цифра" : "цифра";
console.log(o);

//document.write()
let num1 = prompt("Введите число", 0);
alert("получил число " + num1);

*/
const users = [{ name: "Dima", age: "25" }, "QWE", false]; //0,1,2

console.log(users)
console.log(users[0].name);

if (2 > 3) {
   console.log("Правда")
}
else if (1 > 3) {
   console.log("2")
}
else if (5 > 3) {
   console.log("3")
}
else {
   console.log("Неправда")
}

//Дима Славик Антон

/*
let name = prompt("ведите иимя");

if (name === "dima") {
   console.log("1");
} else if (name === "kolya") {
   console.log("2");
} else if (name === "igor") {
   console.log("3")
} else {
   console.log("Имя не распознано");
}

*/



let x = "w";
switch (x) {
   case "w": {
      console.log("первый")
   }
   case "s": {
      console.log("второй")
      break;
   }
   case false: {
      console.log("3")
      break;
   }
   case 15: {
      console.log("4")
      break
   }
   default: { console.log("Не найденно ") }
}

