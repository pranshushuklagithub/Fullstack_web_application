const express = require("express");

const {router} = require("./router")
const cors = require("cors")

const connection = require("./db")

const app = express();
app.use(express.json())
app.use(cors()) ;
app.use("/user",router)

const Port = 8000;





app.listen(Port,()=>{
    try {
        connection()
        console.log(`listening on ${Port}`)
    } catch (error) {
        
    }
})