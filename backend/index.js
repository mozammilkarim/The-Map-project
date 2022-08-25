const express=require("express")
const mongoose=require("mongoose")
const app=express()
require("dotenv").config()
const pinRoute=require("./routes/pin")
const userRoute=require("./routes/user")
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("mongodb connected!")
}).catch((err=>{
    console.log("error",err)
}))

app.use("/v1/api/pins",pinRoute)
app.use("/v1/api/user",userRoute)

app.listen(3001,()=>{
    console.log("server listening at port 3001")
})