/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable semi */
/* eslint-disable no-unused-expressions */
/* eslint-disable space-before-blocks */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-continue */
/* eslint-disable comma-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */

// function square(number){
//   return number * number;
// }
// console.log(square(4)); // 16

// function squar(number){
//   number * number;
// }
// console.log(squar(4)); // undefined

// const smt = function (number){
//   return number * number;
// }
// console.log(smt(4)); // 16

// console.log(var1); // undefined
// console.log(var2); // can not access
// console.log(var3); // not defined
// var var1;
// let var2;
// console.log(var2); // undefined

// console.log(typeof 'message'); // string
// console.log(typeof !'message'); // boolean
// console.log(typeof !!'message'); // boolean

// function div(num1, num2) {
//   if (num2 === 0) {
//     return 'Hata!';
//   } // no need else
//   return num1 / num2;
// }
// console.log(div(3, 4));

// function div2(num1, num2) {
//   return num2 ? num1 / num2 : 'Hata';
// }
// console.log(div2(3, 4));

// function sayHi() {
//   return 'Hi';
// }
// function sayHi2() {
//   console.log('Hi');
// }
// sayHi()
// console.log(typeof sayHi()); // string
// sayHi2()
// console.log(typeof sayHi2()); // undefined (return ile değer döndürülmüyorsa undefined döner)

// function pascalSum1(n) {
//   return (n * (n + 1)) / 2
// }
// function pascalSum2(n) {
//   // with loop
//   sum = 0;
//   for (let i = 1; i < n + 1; i++) {
//     sum += i
//   }
//   return sum;
// }
// function pascalSum3(n) {
//   // recursive
//   if (n === 1) return 1;
//   return n + pascalSum3(n - 1);
// }
// function pascalSum4(n) {
//   // while loop
//   sum = 0;
//   while (n > 0) {
//     sum += n;
//     n--;
//   }
//   return sum
// }
// console.log(pascalSum1(4))
// console.log(pascalSum2(4))
// console.log(pascalSum3(4))
// console.log(pascalSum4(4))

// function pascalSum5(n) {
//   // recursive
//   console.trace(n);
//   if (n === 1) return 1;
//   return n + pascalSum5(n - 1);
// }
// console.log(pascalSum5(5))

// function sayHi(myName) {
//   console.log(`Hello! ${myName}`);
//   myName = 'John'
//   console.log(myName)
// }
// let myName = 'Matt';
// sayHi(myName);
// console.log('--------------')
// console.log(myName);

// function greet(user) {
//   user = user || 'user'
//   console.log(`welcome ${user}`);
// }
// greet('mark');
// greet();

// function greet2(user = 'user') {
//   user = user || 'user'
//   console.log(`welcome ${user}`);
// }
// greet2('mark');
// greet2();

// console.log(sayHi()); // can not access
// const sayHi = function () {
//   return 'Hi';
// }
// console.log(sayHi()); // hi
// console.log(typeof sayHi()); // string
