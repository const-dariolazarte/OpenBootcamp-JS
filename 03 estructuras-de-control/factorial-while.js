// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let number = 10;
let factorial = 1;

while (number > 0) {
  factorial *= number
  number--
}

console.log(factorial);
