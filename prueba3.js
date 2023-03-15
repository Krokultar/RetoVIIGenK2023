'use strict';

const mensaje1 = 'Nekgikis VII';
const mensaje2 = 'Faraón de Egipto';
const mensaje3 = 'Hijo de Nekgikis VI';
const mensaje4 = 'Quiere reclutar a los mejores developers';
const mensaje5 = '¿Quieres ser uno de ellos?';
const mensaje6 = 'Resuelve este problema y envíanos tu solución';

const consoleLog = (texto) => {
  console.log(texto);
};

console.log(mensaje1);
setTimeout(() => {
  console.log(mensaje5);
  setTimeout(() => {
    Promise.resolve().then(console.log(mensaje6));
  });
}, 0);
Promise.resolve().then(() => {
  console.log(mensaje3);
  Promise.resolve().then(() => {
    setTimeout(console.log(mensaje4), 0);
  });
});
console.log(mensaje2);
