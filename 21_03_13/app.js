/* eslint-disable linebreak-style */
/* eslint-disable no-redeclare */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
var c = 5;
console.log({ c });

var a;
console.log({ a });
a = 3;
console.log({ a });

var camelCase = 10;
console.log(camelCase);

// var x = 10;
// {
//   let y = 3; // cant use out of the scope
//   console.log(`b = ${y}`);

// //  var z = 5;
// }
// console.log(`a = ${x}`);
// console.log(`b = ${y}`); // y is not defined
// console.log(`b = ${z}`);

// t = 4;
// console.log(t);
// var t;

// f = 8;
// console.log(f);
// let f;

// const x = 5;
// x = 7; // generates error

// const x;
// x = 7; // generates error

var a = 7;
console.log(typeof a); // number
var a = '7';
console.log(typeof a); // string
var a = 7.77;
console.log(typeof a); // number

window.location = `https://${0.1 + 0.2}.com`; // paste this code to the console...

console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).tofixed(1)); // 0.3

// var q = 999999999999999; // 999999999999999
// var w = 9999999999999999; // 10000000000000000 after 16 it round ups number

// bool "null" is false
// bool "undefined" is false
// bool 0 is false
// bool "0" is true
// bool "" is false
// bool " " is true

// typeof NaN is number
