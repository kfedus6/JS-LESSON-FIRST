
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
console.log(`Name: ${name} Age: ${age} IsOleg: ${isOleg} Number: ${num} Num2: ${num2}`)

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
/*const users = [{ name: "Dima", age: "25" }, "QWE", false]; //0,1,2

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
*/

//Дима Славик Антон


/*let name = prompt("ведите иимя");

if (name === "dima") {
   alert("hello");
} else if (name === "kolya") {
   console.log("2");
} else if (name === "igor") {
   console.log("3")
} else {
   console.log("Имя не распознано");
}
*/




/*let x = "w";
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
*/
///ДЗ 

/*
let student = [{ name: "kolya", age: 25 }, { name: "oleg", age: 22 }, { name: "dima", age: 26 }];
alert(student.map(e => `Name: ${e.name}, Age: ${e.age}`).join("\n"));

let a = prompt("Ведите первое число:");
let b = prompt("Ведите второе число:");
let c = prompt("выбрать способ: 1-додати, 2-відняти, 3-помножити, 4-поділити.");

if (c == 1) {
   alert(+a + +b);
} else if (c == 2) {
   alert(a - b);
} else if (c == 3) {
   alert(a * b);
} else if (c == 4) {
   alert(a / b);
} else {
   alert("error")
}

let a = prompt("Ведите первое число:");
let b = prompt("Ведите второе число:");
let c = prompt("выбрать способ: 1-додати, 2-відняти, 3-помножити, 4-поділити.");

switch (c) {
   case "1": {
      alert(+a + +b);
      break;
   }
   case "2": {
      alert(a - b);
      break;
   }
   case "3": {
      alert(a * b);
      break;
   }
   case "4": {
      alert(a / b);
      break;
   }
   default: alert("error");
}

*/
//for for in, for of, while, do while

/*
for (let i = 0; i < 5; i++) {
   console.log(i);
   //1
   //2
   //3
   //4
}

let prices = [2, 1, 4];
prices[3] = 5;
prices[4] = "q";
console.log(prices);
*/
//Создать массив на 10 элементов. Заполнить его числами от 0 до 10 возведенными в квадрат.

// 0 - создать массив
// 1 - создать цикл на проходов
// 2 - записывать в массив числа от 0 до 10
// 3 - возвести числа в квадрат

/*
let x = [];

for (let i = 0; i < 20; i++) {
   x[i] = count;
   count += 2;
}

console.log(x);

//console.log(x);
*/

/*
for (let i = 1; i <= 15; i++) {
   if (i === 10) {
      //break; Остановить
      //continue; Пропускает цикл 1
   }
   console.log(i);
}
*/

//let students = [{ Name: "Dima", age: 15 }, { Name: "Misha", age: 15 }];
//alert(`Name: ${students[1].Name} age: ${students[1].age}`);


/*
let student = { Name: "Dima", age: 15, student: false };
for (s in student) {
   console.log(student[s]);
}
*/

/*
let word = "hello";
for (s of word) {
   console.log(s + s);
}
*/

/*
let arr = [4, 1, 2, 35, 62];

for (n of arr) {
   console.log(n ** 2);
}
*/
/*
let i = 5;
let y = 8;
while (false) {
   console.log(i);
   i++;
}
*/

/*
let n = 0;
do {
   console.log(n);
   n++;
} while (n < 0)
*/

// Создать массив на лету из 3 объектов (студентов), данные вводит пользователь
// Вывести всех студентов по одному
// Вывести средний возраст студентов
