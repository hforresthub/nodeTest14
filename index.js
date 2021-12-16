const EventEmitter = require('events')
const door = new EventEmitter()

door.addListener('slam', (arg1, arg2, arg3) => {
	console.log('slammed ', arg1, arg2, arg3)
})

door.addListener('pow', (arg1, arg2, arg3) => {
	console.log('pow powed ', arg1, arg2, arg3)
})

door.emit('slam', 1, 2, 3)
door.emit('pow', 'a', 2, 3)
door.emit('pow')
door.emit('slam')

const events = door.eventNames()
console.log(events)

console.log(door.getMaxListeners())

