import mongoose from "mongoose";


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
    img: {
        type: String,
        required: true
    }
},
    {
        timestamps: true //createdAt and updatedAt create automatically by mongodb
    }
)


export const Note = mongoose.model("Note", noteSchema)
