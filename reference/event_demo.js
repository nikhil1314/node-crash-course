const eventemitter=require('events');

//create class
class myemitter extends eventemitter { }

//init object
const Myemitter=new myemitter();
//event listener
Myemitter.on('event', ()=> console.log('event fired!..'));
//init event
Myemitter.emit('event');
