const express = require("express");
const router = express.Router();
const {Usermodel} = require("./model")

router.post("/signup",async (req,res)=>{
    const {name,email,password,confirmPassword} = req.body;
    console.log(name,email,password,confirmPassword)

    const user = new Usermodel({
        name,email,password,confirmPassword
    })
    await user.save();
    res.json({name,email,password,confirmPassword});

})

module.exports = router;