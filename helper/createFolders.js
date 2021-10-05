const  fs = require('fs')
const path = require('path')

const namesFolder = ['manOlder20', 'manYounger20', 'womanOlder20', 'womanYounger20']
let pathData = '/home/denys/WebstormProjects/owu/nodejs/data/'

function createFolders(arr) {
    for (let i = 0; i < arr.length; i++) {
        let pathCreateDir = path.join(pathData, arr[i])

        fs.mkdir(pathCreateDir, err => {
            if(err) {
                return;
            }
        })
    }
}

module.exports = {
    createFolders,
    namesFolder
}


