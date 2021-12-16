const EventEmitter = require('events')
const door = new EventEmitter()

door.addListener('slam', (arg1, arg2, arg3) => {
	console.log('slammed ', arg1, arg2, arg3)
})

door.once('bang', (arg1, arg2, arg3) => {
	console.log('bang bang ', arg1, arg2, arg3)
})

const powEventHandler = (arg1, arg2, arg3) => {
	console.log('pow powed ', arg1, arg2, arg3)
}

const powListener = door.on('pow', powEventHandler)

door.emit('slam', 1, 2, 3)
door.emit('pow', 'a', 2, 3)
door.emit('pow')
door.emit('slam')

const events = door.eventNames()
console.log(events)

console.log("cur max num listeners: ", door.getMaxListeners())

door.setMaxListeners(20)

console.log("cur max num listeners: ", door.getMaxListeners())

setTimeout(() => {
	console.log("total num slam listeners: ", door.listenerCount('slam'))
}, 1000)

console.log("list of pow listeners: ", door.listeners('pow'))

door.off('pow', powEventHandler)

console.log("total num pow listeners: ", door.listenerCount('pow'))

door.emit('bang')
door.emit('bang')
door.emit('bang')
