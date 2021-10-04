// Створити 2 папки хлопчики та дівчинки
// В них створити по 3 файли з обектами {name: 'Somebody', gender: 'female/male'}
// Визначити невідповідності у назві папки та статі особи.
// Зробити відповідні переміщення у папки в разі потреби.

const builder = require('./helper/checkGender')

let sortedFilesForGender = builder.checkGender('boys', `girls`)
console.log(sortedFilesForGender);
