import mongoose from "mongoose";
import { ENV_VAR } from "./envVar.js";


export const connectDB = async() => {
    try{

        const conn = await mongoose.connect(ENV_VAR.MONGO_URL)
        console.log("Mongo DB Connected", conn.connection.host)
    }
    catch(err){
        console.log("Error while connecting the mongodb",err)
        process.exit(1)
    }

}