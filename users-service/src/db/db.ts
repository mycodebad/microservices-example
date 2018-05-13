import * as mongoose from "mongoose";
import {default as config} from  "../config/config";
import { AnyKindOfDictionary } from "lodash";

class DB {

    connectionSettings:any;
    mongoose:any;
    connection:any;

    constructor(connectionSettings:any) {
        this.connectionSettings = connectionSettings;
        this.mongoose=mongoose;        
        this.connection = this.mongoose.connect(connectionSettings.host + connectionSettings.database, {
            useMongoClient: true
        }, (e:any) => {
            console.log(e);
        });
    }
    disconnect() {
        this.connection.end();
    }
}

let Connect:any = new Promise((resolve,reject)=>{    
    if(!config.db.host) throw new Error("A host must be specified.");
    if(!config.db.database) throw new Error("A database must be specified.");
    resolve(new DB(config.db))
});

export default Connect;

