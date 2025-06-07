import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB connected")
    } catch (error) {
        console.error("error connecting to mongoDB", error)
        process.exit(1) // 1 means exit with failure, if 0 means success   
    }
}