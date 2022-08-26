// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const shoppingList = ['arroz', 'azucar', 'yerba', 'carne', 'huevos'];
shoppingList.push('Aceite de girasol');
shoppingList.pop();

const favoriteMovies = [
  {
    title: 'The Lord of The Rings',
    director: 'Peter Jackson',
    date: 2012
  },
  {
    title: 'Edge of Tomorrow',
    director: 'Doug Liman',
    date: 2014
  },
  {
    title: 'Spider-Man',
    director: 'Sam Raimi',
    date: 2002
  }
];

const moviesAfter2010 = favoriteMovies.filter((element) => element.date >= 2010);

const directors = favoriteMovies.map((element) => element.director);

const movies = favoriteMovies.map((element) => element.title);

const directorsPlusMovies = directors.concat(movies);
