
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import { connecDB } from "./lib/db.js";


dotenv.config()
const app = express();

const PORT = process.env.PORT

// the below line is used to extract json data from the body
app.use(express.json()); 
app.use(cookieParser());


app.use("/api/auth",authRoutes)
app.listen(PORT, () => {
    console.log("Server is running on port :" + PORT);
    connecDB()
});