//in server we don't have button for submit etc so we use events rather than previous practice of html and js relation 
// EVENTS:    on() -> (listener) call event & registers event     emit() -> triggers func. and file creation and then fire      once -> 1 trigger and 1 register
//javascript is object oriented but in backend or server we use class
//class written in pascal  -> e.g. EventEmitter
//variable in camel case   ->   e.g. myClass
//"require" keyword mandatory for class calling

//class creation
// const EventEmitter = require("events");         //require => to bring module from node packages nd "events" here is a module
// //calling object from class"EventEmitter" using variable . here eventemitter is pre-defined class
// const event = new EventEmitter(); 

// //registering event listener and on is used to add a callback functions
// event.on('greet', ()=>{
//     console.log("This is an event emitter.");
// });

// event.on('hello', ()=>{
//     console.log("hello world.");
// });

// // event.once("greet",()=>{
// //     console.log
// // })
// event.emit('greet');                   //triggering event as we have no button in backend/to create event/to fire
// event.emit('greet');
// event.emit('greet');
// event.emit('hello');

// //always emit() comes first




//PROGRAM 1

class MyEmitter extends EventEmitter{}
const event = new  MyEmitter();

event.on("greet",(msg)=>{
    console.log(`HELLO! ${msg}`);
})

event.on("exit",()=>{
    console.log("GOODBYE!");
})
event.emit("greet","CSE 21 this is FSD class");
event.emit("exit");