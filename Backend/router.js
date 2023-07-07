const express = require("express");
const router = express.Router();
const {Usermodel} = require("./model")

router.post("/signup",async (req,res)=>{

   try {  
    const {name,email,password,confirmPassword} = req.body;
    const user = new Usermodel({
        name,email,password,confirmPassword
    })
    await user.save();
    res.send(`Hii ${name} Your Signup is Successfull ! Now Please Login`);
   } catch (error) {
    res.send('Something Went Wrong !')
   }
})

router.get("/signup",async (req,res)=>{
    res.send("Signup");
})

module.exports = {router};