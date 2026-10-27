const EventEmitter = require('events')
const event = new EventEmitter();

event.on('great',()=>{
  console.log("helo welcome to the event emitter example");
});
event.on("great", () => {
  console.log("helo welcome to the event emitter example");
});
event.emit('great');

function abc(){
  console.log('this is the function')
}
function abc() {
  console.log("this is the function");
}
abc();
abc();