var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an Event Handler
var myEventHandler = function() {
	console.log('I Hear A Scream');
}

//Assigning  the event handler to an event
scream = 'scream';
eventEmitter.on(scream,myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit(scream);