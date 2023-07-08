import { Box, Heading } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getYourAdAction } from "../Redux/action";
import AdCard from "./AdCard";


export default function YourAds() {
    const [token,setToken] =  useState("");
    const dispatch = useDispatch()

    const liveAds =  useSelector((state)=>{
        return state.productReducer.yourAd;
    })

    const isAuth = useSelector((state)=>{
        return state.loginReducer.isAuth;
    })

    const isLoading = useSelector((state)=>{
        return state.productReducer.isLoading;
    })

    useEffect(()=>{
        getTokenFromLocal()
        dispatch(getYourAdAction())
    },[token])
    // console.log(liveAds)

    function getTokenFromLocal() {
        const tok = localStorage.getItem("login-token")||""
        if(tok!=="") {
            dispatch({type:"LOGIN_SUCCESS"})
            setToken(tok);
        }
    }

    return isLoading?<Heading>Loading...</Heading>:isAuth?<Box>
        <Heading mt="3%" fontSize="xl">Your Ads are live here,You can edit or remove the products.</Heading>
        {
            liveAds.map((e,i)=>{
                return <AdCard key={i} title={e.title} image={e.image} price={e.price}description={e.description} id={e._id}/>
            })
        }
    </Box>:<Box p="5%">
        <Heading m="auto">Please Login First</Heading>
    </Box>
}