import { User } from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//receiving request
export const registerUser = async (req, res) => {
    try {
        const {username, password} = req.body
    
         if (!username || !password){
            return res.status(400).json({message: "Username and password required"})
        }
    
        const findUser = await User.findOne({
            username: username
        })
    
        if(findUser){
            return res.status(400).json({message: "username is taken"})
        }
    
        //hashing user password
        const hashedPassword = bcrypt.hashSync(password, 5)
    
        //save user data
        await User.create({
            username: username,
            password: hashedPassword,
        })
    
        return res.status(201).json({message: "user registered"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "server error", error})
    }
}


export const loginUser = async(req,res) => {
    try {
        const {username, password} = req.body
    
        if (!username || !password){
            return res.status(400).json({message: "Username and password required"})
        }
    
        const findUser = await User.findOne({
            username : username
        })
    
        if(!findUser){
            return res.status(400).json({message: "User not found"})
        }
    
        const isPasswordValid = bcrypt.compareSync(password, findUser.password)
    
        if (!isPasswordValid){
            return res.status(400).json({message: "wrong password"})
        }
    
        const token = jwt.sign(
            {id: findUser._id, username: findUser.username},
            process.env.JWT_SECRET,
            { expiresIn: "1h"}    
        )
        
        return res.status(200).json({
            message: "User logged in", 
            token,
            user_data: {
                id: findUser.id,
                username: findUser.username
            }})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "server error", error})
    }
}