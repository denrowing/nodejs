// / - у вас є масив юзeрів (до 10), з такими полями наприклад - const users = [
// //     { name: 'olya', gender: 'female', age: 20 }
// //         ...
// // ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
//  /home/denys/WebstormProjects/owu/nodejs -> __dirname root


const  fs = require('fs')
const path = require('path')

const builderFolders = require('./helper/createFolders')
const builderFiles = require('./helper/createFiles')
const {namesFolder} = require("./helper/createFolders");
const {readUsers, userData} = require("./helper/createFiles");
const dirName = __dirname
console.log(dirName);


const foldersCreator = builderFolders.createFolders(namesFolder)
console.log(foldersCreator);

const filesCreator = builderFiles.createFiles(userData)
console.log(filesCreator);

// let readUser = builderFiles.readUser
// let readUser = (JSON.parse(readUsers))
// console.log(readUser);
