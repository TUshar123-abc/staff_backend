import mongoose from "mongoose";


const db = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to mongodb sucessfully `);
    }catch{
        console.log(`Error in connecting Mongodb ${Error}`)
    }
};

export default db;