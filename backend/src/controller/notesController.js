import {Note} from "../models/Note.js"

export const getAllNotes =  async(req,res) => {
try {
    // const userId = req.user.id // from token
    const notes = await Note.find().sort({createdAt: -1}) // -1 will sort in descending order (newest first)
    res.status(200).json(notes)
} catch (error) {
    console.error("error in getAllNotes controller", error)
    res.status(500).json({message: "internal server error"})
}
}
export const getSpecificNote =  async(req,res) => {
try {
    const note = await Note.findById(req.params.id)
    if(!note){
            return res.status(404).json({message: "note not found"})
        }

    res.status(200).json(note)
} catch (error) {
    console.error("error in getSpecificNote controller", error)
    res.status(500).json({message: "internal server error"})
}
}

export const createNote = async(req,res) => {
    try {
        const {title, content, img} = req.body
        const note = new Note({title: title, content: content, img: img})
        
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("error in createNote controller", error)
        res.status(500).json({message: "internal server error"})
    }
}

export const updateNote = async(req,res) => {
    try {
        const {title, content, img} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content, img}, 
        {
            new: true,
        })

        if(!updatedNote){
            return res.status(404).json({message: "note not found"})
        }

        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("error in updateNote controller", error)
        res.status(500).json({message: "internal server error"})
}
}

export const deleteNote = async(req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote){
            return res.status(404).json({message: "note not found"})
        }
        res.status(200).json({message: "successfully deleted note"})
    } catch (error) {
        
        console.error("error in deleteNote controller", error)
        res.status(500).json({message: "internal server error"})
        }
}