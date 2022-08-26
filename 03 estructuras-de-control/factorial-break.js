// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let number = 10;
let factorial = 1;

while (true) {
  factorial *= number
  number--
  if (number === 0) {
    break;
  }
}

console.log(factorial);
