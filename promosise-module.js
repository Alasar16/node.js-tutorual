const {readFile , writeFile} = require('fs').promises
const util = require('util')

const start = async () =>{
    const fisrt = await readFile('./main/first.txt','utf8')
    const second = await readFile('./main/second.txt' , 'utf8')
    await writeFile('second2.txt',` surprise dut : > ${fisrt}`)
    console.log(fisrt , second)
}
start()


/*const getText = (path)=>{
    return new Promise((resolve , reject)=>{
        readFile(path , 'utf8' , (err , data)=>{
            if (err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}

const start = async () =>{
    const first = await getText('first.txt')
    const second = await getText('./main/second.txt')
    console.log(first , second)
}

start()*/