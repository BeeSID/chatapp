import mongoose from "mongoose";

export const connecDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }

}