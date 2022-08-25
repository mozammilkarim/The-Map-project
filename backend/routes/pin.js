const routes= require("express").Router()
const Pin= require("../models/Pin")

routes.post("/",async (req,res)=>{
    try {
        const newPin= new Pin(req.body)
        const savedPin= await newPin.save()
        res.status(201).json({"message":"user created",data:savedPin})
    } catch (error) {
        res.status(500).json({error:error})
    }
})

routes.get("/",async (req,res)=>{
    try {
        const pins=await Pin.find()
        res.status(200).json({
            data:pins
        })
    } catch (error) {
        res.status(500).json({error:error})
    }

})

module.exports =routes