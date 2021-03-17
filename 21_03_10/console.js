/* eslint-disable no-restricted-globals */
// document.write('hello world!');
// document.write('hello<br> myself');
// console.log('written on console');
// alert('you have an e-mail');
// prompt('please add your name:', Zuby);
// eslint-disable-next-line no-alert
// confirm('helloooo!!!');

document.body.innerHTML = '<h1>Got you!!!</h1>';
console.time();
console.table({ a: 1, b: 2, c: 3 });
console.info('this is an info'); // info ve log arasında bir fark yok diğerleri farklı ve güzel
console.error('this is an error');
console.warn('this is a warning');
console.timeEnd(); // time ve timeEnd arasında ne kadar zaman geçmiş
// hesaplanır. içine isim de verilebilir console da öyle görünebilir sonrasında
console.group();
// ...
console.groupEnd(); // consollananı grup halinde gösterir
