import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name:String,
  createdAt:{
    type:Date,
    default:Date.now
  },
  birthDay:{
    type:Date
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;