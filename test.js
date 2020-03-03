'use strict';
// 1 Задача 
// Вывести в консоль произведение цифр этого числа
// const num = 26619;
// let strNum = String(num);
// let arr = strNum.split('');

// Решение
// let result = arr.reduce((a,b) => {
//   return a * b;
// });
// console.log(result);


// 2 Задача 
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
// через if, 
// через switch-case 
// через многомерный массив без ифов и switch.

// Решение
// const arrRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
//       neighbor = document.getElementById('neighbor'),
//       input = document.getElementById('input'),
//       arrEng = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
//       div = document.createElement('div');

// div.classList.add('days');

// const addDays = (arr) => {
//   div.innerHTML = '';
//   arr.forEach((el) => {
//     document.body.insertBefore(div, neighbor);
//     div.innerHTML += `${el} <br>`;
//   });
// };

// input.addEventListener('change', () => {

//   if(input.value === 'ru'){
//     addDays(arrRu);
//   }else if(input.value === 'en'){
//     addDays(arrEng);
//   }else{
//         alert('Введите ru или en'); 
// }

// switch(input.value) {
//     case 'ru':
//         addDays(arrRu);
//         break;
//     case 'en':
//         addDays(arrEng);
//         break;
//     default: 
//         alert('Введите ru или en');             
// }

// const arr = {
//   'arrRu' : ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
//   'arrEng' : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// };

// input.value === 'ru' ? addDays(arr['arrRu']):
// input.value === 'en' ? addDays(arr['arrEng']):
// alert('Введите ru или en');

// });


//  Задача 3
// Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если как аргумент передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

// Решение
// const str = ' Разнообразный и богатый опыт говорит нам, что сплочённость команды профессионалов способствует повышению качества новых предложений. В частности, постоянный количественный рост и сфера нашей активности требует анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также разбавленное изрядной долей эмпатии, рациональное мышление требует анализа анализа существующих паттернов поведения. ';
// const num = 0;
// let newStr = 0;
// const lineProcessing = (a) => {
//     if(typeof a !== 'string'){
//         alert('не строка');
//     } else if(a.length > 30) {
//         a.trim();
//         newStr = a.slice(-445, 30);
//         newStr = newStr + '...';
//         console.log(newStr);
//     }
// };
// lineProcessing(str);


// Замыкания
// const Counter = () => {
//     let a = 0;
//     const sum = () => {
//         a++;
//         return a;
       
//     };
//     console.dir(sum);
//     return sum;
// };

// let counter = Counter();

// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter());

// Задача 4.1
// Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

// Решение
// const arr = [122345, 236678, 45012, 450921, 098125, 34545, 1232345];
// for (let i = (arr.length - 1); i > 0; i-- ){
//     let num = String(arr[i]);
//     if(num[0] === '2' || num[0] === '4'){
//         console.log(num);
//     }
// }

//Задача 4.2 Вывести в столбик все простые числа от 1 до 100
// — Статья про простые числа (Просто́е число́ — это натуральное число, больше единицы, имеющее ровно два натуральных делителя: 1 и само себя. )
// — Рядом с каждым числом написать оба делителя данного числа
// Например: “Делители этого числа: 1 и n”

// Решение
// const num = 100;

// next:
// for(let i = 2; i <= num; i++){
//     for(let j = 2; j < i; j++){
//         if(i % j == 0){
//             continue next;
//         }   
//     }
//     console.log(i);
// }


 // Задача 5.1
//  Напишите код, выполнив задание из каждого пункта отдельной строкой:
//  Создайте пустой объект user.
//  Добавьте свойство name со значением John.
//  Добавьте свойство surname со значением Smith.
//  Измените значение свойства name на Pete.
//  Удалите свойство name из объекта.

// Решение 
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// console.log(user);
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// Задача 5.2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Решение
// let obj = {};

// const isEmpty = (obj) => {
//     if(Object.keys(obj).length === 0){
//        return false
//     }else{
//        return true
//}
// };
// isEmpty(obj);

// Задача 5.3
// У нас есть объект, в котором хранятся зарплаты нашей команды
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
// let result = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// const sum = () => {
//     if(Object.keys(salaries).length === 0){
//         console.log(result);
//     }else{
//         for(let key in salaries){
//             result += salaries[key];
//         }
//     }
// };
// sum();

// console.log(result);


// Задача 5.4
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// Решение

// function Calculator() {
//     this.a = 0;
//     this.b = 0;
//     this.start = () => {
//         this.read();
//         this.sum();
//         this.mul();
//     };
//     this.read = () => {
//         console.log(this);
//         this.a = prompt('Введите число а', 0);
//         this.b = prompt('Введите число b', 0);
//         if(this.a === '' || this.a === null || !isFinite(this.a)){
//             alert('не число, попробуйте еще раз');
//             this.read();
//         }else{
//             this.a = Number(this.a);
//             this.b = Number(this.b);
//         }       
//     };
//     this.sum = () => { 
//         alert(`Сумма чисел = ${this.a + this.b}`);
//         return this.a * this.b;
//     };
//     this.mul = () => { 
//         alert(`Произведение чисел = ${this.a * this.b}`);
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.start();

// Задача 6
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

//Решение
// let arr = ['Джаз', 'Блюз'];

// arr.push('Рок-н-Ролл');
// let i = Math.floor(arr.length/2);
// arr[i] = 'Классика';
// let elemOne = arr.shift();
// arr.unshift('Рэп', 'Блюз');

//Задача 6.1
//Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// Решение
// const sumInput = () => {
//     const arr = [];
//     let result = 0;
//     let value = prompt('Введите число', 0);
//     console.log(isFinite(value));

//     while(true){
//         let value = prompt('Введите число', 0);
//         if(value === '' || value === null || !isFinite(value)){
//             break;
//         }   
      
//         arr.push(+value);
//     }
//     for(let num of arr){
//         result += num;
//     }
//     return result;
// };
// alert( sumInput() );

// Задача 6.2
// Напишите функцию camalize() которая пребразует строки вида "my-short-string" в "myShortString".

// Решение
// let str = prompt('введите строку', 'my-short-string');
// let newStr = 0;
// const сamalize = (str) => {
//      let arr = str.split('-');
//      console.log(arr);
//      arr.forEach((el,i) => {
//         let x = el[0].toUpperCase();
//         let newEl = el.replace(el[0], x);
//         arr[i] = newEl;
        
//      });
//      newStr = arr.join('');
// };
// сamalize(str);
// console.log(newStr);


// Задача 6.3
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.

// function Calculator(){
//     this.method = {
//         "+": (a, b) => alert(a + b), 
//         "-": (a, b) => alert(a - b),    
//     };
//     this.calculate = (str) => {
//         let arr = str.split(' ');
//         let a = +arr[0];
//         let b = +arr[2];
//         let op = arr[1];
//         if(!isNaN(a) || !isNaN(b)){
//             this.method[op](a,b);
            
//         }
//    };
//    this.addMethod = (name, func) => {
//        this.method[name] = func;
//    };
// }

// let calculator = new Calculator();

// calculator.addMethod("*", (a, b) => alert(a * b));
// calculator.addMethod("/", (a, b) => alert(a / b));
// calculator.addMethod("**", (a, b) => alert(a ** b));
// calculator.calculate('5 ** 2');


// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// let sum = 0;
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Frank": 150
// };

// let sumSalaries = () => {
//     let arr = Object.values((salaries));
//     arr.forEach(element => {
//         sum += element;
//     });
//     console.log(`зарплата всей команды ${sum}р`); 
// };
// sumSalaries();


//Задачи для собеседований
// Дана строка, нужно написать функцию, которая возвращает значение true, если строка — палиндром, и false, если это не так. При решении задачи необходимо учитывать пробелы и знаки препинания. Пример:
// palindrome('racecar')  ===  true
// palindrome('table')  ===  false

// const polindrome = (str) => {
// let str2 = str.split('').reverse().join('');
// console.log(str2 === str);
// };
// polindrome('raceca');

//FizzBuzz
// Это очень популярная задача на собеседованиях.
// Формулировка задачи
// Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
// выводит fizz вместо чисел, кратных 3;
// выводит buzz вместо чисел, кратных 5;
// выводит fizzbuzz вместо чисел, кратных и 3, и 5.
//Решение

// const FizzBuzz = (n) => {
//     if(n % 5 === 0 && n % 3 === 0 ){
//         console.log('fizzbuzz');
//     }else if(n % 5 === 0){
//         console.log('buzz');
//     }else if(n % 3 === 0){
//         console.log('fizz');
//     }else{
//         console.log(n);
//     }
// };
// FizzBuzz(15);

// Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Важны только символы, пробелы или знаки препинания не учитываются. Пример:
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

//Решение

// const anagram = (a, b) => {
//     a = a.toLowerCase().replace(/\s/g, '');
//     b = b.toLowerCase().replace(/\s/g, '');

//     let str = Object.values(a).sort().join('');
//     let str2 = Object.values(b).sort().join('');

//     if(str === str2){
//         console.log(true);
//     }else{
//         console.log(false);
//     }

// };
// anagram('finder ', 'Friend');