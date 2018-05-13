import {default as User} from '../models/User';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';
import  * as rq from 'request';

export class userController extends abstractControl{

    constructor(router:any){
        super(router,User,{
            "/ping" : "ping",
            "post /requestUser":"requestUser",
            "get /:email":"getUser"
        });
    }

    ping(req: Request, res :Response){
        rq.get('http://localhost:4002/courses-user/ping',(err:any , response: any, body:any)=>{
          if(err){ this.handleError(res)(err)}
            res.json({
                status:'OK',
                body:JSON.parse(body),
                response
            })          
        });          
    }

    requestUser(req : Request, res: Response){
        console.log('userssss')
        let body:any = req.body;
        console.log(body)
        if(body.email){
            this.model.findOne({email:body.email},(e:Error,data:any)=>{
                if(e){
                    return this.handleError(res)({
                        msg:'Error Server'
                    })
                }else{
                    if(!data){
                        let model=new this.model({
                            email:body.email
                        });
                        model.save(function (err:any,user:any) {
                            if(err) return this.handleError(res)(err);
                            return res.json({
                                data : user,
                                new  : true
                            })
                        })                        
                    }else{
                        return res.json({
                            data : data,
                            new  : false
                        })
                    }
                }
            })
        }        
    }
    
    getUser(req : Request, res: Response){
        let body:any = req.params;   
        if(body.email){
            this.model.findOne({email:body.email},(e:Error,data:any)=>{
                if(e){
                    return this.handleError(res)({
                        msg:'Error Server'
                    })
                }else{
                    return res.json(data)
                }
            })
        }else{
            return this.handleError(res)({
                msg:'Error Server'
            })
        }
    }
}