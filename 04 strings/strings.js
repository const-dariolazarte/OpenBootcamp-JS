// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

// - Otra cadena de texto con tu Apellido

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

// - Una variable que contenga la primera letra del Nombre

// - Otra variable que contenga la última letra del Apellido

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

const myName = 'Dario';
const myLastname = 'Lazarte';
const estudiante = `${myName} ${myLastname}`
const estudianteMayus = estudiante.toLocaleUpperCase();
const estudianteMinus = estudiante.toLocaleLowerCase();
const estudianteLongitud = estudiante.length;
const firstCharName = myName[0];
const lastCharLastame = myLastname.charAt(myLastname.length - 1)
const deleteEspace = estudiante.match(/[a-z]/ig).join('');

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteLongitud);
console.log(firstCharName);
console.log(lastCharLastame);
console.log(deleteEspace);



