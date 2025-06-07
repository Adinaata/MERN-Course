import mongoose, { mongo } from "mongoose";

// 1. create schema
// 2. create model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
    },
    content:{
        type: String,
        required: true
    },
},
    {
        timestamps: true //createdAt and updatedAt create automatically by mongodb
    }
)


const Note = mongoose.model("Note", noteSchema)

export default Note