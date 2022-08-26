// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

const myHeightInCm = 174;
const myHeightInM = myHeightInCm / 100;
const myWeight = 80;
const myHeightCeil = Math.ceil(myHeightInM);
const myWeightFloor = Math.floor(myWeight);

console.log(myHeightInM);
console.log(myHeightCeil);
console.log(myWeightFloor);