const EventEmitter = require('events')
const util = require('util')

const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log('event is emitted')
})

customEmitter.emit('response')