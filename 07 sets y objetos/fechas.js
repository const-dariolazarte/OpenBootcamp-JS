// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const currentDate = new Date();

const myBirthday = new Date(1985, 10, 2, 10, 30);

const currentVSmybirthday = currentDate > myBirthday;

const myDay = myBirthday.getDate();
const myMonth = myBirthday.getMonth() + 1 ;
const myYear = myBirthday.getFullYear();
