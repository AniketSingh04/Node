const EventEmitter = require('events');

const myEmitter = new EventEmitter();

/* In this example, myEmitter.on('greeting', ...) registers a 
listener function to be called when the 'greeting' event is emitted.
 Then, myEmitter.emit('greeting') emits the 'greeting' event, 
 causing the listener function to execute 
and log "Hello, world!" to the console.*/

myEmitter.on('greeting', (name) => {
    console.log('Hello, world!');
});

myEmitter.emit('greeting',{name:"aniket"}); // This will trigger the 'greeting' event and execute the listener function

