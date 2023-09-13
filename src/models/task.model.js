import mongoose from "mongoose";

const ManghuaSchema = new mongoose.Schema({
  title: {
    type: String,
    require:true,
    unique:true,
  },
  image:{

  },
  description: {
    type: String,
    require:true,
    trim:true,
    unique:true
  },
  date: {
    type: String,
    default:Date.now,
  },

},{
  timestamps:true
});


export default mongoose.model("Task", ManghuaSchema)