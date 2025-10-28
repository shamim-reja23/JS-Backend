import { app } from "./app.js";
import connectDB from "./db/db.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8005, () => {
        console.log("Server is running at port :", process.env.PORT)
        
    })
})
.catch((err) => {
    console.log("Mongo db connection failed !!", err);
    
})








//import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
// import express from "express";

// const app = express()
// IIFE
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error: ", (error) => {
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()