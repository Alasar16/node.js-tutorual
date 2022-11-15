/*const { readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./main/first.txt','utf8') 
const second = readFileSync('./main/second.txt','utf8') 
console.log(first)
console.log(second)

writeFileSync('./main/result.txt',
`the result is : ${first} , ${second}`
)*/

//////////////////////////////////////////////////////

const {readFile,writeFile} = require('fs')



readFile('first.txt','utf8', function (err , data){
    console.log(data)
})

console.log("me first")





