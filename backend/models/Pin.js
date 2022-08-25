const mongoose=require("mongoose")

const PinSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            unique:true,
            min: 3,
            max: 20
        },
        title:{
            type:String,
            require:true,
            min:true,
        },
        description:{
            type:String,
            require:true,
            min:true,
        },
        rating:{
            type:Number,
            require:true,
            min:0,
            max:5
        },
        lat:{
            type:Number,
            require:true
        },
        long:{
            type:Number,
            require:true
        }
    },
    {timestamps:true}
)
module.exports= mongoose.model("Pin",PinSchema)