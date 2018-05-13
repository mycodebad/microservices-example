import {default as CourseUser} from '../models/CourseUser';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';
import {default as Course} from '../models/Course';

export class CoursesUserController extends abstractControl{

    constructor(router:any){
        super(router,CourseUser,{
            "POST /buy" : "buyCourse",
            "/ping"  : "ping",
            "post /forUser":"coursesForUser"
        });
    }

    buyCourse(req :Request,res: Response){
        let body:any = req.body;
        
        if(body.idUser){
            this.model.findOne({idUser:body.idUser},(e:any,courseUser:any)=>{                
                Course.findById(body.idCourse,(e:any,course:any)=>{
                    if(courseUser){                        
                        courseUser.coursesUser.push(course);                        
                        courseUser.save( (err:any,data:any)=>{
                            console.log(err)
                            if(err) return this.handleError(res)(err);
                            return res.json(data)
                        })
                    }else{
                        let tempCourseUser:any = {
                            idUser : body.idUser,
                            coursesUser:[]
                        };
                        tempCourseUser.coursesUser.push(course);
                        let newCourseUser = new this.model(tempCourseUser);                        
                        newCourseUser.save(function (err:any,data:any) {
                            if(err) return this.handleError(res)(err);
                            return res.json(course)
                        })
                    }
                });
            })
        }else{
            return this.handleError(res)({
                msg:'User not found'
            })
        }        
    }

    coursesForUser(req :Request,res: Response){
        let body:any = req.body;
        console.log("body courses")
        console.log(body)
        if(body.idUser){
            this.model.
                findOne({ idUser: body.idUser}).
                populate('coursesUser').
                exec( (err:any, courses:any)=> {
                    if (err) return this.handleError(err);
                    console.log('The author is %s', courses);
                    return res.json(courses)                    
                    // prints "The author is Ian Fleming"
                });
        }
    }

    ping(req :Request,res: Response){       
        console.log('rsafasfasdfasd') 
        res.json({
            status:'OK'
        })
    }
    
}