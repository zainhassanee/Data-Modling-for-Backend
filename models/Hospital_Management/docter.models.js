import mongoose from 'mongoose';

const docterSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  salery:{
    type:String,
    required:true
  },
  qualfication:{
    type:String,
    required:true
  },
  experiencedInYears:{
    type:Number,
    default:0
  },
  workedInhosiptal:{
    type:mongoose.Schema.Types.ObjectId,
    ref:true
    // required:true
  },


}, { timestamps: true });

export const Docter = mongoose.model('Docter', docterSchema);
