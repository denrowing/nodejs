

const fs = require('fs')
const path = require('path')

const checkGender = (folder1, folder2) => {
    for(let i = 1, j = 4; i <= 3, j <= 6; i++, j++) {
        const mkdirPathMale = (__dirname, folder1)
        const mkdirPathFemale = (__dirname, folder2)

        const appendFilePathMale = path.join(mkdirPathMale, `txt${i}.json`)
        const appendFilePathFemale = path.join(mkdirPathFemale, `txt${j}.json`)

        // fs.readFile(appendFilePathFemale, (err, data) => {
        //     if(err) {
        //         console.log(err);
        //     }
        //     console.log((JSON.parse(data).gender), folder1)
        //
        // })
        // fs.readFile(appendFilePathMale, (err, data) => {
        //     if(err) {
        //         console.log(err);
        //     }
        //     console.log((JSON.parse(data).gender), folder2)
        // })


        fs.readFile(appendFilePathMale, (err, data) => {
            if (err) {
                console.log(err);
            } else if ((JSON.parse(data).gender === 'female') && (folder1 === 'boys')) {

                fs.rename(
                    appendFilePathMale,
                    path.join(mkdirPathFemale, `Female${j}.json`),
                    err => {
                        console.log(err);
                    }
                )

            }
        })

        fs.readFile(appendFilePathMale, (err, data) => {
            if (err) {
                console.log(err);
            } else if ((JSON.parse(data).gender === 'male') && (folder2 === 'girls')) {

                fs.rename(
                    appendFilePathFemale,
                    path.join(mkdirPathMale, `Male${i}.json`),
                    err => {
                        console.log(err);
                    }
                )

            }
        })
    }
}


module.exports = {
    checkGender
}
