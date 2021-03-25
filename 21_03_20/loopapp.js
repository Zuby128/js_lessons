/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-continue */
/* eslint-disable comma-dangle */
/* eslint-disable no-constant-condition */
/* eslint-disable no-alert */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     document.write(`${i} x ${j} = ${i * j}<br>`);
//   }
//   document.write('<br>');
// }

// const text = 'reverse';
// for (let i = text.length - 1; i >= 0; i--) {
//   console.log(text[i]);
// }

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// // ikişer gitmek için i++ yerine i+=2 gelir
// console.log(sum);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   // if (number % 2 === 0) sum += number;
//   sum += number % 2 === 0 ? number : 0;
// }
// console.log(sum);

// const x = 5;
// let factorial = 1;
// for (let i = x; i > 0; i--) factorial *= i;
// console.log(factorial);

// const factNum = Number(prompt('enter a number: '));
// let fact = 1;
// for (let i = factNum; i > 0; i--) fact *= 1;
// console.log(fact);

// let factorNum;
// let fact = 1;
// let message = 'Enter a number!: ';
// while (true) {
//   factorNum = Number(prompt(message));
//   if (Number.isInteger(factorNum) && factorNum > 0) break;
//   message = 'please enter a positive integer';
// }
// for (let i = factorNum; i > 0; i--) fact *= 1;
// console.log(fact);

// for (let i = 0; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i} fizzBuzz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Buzz`);
//   } else {
//     console.log(`${i}`);
//   }
// }

// const y = 5; // t&&t ikinci true, t||t birinci true
// console.log(`${y} is an ${(y % 2 === 0 && 'even') || 'odd'} number`);

// for (let i = 0; i <= 100; i++) {
//   console.log(
//     `${i}-${(i % 3 === 0 && 'fizz') || ''}${(i % 5 === 0 && 'Buzz') || ''}`
//   );
// }

// const text = 'anytext';
// const char = 'x';
// for (let i = 0; i < text.length; i++) {
//   if (char === text[i]) {
//     console.log(`${char} is at index ${i}`);
//   }
// }

// const x = Math.trunc(Math.random() * 20) + 1;
// console.log(x);

// const age = 21;
// console.log(age >= 18 ? 'you can drink' : 'go home!');

for (let i = 1; i < 10; ++i) {
  if (i % 3) {
    console.log("first", i);
    continue;
  }
  if (i == 7) {
    console.log("second", i);
    break;
  }
  console.log("last", i);
}
