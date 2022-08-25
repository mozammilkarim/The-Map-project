const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            min: 3,
            max: 20
        },
        email: {
            type: String,
            require: true,
            unique: true,
            max: 50,
            min: 5
        },
        password: {
            type: String,
            require: true,
            min: 8,
            max: 20
        },
    },
    { timestamps: true }
);
module.exports =  mongoose.model("User",UserSchema)