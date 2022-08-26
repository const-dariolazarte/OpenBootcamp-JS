/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha */

const myName = 'Dario Lazarte';
const myAge = 36;
const isDeveloper = true;
const dateBirth = new Date(1985, 10, 2);
const favoriteBook = {
  titulo: 'Geralt of Rivia',
  autor: 'Andrzej Sapkowsky',
  date: 1990
}

const list = [
  myName,
  myAge,
  isDeveloper,
  dateBirth,
  favoriteBook
]

console.log(list);