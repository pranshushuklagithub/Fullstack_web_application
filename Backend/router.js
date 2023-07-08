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

router.post("/login",async (req,res)=>{
    try {  
        const {email,password} = req.body;
        const user = await Usermodel.find({email:email,password:password});
        
        // console.log(user[0].name)
        const token = "secret123"

        res.send({response:`Hii ${user[0].name} You're Logged in !`,token:token,name:user[0].name,userId:user[0]._id});
       } catch (error) {
        res.send('Something Went Wrong !')
       }
})

module.exports = {router};