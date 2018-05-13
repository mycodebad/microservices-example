import * as nodemailer from 'nodemailer';
import { default as config} from '../config/config';


export class EmailService{
    static mailTransport(emailData:any) {
        let smtpTransport = nodemailer.createTransport({
            service: config.email.service,
            auth: {
                user: config.email.userEmail,
                pass: config.email.userPass
            },
            secure:true,
            port:config.port,
            host:config.email.host
        });

        smtpTransport.sendMail({  
            from: "zelada.torreza@gmail.com",
            to: emailData.email,
            subject: emailData.subject, 
            text: emailData.text,
            
        }, (error:any, response:any)=>{ 
            if(error){
                console.log('error');
                console.log(error);
            }else{
                console.log("Message sent: ",response);
            }
            smtpTransport.close();
        });
    }    
}


