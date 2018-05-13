import {default as Course} from '../models/Course';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';

export class CourseController extends abstractControl{

    constructor(router:any){
        super(router,Course);
    }
}