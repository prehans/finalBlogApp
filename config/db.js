const mongoose=require('mongoose');
const colors=require('colors');
const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL);
         console.log("MongoDB connected".bgGreen.white);
    }
    catch(error){
         console.log(`Database Connection error ${error}`.bgRed.white);
    }
};
module.exports=connectDB;