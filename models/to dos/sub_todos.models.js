import mongoose, { trusted } from "mongoose";

const subtodoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:true
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps=true});

export const SubTodo = mongoose.model("SubTodo",subtodoSchema);