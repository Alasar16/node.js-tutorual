const path = require('path')
const os = require('path')

const filePath= path.join('main','path','path.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absluote = path.resolve(__dirname,'main','path','path.txt')
console.log(absluote)