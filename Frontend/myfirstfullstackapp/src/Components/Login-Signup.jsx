import { Box, FormControl, Input,Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { signupAction } from "../Redux/action";
import { loginAction } from "../Redux/action";
import { useNavigate } from "react-router-dom"
import {useDispatch } from "react-redux";


export default function LoginSignup() {
    const [comp,setComp] = useState("Signup")
    const [signupUser,setSignupUser] = useState({})
    const [loginUser,setLoginUser] = useState({})
    useEffect(()=>{
        
    },[comp])
    const navigate =  useNavigate();

    const disptach = useDispatch()

    return <Box p="4%" alignItems="center">

        <Heading>{comp} Form</Heading>

        {
            comp==="Login"?<FormControl w="40%" m="auto" mt="2%" className="Login-Form">
            <Input type="email" placeholder="Enter Your Email" name="email"  onChange={(e)=>{setLoginUser({...loginUser,[e.target.name]:e.target.value})}}/>
            <Input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>{setLoginUser({...loginUser,[e.target.name]:e.target.value})}}/>
            <Button colorScheme="red" mt="2%" w="40%" onClick={()=>{
                disptach(loginAction(loginUser)) 
                navigate("/")}}>Login </Button>
        </FormControl>

        :

        <FormControl w="40%" m="auto" mt="2%" className="Signup-Form">
            <Input type="text" placeholder="Enter Your Name" name="name" onChange={(e)=>{setSignupUser({...signupUser,[e.target.name]:e.target.value})}}/>   
            <Input type="email" placeholder="Enter Your Email" name="email" onChange={(e)=>{setSignupUser({...signupUser,[e.target.name]:e.target.value})}}/>
            <Input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>{setSignupUser({...signupUser,[e.target.name]:e.target.value})}}/>
            <Input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(e)=>{setSignupUser({...signupUser,[e.target.name]:e.target.value})}}/>
            <Button colorScheme="red" mt="2%" w="40%" onClick={()=>{signupAction(signupUser)}}>Signup </Button>
        </FormControl>
        }


        <ButtonGroup mt="2%">
            <Button colorScheme="messenger" onClick={()=>{setComp("Signup")}}>SignUp</Button>
            <Button colorScheme="linkedin" onClick={()=>{setComp("Login")}}>Login</Button>
        </ButtonGroup>
    </Box>
}