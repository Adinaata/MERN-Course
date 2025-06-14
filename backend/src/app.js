import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

import { loginUser, registerUser } from "./controller/authController.js";
import { authToken } from "./middleware/authMiddleware.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5001;


//endpoint? endpoint is combination of URL + HTTP method that lets client interact with a specific resource


//middleware
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})) // allow every request from every URL if not assigned to any url
app.use(express.json()) // will parse JSON bodies: req.body
app.use(rateLimiter) //rate limiting

//simple middleware
// app.use((req, res, next) => {
//     console.log(`req method is ${req.method} & req url ${req.url}`)
//     next()
// })


app.post("/register",registerUser)
app.post("/login", loginUser)

app.use("/api/notes",authToken, notesRoutes) //to notesRoutes.js

connectDB().then(() => {
    app.listen(PORT, ()=>{
        console.log("server runs on port", PORT)
    })

})



