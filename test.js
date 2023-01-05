// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
let version = (data) => {
 console.log(`participant: ${data}.`);
};

// Assign the version function as the listener callback for 'new user' events
myEmitter.on('new user', version)

// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad')
// 'Lily Pad' output

// above code explained.
// Node.js has an EventEmitter class which can be accessed by importing the events core module by using the require() statement. Each event emitter instance has an .on() method which assigns a listener callback function to a named event.

//  EventEmitter also has an .emit() method which announces a named event that has occurred.


