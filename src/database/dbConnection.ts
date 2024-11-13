import mongoose from "mongoose";
const URI = process.env.MONGO_DB_URI;

export const connectDB = async (cb: ()=>Promise<void>) => {
    try {
        const conn = await mongoose.connect(URI, {
            socketTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        });
        // mongoose.set("useCreateIndex", true);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        cb()
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}