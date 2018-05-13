import { Request, Response, NextFunction , Router} from "express";
import  * as rq from 'request';


interface ExtendRoutes{
    host:string,
    resources?:boolean,
    routeResource?:string,
    routes?:any
}

export class ParentRoutes{

    // abstract server:any;

    methods = ['get','post','put','delete'];

    constructor(public router:any,  public extendRoute?:ExtendRoutes){             
        this.registerRoutes();
    }

    registerRoutes() { 
        if(this.extendRoute.resources){
            let methods = ['get','post','put','delete'];
            methods.forEach((method) => {
                let outerPath = this.extendRoute.routeResource;
                let ctrl = this._gateway(method,outerPath);
                this.router[method]('/',ctrl);
            });
        }       

        if(this.extendRoute.routes){
            let routes = Object.assign({},this.extendRoute.routes);    
            let _this:any=this;
            Object.keys(routes).forEach((path) => {
                let ctrl = routes[path];
                let verb = path.split(' ').length > 1 ? path.split(' ')[0] : 'get';
                let newPath = path.split(' ').length > 1 ? path.split(' ')[1] : path;                
                verb = verb.toLowerCase();            
                _this.router[verb](newPath, _this[ctrl].bind(_this));                
            });
        }    
    }


    _gateway(verb:string,outerPath:string){
        return (req:Request,res : Response)=>{
            let urlQuery = req.originalUrl.split('?')[1];
            let query = urlQuery ? '?'+urlQuery : '';
            let url = this.extendRoute.host + outerPath + query
            console.log(url)
        rq({
                url:url,
                method:verb,
                json: req.body
            },function (error, response, body) {
                if (!error) {
                    console.log(body)
                    res.json(body)
                }else{
                    res.json({error:true})
                    console.log(error)
                }
            });
        }
    }
    

    handleError(res:Response) {
        return function(error:any) {
            return res.status(500).json(error);
        }
    }

}

