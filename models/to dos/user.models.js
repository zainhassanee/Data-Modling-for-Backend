import mongoose from 'mongoose';

//same same but difflent
/*const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  isActive: Boolean,
}); */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, //if you want username is in lowercase
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true
    //required:[true," Password must be require "]  // for showing message
  }
},
{timestamps=true // time stamp is build in mongosse that model time e,g uptadeat ,created at  etc
});

export const User = mongoose.model('User', userSchema);
