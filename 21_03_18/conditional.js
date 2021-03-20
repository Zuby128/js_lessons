/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable default-case */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// const operator = prompt("(+, -, %, *) olarak işlem giriniz: ");
// const num1 = prompt("sayı giriniz: ");
// const num2 = prompt("bir başka sayı giriniz: ");
// let result;

// switch (operator) {
//     case "+":
//         result = parseFloat(num1) + parseFloat(num2)
//         break
//     case "-":
//         result = num1 - num2
//         break
//     case "%":
//         result = num1 % num2
//         break
//     case "*":
//         result = num1 * num2
//         break
//     default:
//         console.log("invalid ops")
// }
// console.log(`the result of ${num1} ${operator} ${num2} = ${result}`)

const dept = prompt("lütfen bölüm seçiniz: \n - aws \n - data science \n - fullstack");
switch (dept) {
    case "aws":
        console.log("peh");
        break
    case "data science":
        console.log("pof");
        break
    case "fullstack":
        console.log("heeeeeeey!!!");
        break
    default:
        console.log("not valid department!!!")
}
