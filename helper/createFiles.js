const  fs = require('fs')
const path = require('path')
const builderUser = require('../data/dataUsers')
const {namesFolder} = require("./createFolders");


const pathHome = path.join('/home/denys/WebstormProjects/owu/nodejs/data/')
const userData = builderUser.users

const createFiles = function createFile(obj) {
    const arr = Object.assign(obj)
    for (let i = 0; i < arr.length; i++) {
        if((arr[i].gender === 'male') && (arr[i].age > 20)) {
            fs.writeFile(`${pathHome}${namesFolder[1]}/${i + 1}_${arr[i].name}.js`, `${arr[i]}`, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        }
        else if((arr[i].gender === 'male') && (arr[i].age <= 20)) {
            fs.writeFile(`${pathHome}${namesFolder[1]}/${i + 1}_${arr[i].name}.js`, `${arr[i]}`, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        } else if((arr[i].gender === 'female') && (arr[i].age > 20)) {
            fs.writeFile(`${pathHome}${namesFolder[1]}/${i + 1}_${arr[i].name}.js`, `${arr[i]}`, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        } else if((arr[i].gender === 'female') && (arr[i].age <= 20)) {
            fs.writeFile(`${pathHome}${namesFolder[1]}/${i + 1}_${arr[i].name}.js`, `${arr[i]}`, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        }
    }

}

module.exports = {
    userData,
    createFiles
}
