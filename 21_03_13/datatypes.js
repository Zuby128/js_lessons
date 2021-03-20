/* eslint-disable linebreak-style */
/* eslint-disable use-isnan */
/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
// var c = 5;
// console.log({ c });

// var a;
// console.log({ a });
// a = 3;
// console.log({ a });

// var camelCase = 10;
// console.log(camelCase);

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

// var a = 7;
// console.log(typeof a); // number
// var a = '7';
// console.log(typeof a); // string
// var a = 7.77;
// console.log(typeof a); // number

// window.location = `https://${0.1 + 0.2}.com`; // paste this code to the console...

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 + 0.2).tofixed(1)); // 0.3

// var q = 999999999999999; // 999999999999999
// var w = 9999999999999999; // 10000000000000000 after 16 it round ups number

// bool "null" is false
// bool "undefined" is false
// bool 0 is false
// bool "0" is true
// bool "" is false
// bool " " is true

// typeof NaN is number

// all above true:
// console.log('0' == false);
// console.log('' == false);
// console.log(0 == false);
// console.log(Boolean(0) == false);
// console.log(Boolean('') == false);
// console.log(Boolean('0') == true);
// console.log(Boolean('zero') == true);
// console.log({} == false);

// null boolean operations
// console.log(Boolean(null) == false); // true
// console.log(null == false); // false
// console.log(null == true); // false
// console.log(typeof null); // object
// console.log(Boolean(null) == Boolean(0)); // true
// console.log(null == null); // true

// undefined
// console.log(undefined == false); // false
// console.log(undefined == true); // false
// console.log(undefined == 0); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false

// typeof ...
// console.log(typeof null); // object
// console.log(typeof undefined);
// console.log(typeof false);
// console.log(typeof 0);
// console.log(typeof NaN);

// number
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // number

// console.log(025 == 21); // başına 0 gelirse 8lik tabanda alıyor
