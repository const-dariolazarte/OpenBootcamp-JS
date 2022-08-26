// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = {
  nombre: 'Dario',
  apellido: 'Lazarte',
  edad: 36,
  altura_cm: 174,
  eresDesarrollador: true
}

const edad = datosPersonales.edad;

const grupoDeAmigos = [
  datosPersonales,
  {
    nombre: 'Enrique',
    apellido: 'Zacarias',
    edad: 38
  },
  {
    nombre: 'Facundo',
    apellido: 'Segura',
    edad: 37
  }
];

const ordenarEdad = grupoDeAmigos.sort((a, b) => a.edad - b.edad);