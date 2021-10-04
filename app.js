const fs = require('fs')
const path = require('path')

const appendFilePath = path.join(__dirname, 'files', 'write.txt')
const  mkdirPath = path.join(__dirname, 'files', 'user', 'photos')
const newFilePath = (mkdirPath, 'newFile.txt')

// const builder = require('./helper/user.builder')
//
// let user = builder.createUser('Denys', 33)
//
// console.log(user);

// console.log(__dirname);
//
// fs.readFile(`${__dirname}/files/test.txt`, ((err, data) => {  // read file
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(data.toString());
// }))
//
//
// fs.writeFile(`${__dirname}/files/write.txt`, 'Hello', (err) => {
//     console.log(err);
// })
//
// fs.appendFile(appendFilePath, 'Hello World 33\n', (err) => {  // add something to file
//     console.log(err);
// })
//
// fs.mkdir(mkdirPath, {recursive: true},(e) => {  // add directory/folders
//     console.log(e);
// })
//
// fs.unlink(appendFilePath, err => { //delete file
//     console.log(err);
// })

fs.rename(
    appendFilePath,
    newFilePath,  // replace and rename file
    err => {
        console.log(err);
    }
    )

fs.stat(newFilePath, (err, stats) => {
    if (err) {
        return
    }
    console.log(stats);
})

fs.readdir(newFilePath, (err, data) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(data);
})

// fs.rmdir()

// Створити 2 папки хлопчики та дівчинкию
// В них створити по 3 файли з обектами {name: 'Svs', gender: 'female'}
// Create readdir




