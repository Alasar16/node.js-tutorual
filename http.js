const http = require('http')


const server = http.createServer((rec , res)=>{
    console.log(`request was made ${rec.url}`)
    res.end("hello I'M HEMA FROM WEB I CAN HEAR U MAN")
})

server.listen(3000)
console.log("hey hema from web can u hear me")