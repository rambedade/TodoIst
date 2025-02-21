//database connection 

const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config()

//function to connect monngodb

const connectDB= async()=>{
    try{
        const res=await mongoose.connect(process.env.mongo_url)
        console.log("mongo db connected successfully",res.connection.host)
    }catch(error){
        console.log("connection failed", error)
        process.exit(1)
    }
}

module.exports = connectDB;