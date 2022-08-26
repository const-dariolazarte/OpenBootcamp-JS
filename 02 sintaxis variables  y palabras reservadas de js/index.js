/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha */

const list = [
  'Dario Lazarte',
  36,
  true,
  new Date(1985, 10, 2),
  {
    titulo: 'Geralt of Rivia',
    autor: 'Andrzej Sapkowski',
    date: 1990,
    url: 'https://www.goodreads.com/shelf/show/geralt-of-rivia'
  }
]

console.log(list);