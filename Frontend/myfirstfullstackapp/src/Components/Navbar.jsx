import { Box, Button, Heading,Flex, useDisclosure} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { logoutAction } from "../Redux/action";
import { useSelector,useDispatch } from "react-redux";
import ProductModal from "./ProductModal";



export default function Navbar(){
    const [token,setToken] = useState("")
    

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const dispatch = useDispatch()

    const isAuth = useSelector((state)=>{
        return state.loginReducer.isAuth;
    })

    useEffect(()=>{
        getTokenFromLocal();
    },[token])
    

    function getTokenFromLocal() {
        const tok = localStorage.getItem("login-token")||""
        if(tok!=="" || tok!==undefined) {
            dispatch({type:"LOGIN_SUCCESS"})
            // setUserId(localStorage.getItem("login-userId"))
            setToken(tok);
        }
    }

    return <Box bg="MenuText" alignItems="center">
        <Flex className="Navbar" p="1%"   justifyContent="space-between" m="auto" alignItems="center" >

        
        <Heading ml="5%" color="red">OLX-<span style={{color:"tomato"}}>LITE</span></Heading>
        
        <Flex w="70%" justify="space-evenly" alignItems="center">
            <Link to="/"><Button colorScheme="green">Explore Products</Button></Link>
            
            <Link to="/yourAds"><Button colorScheme="green">Your Ads</Button></Link>

            <Button colorScheme="green" onClick={()=>{
                if(isAuth) {
                    // console.log("valid user")
                    onOpen()
                }else {
                    alert("Please Login First")
                }
            }}>Want to sell?</Button>

            {isAuth?<Button onClick={()=>{
                dispatch(logoutAction())
                setToken("")
                navigate("/loginSignup")
            }} colorScheme="red">Logout</Button>:<Link to="/loginSignup"><Button colorScheme="green">Login or Signup</Button></Link>}

            
            
            <Heading fontSize="2xl" color="Highlight">{localStorage.getItem("login-name")}</Heading>
        </Flex>
        </Flex>

        {
            onOpen?<ProductModal isOpen={isOpen} onClose={onClose} />:false
        }
    </Box>
}