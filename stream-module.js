const http = require('http')
const fs = require('fs')
const { chunk } = require('lodash')

const server = http.createServer((req , res)=>{
    console.log(`request was made ${req.url}`)
    const readFileStream = fs.createReadStream('first.txt','utf8')
    readFileStream.pipe(res)
})

server.listen(3000)
console.log('hello')

const readFileStream= fs.createReadStream('first.txt','utf8')
const writeFileStream= fs.createWriteStream('writeSream.txt')

readFileStream.on('data' , (chunk)=>{
    console.log('here is your data')
    console.log(chunk)
})

readFileStream.on('data' , (chunk)=>{
    writeFileStream(chunk)
})