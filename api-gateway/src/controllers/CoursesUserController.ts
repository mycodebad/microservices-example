
import { Request, Response, NextFunction,IRoute } from "express";
import { ParentRoutes} from './ParentRoutes';
import { default as config} from '../config/config';
import  * as rq from 'request';
import { default as RabbitConnect} from '../rabbit/rabbit.connection';
const rabbitCon:any = RabbitConnect();

export class CoursesController extends ParentRoutes{

    constructor(router:any){
        super(router,{
            host: config.services.courses,
            resources:true,
            routeResource:'/courses',
            routes:{
                "POST /buy" : "buyCourse",
                "/ping"  : "ping",
                "post /forUser" : "forUser"
            }                        
        });
    }

    buyCourse(req :Request,res: Response){
        let body:any = req.body;
        if(body.email){                                        
            let url = config.services.users + '/users/requestUser'
            console.log(url)
            rq({
                url:url,
                method:'post',
                json: req.body
                },(error, response, bodyUser)=>{
                    if (!error) {
                        console.log(bodyUser)                        
                        let user :any = bodyUser.data;                      
                        if(bodyUser.new){
                            rabbitCon.sendToQueue('email',{
                                email:user.email,
                                subject: 'GRACIAS POR ELEGIRNOS', 
                                text:'Ahora si ya podemos enviarle los libros que podrian interesar',
                            });
                        }
                        rq({
                            url:config.services.courses + '/courses-user/buy',
                            method:'post',
                            json: {
                                idUser:user._id,
                                idCourse: body.idCourse
                            }
                            }, (err, response, course:any)=>{
                                if(!err){
                                    rabbitCon.sendToQueue('email',{
                                        email:user.email,
                                        subject: `ELIGIO ${course.name}`, 
                                        text:`${course.description || 'Descripcion'}`,
                                    });
                                    res.json(course)
                                }else{
                                    res.json({error:true})
                                }
                            })                        
                    }else{
                        res.json({error:true})
                        console.log(error)
                    }
                });
            
        }else{
            res.json({error:true})            
        }                
    }

    forUser(req :Request,res: Response){
        let body:any = req.body;
        if(body.idUser){
            rq({
                url:config.services.courses + '/courses-user/forUser',
                method:'post',
                json: {
                    idUser:body.idUser,                 
                }
                }, (err, response, bodyComplete)=>{
                    if(!err){
                        res.json(bodyComplete)
                    }else{
                        res.json({error:true})
                    }
                })                           
        }
    }

    ping(req :Request,res: Response){       
        console.log('rsafasfasdfasd') 
        res.json({
            status:'OK'
        })
    }
    
}