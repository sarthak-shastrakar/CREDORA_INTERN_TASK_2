const mongoose = require('mongoose');

const connectDB = async ()=>{
  try{
  const conn = await mongoose.connect("mongodb+srv://sarthakshastrakar12:ZEROdha12345@cluster0.duwyriw.mongodb.net/");
  console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectDB;