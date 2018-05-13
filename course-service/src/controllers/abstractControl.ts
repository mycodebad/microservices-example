import { Request, Response, NextFunction , Router} from "express";
import { Model} from "mongoose";

export class abstractControl{

    model:any;    
    defaultRoute:any={
        '/'         : 'list',
        'POST /'    : 'create',
        'PUT /'     : 'update',
        'DELETE /:id'  : 'remove'
    };

    constructor(public router:Router,public schema:any, public extendRoute:any={}){
        this.model=schema;        
        this.defaultRoute=this.model ? this.defaultRoute:{};
        this.defaultRoute=Object.assign({},this.defaultRoute,extendRoute);
        this.registerRoutes();
    }

    registerRoutes() {
        let _this:any=this;
        Object.keys(_this.defaultRoute).forEach((path) => {
            let method = _this.defaultRoute[path];
            let verb = path.split(' ').length > 1 ? path.split(' ')[0] : 'get';
            let point = path.split(' ').length > 1 ? path.split(' ')[1] : path.split(' ')[0];
            verb = verb.toLowerCase();
            _this.router[verb](point, _this[method].bind(_this));
        });
    }

    list(req:Request,res:Response){
        this.model.find(function (err:any,resp:any) {
            if(err) this.handleError(res)(err);
            return res.json(resp);
        });
    }

    create(req:Request,res:Response){
        let body= req.body;
        let model=new this.model(body);
        model.save(function (err:any,data:any) {
            if(err) return this.handleError(res)(err);
            return res.json(data)
        })
    }

    update(req:Request,res:Response){
        let query = {
            _id:req.body._id
        };    
        this.model.findOneAndUpdate(query,req.body, {new:true},function (err:any, doc:any) {
            if (err) this.handleError(res)(err);
            res.json(doc);
        })
    }

    remove(req:Request,res:Response){
        this.model.remove({_id:req.params.id},function (err:any,data:any) {
            if(err) return this.handleError(res)(err);
            return res.json(data)
        })
    }

    handleError(res:Response) {
        return function(error:any) {
            return res.status(500).json(error);
        }
    }

}

