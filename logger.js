const eventemitter=require('events');
const uuid=require('uuid');

class logger extends eventemitter
{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg });
    }
}
//module.exports=logger;

const logger=new Logger();
logger.on('message',(data)=> console.log('called listener:',data));
logger.log('hello world');
