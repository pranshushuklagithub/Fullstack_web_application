const mongoose = require("mongoose");

const connection = async()=>{
    try {
        await mongoose.connect("mongodb+srv://pranshu:%40Pranshu123@cluster0.2adv7w5.mongodb.net/myFirstFullStack")
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error by mongoose connection")
    }
}

module.exports = connection;
