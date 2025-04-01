import cors from 'cors'
import 'dotenv/config'
import express from "express"
// import mongoose from 'mongoose'
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"

const app = express()


// middlewares
app.use(express.json())
app.use(cors())


// app config

const port = process.env.PORT || 4000
const URI = process.env.MONGODB_URI;


connectDB()


connectCloudinary()



// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))