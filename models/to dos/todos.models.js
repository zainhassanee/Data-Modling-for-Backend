import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdby:{
    type:mongoose.Schema.Types.ObjectId, //this mean type is refrence from user 
    ref:"User"//name schema reference
  },
  subtodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"SubTodo"
    }
  ]//arrays of subtodos



},{timestamps=true});

export const Todo = mongoose.model("Todo",todoSchema)