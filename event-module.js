const EventEmitter = require('events')

const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log('event is emitted')
})

customEmitter.emit('response')