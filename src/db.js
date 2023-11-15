// import { MongoClient } from 'mongodb';
import mongoose from "mongoose";

const password = "olivia123"
const url = `mongodb+srv://franco-krismann:${password}@mhscan.xcdbstj.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(url)

export const connectDB = async() => {
  try {      
    await mongoose.connect(url)
    console.log('>>>>>>DB connection established');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}
