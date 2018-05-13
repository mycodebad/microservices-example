
import * as amqp from 'amqplib/callback_api';
import { default as config} from './config/config';
import { EmailService} from './controllers/email'

amqp.connect(config.rabbit.host, (err, conn)=> {
    conn.createChannel((err, ch) =>{
        ch.assertQueue('email', {durable: false});
        ch.consume('email', (msg:any) =>{
            console.log(" [x] Received Email Queue");
            console.log(JSON.parse(msg.content));
            let sendEmail=JSON.parse(msg.content)                        
            EmailService.mailTransport(sendEmail);            
        }, {noAck: true});
    });
});


