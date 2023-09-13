import mongoose from "mongoose";

const userChema = new mongoose.Schema({
  username: {
    type: String,
    require:true,
    trim:true
  },
  email: {
    type: String,
    require:true,
    trim:true,
    unique:true
  },
  password: {
    type: String,
    requir:true,
  },
},{
  timestamps:true
});


export default mongoose.model("User", userChema)