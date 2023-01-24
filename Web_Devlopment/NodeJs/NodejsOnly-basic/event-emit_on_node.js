
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order means emit is present above or below the on event if below means on will wait response from emit and it work if above then before wait of on event it will execute and dont work.
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {   // this will wait and work.
  console.log(`data recieved user ${name} with id:${id}`)
})
customEmitter.emit('response', 'john', 34) 

customEmitter.on('response', () => {  // emit will be execute before the wait of on event and doesnt work.
  console.log('some other logic here')
})