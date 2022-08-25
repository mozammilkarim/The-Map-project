const routes= require("express").Router()
const User= require("../models/User")
const bcrypt=require("bcrypt")

routes.post("/register",async (req,res)=>{
    try {
        const salt=await  bcrypt.genSalt(10)
        const hashedPass= await bcrypt.hash(req.body.password,salt)
        // console.log("hi")
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        })
        const savedUser=await newUser.save()
        res.status(201).json({
            "message":"user created",
            "data":savedUser._id
        })
        
    } catch (error) {
        res.status(500).json({error:error})
    }
})

routes.get("/list",async (req,res)=>{
    try {
       
        const savedUser=await User.find()
        res.status(201).json({
            "data":savedUser
        })
        
    } catch (error) {
        res.status(500).json({error:error})
    }
})


module.exports= routes