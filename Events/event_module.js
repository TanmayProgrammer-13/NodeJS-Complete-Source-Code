var events = require('events');
var eventEmitter = new events.EventEmitter();

//  Creating a Event Handler
var EventHandler = function(){
    console.log("Hello This is a Event");
}
// Assgining Event to a Event Handler
eventEmitter.on('Hello', EventHandler);

// Firing the Assigned Event
eventEmitter.emit('Hello');