import * as mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  autor: String,
  name:String,
  image:String,
  description:String,
  createdAt:{
    type:Date,
    default:Date.now
  }  
}, { timestamps: true });

const Course = mongoose.model("Course", CourseSchema);
export default Course;