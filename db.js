const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sree123:sree123@devconnector.m8bzb.mongodb.net/sreecars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose