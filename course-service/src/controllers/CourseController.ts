import {default as Course} from '../models/Course';
import { Request, Response, NextFunction,IRoute } from "express";
import { abstractControl} from './abstractControl';

export class CourseController extends abstractControl{

    constructor(router:any){
        super(router,Course);

        setTimeout(()=>{
            this.defaultDB();
        },1000)
    }

    defaultDB(){
        this.model.find( (err:any,resp:any)=>{
            // if(err) this.handleError(res)(err);
            if(resp.length == 0){
                let courses :Array<any>=[
                    {
                        autor: 'Pablo Neruda',
                        name:'Canto General',
                        image:'https://cloud10.todocoleccion.online/libros-segunda-mano-poesia/tc/2017/08/11/16/95357079.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui.'
                    },
                    {
                        autor: 'Gabriel Garcia Marquez',
                        name:'Cien años de Soledad',
                        image:'https://http2.mlstatic.com/cien-anos-de-soledad-garcia-marquez-alfaguara-D_NQ_NP_627111-MCO20493262727_112015-F.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui. Ipsum proident in nisi labore amet nisi fugiat proident sit non eiusmod ut. Occaecat ea quis velit non minim aliquip laboris tempor ullamco eu aliquip Lorem exercitation deserunt. Non in dolore proident eu irure. Dolor eu aliqua reprehenderit laborum nostrud laborum non.'
                    },
                    {
                        autor: 'Juan Lechin',
                        name:'La gula del picaflor',
                        image:'https://images-na.ssl-images-amazon.com/images/I/71qi4Kz80GL.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui.'
                    },
                    {
                        autor: 'og Mandino',
                        name:'Jesus y el tercer dia',
                        image:'https://images.gr-assets.com/books/1348461390l/942053.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui.'
                    },
                    {
                        autor: 'Pablo Neruda',
                        name:'Poema 20',
                        image:'https://i.pinimg.com/originals/6e/eb/b6/6eebb65f9e81e0213b4cff4ad9f2fa19.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui.'
                    },
                    {
                        autor: 'Dante Alighieri',
                        name:'Divine Comedy',
                        image:'https://http2.mlstatic.com/divina-comedia-dante-alighieri-pluton-D_NQ_NP_20287-MCO20186565015_102014-F.jpg',
                        description:'Exercitation quis quis sunt non ullamco. Laborum dolore occaecat aliquip ex. Aute sunt excepteur aliquip id non exercitation commodo deserunt ad qui.'
                    }
                ]

                this.model.insertMany(courses,(e:any,data:any)=>{
                    console.log(e)
                    console.log(data)
                })

            }            
        });
    }
}