import mongoose from "mongoose";
import DBname from "./DBname.js";

const DBconn=()=>{
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${DBname}`)
        console.log("MongoDB Connected Successfully");
        
    } catch (error) {
        console.log("MongoDB connection Failed",error);
    }
}

export default DBconn;