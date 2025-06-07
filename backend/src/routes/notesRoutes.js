import express from "express"
import { getAllNotes, updateNote, deleteNote, createNote, getSpecificNote } from "../controller/notesController.js"

const router = express.Router()

router.post("/", createNote)
router.get("/", getAllNotes)
router.get("/:id", getSpecificNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteNote)

export default router