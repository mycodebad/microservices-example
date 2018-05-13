import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

const CoursesUserSchema = new mongoose.Schema({
  idUser:String,
  coursesUser:[
    {
        type:Schema.Types.ObjectId,
        ref:'Course'
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }  
}, { timestamps: true,
  usePushEach:true
});

const CoursesUser = mongoose.model("CoursesUser", CoursesUserSchema);
export default CoursesUser;