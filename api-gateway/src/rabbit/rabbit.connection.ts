import * as amqp from 'amqplib/callback_api'
import { default as config} from '../config/config'
declare let instance :any;

class Connect {

    private static instance :Connect;

    conn:any;
    queue:any;
    ch:any;
    private constructor(queue:any){
        amqp.connect(config.rabbit.host,(e,conn)=>{
            console.log(e);
            this.conn=conn;
            this.queue=queue;
            this.ch={};                
            this._createChannel(this.conn);
        });            
    }

    _createChannel(conn:any){
        this.conn.createChannel( (e:any,ch:any) =>{
            this.queue.forEach(function (val:any) {
                ch.assertQueue(val,{durable:false})
            });
            this.ch=ch;
        });
    }

    sendToQueue(queue:any,data:any){
        this.ch.sendToQueue(queue, new Buffer(JSON.stringify(data)))
    }    

    static getInstance(queue?:any){
        if(!Connect.instance){
            Connect.instance = new Connect(queue);
        }
        return Connect.instance
    }
}

let RabbitConnect:any;
export default RabbitConnect = Connect.getInstance;
