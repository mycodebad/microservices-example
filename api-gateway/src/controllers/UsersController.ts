
import { Request, Response, NextFunction,IRoute } from "express";
import { ParentRoutes} from './ParentRoutes';
import { default as config} from '../config/config';
import  * as rq from 'request';
// import { default as RabbitConnect} from '../rabbit/rabbit.connection';
// const rabbitCon:any = RabbitConnect();

export class UsersController extends ParentRoutes{

    constructor(router:any){
        super(router,{
            host: config.services.users,
            resources:true,
            routeResource:'/users',
            routes:{
                "get /:email" : "forUser"                                 
            }
        });
    }    

    forUser(req:Request, res:Response){
        let body = req.params;
        console.log('asdasdasd');
        console.log(body);

        if(body.email){
            rq({
                url:config.services.users + `/users/${body.email}`,
                method:'get'                
                }, (err, response, userRes)=>{
                    if(!err){   
                        let user = JSON.parse(userRes)
                            console.log('user');
                            console.log(user);                                         
                        if(user){
                            
                            rq({
                                url:config.services.courses + '/courses-user/forUser',
                                method:'post',
                                json: {
                                    idUser:user._id,                 
                                }
                                }, (err, response, bodyComplete)=>{
                                    console.log("bodyComplete")
                                    console.log(bodyComplete)
                                    if(!err){
                                        let result={
                                            user : user,
                                            courses:bodyComplete
                                        }
                                        res.json(result)
                                    }else{
                                        res.json({error:true})
                                    }
                                })                           
                        // res.json(bodyComplete)
                        }else{
                            res.json({
                                error:true,
                                msg:'User not found'
                            })
                        }
                    }else{
                        res.json({error:true})
                    }
                })                           
        }else{
            res.json({error:true})            
        }        
    }
        
}