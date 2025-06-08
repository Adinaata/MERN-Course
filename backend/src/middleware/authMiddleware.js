import jwt from "jsonwebtoken"

export const authToken = (req,res,next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1] // Bearer token

    if (!token)return res.status(401).json({message: "no tokens provided"})


    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({message: "invalid token"})
        }
        req.user = user //attach user to request
        next()
    })
}