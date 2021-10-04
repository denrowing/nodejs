// Створити 2 папки хлопчики та дівчинки
// В них створити по 3 файли з обектами {name: 'Somebody', gender: 'female/male'}
// Визначити невідповідності у назві папки та статі особи.
// Зробити відповідні переміщення у папки в разі потреби.

const fs = require('fs')
const path = require('path')

// const mkdirPathMale1 = (__dirname, 'boys')
const appendFilePathMale1 = path.join(__dirname, 'boys')
// const mkdirPathFemale1 = (__dirname, folder2)
// console.log(appendFilePathMale1);

function checkGender(folder1, folder2) {
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
checkGender('boys', `girls`)

// function getFile(folder) {
//     fs.readdir(path.join(folder), (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//         console.log(data);
//     })
// }
// let arr = getFile(appendFilePathMale1)
// console.log(arr[0]);
//
//
// function getGender(folder) {
//     fs.readFile(folder, (err, data1) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log(JSON.parse(data).gender);
//     })
// }
//
// getGender()
