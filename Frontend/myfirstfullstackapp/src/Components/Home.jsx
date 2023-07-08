import { Box, Heading, SimpleGrid,Card, ButtonGroup, Button,CardBody, CardFooter,Image,Stack,Divider,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {StarIcon,EmailIcon} from "@chakra-ui/icons"
import { getProductAction } from "../Redux/action";

export default function Home (){
    const [token,setToken] =  useState("");
    
    const dispatch = useDispatch()

    const product =  useSelector((state)=>{
        return state.productReducer.products;
    })

    const isAuth = useSelector((state)=>{
        return state.loginReducer.isAuth;
    })

    const isLoading = useSelector((state)=>{
        return state.productReducer.isLoading;
    })
    
    useEffect(()=>{
        getTokenFromLocal()
        dispatch(getProductAction("type","sort"))
    },[token])

    

    

    function getTokenFromLocal() {
        const tok = localStorage.getItem("login-token")||""
        if(tok!=="") {
            dispatch({type:"LOGIN_SUCCESS"})
            setToken(tok);
        }
    }
    return isLoading?<Heading>Loading....</Heading>:isAuth?<Box >
        <Heading mt="3%" fontSize="xl">Choose The Best Products From These Live Ads Posted By People Around You. Chat With The Publishers.</Heading>

        <SimpleGrid gridTemplateColumns="repeat(2,1fr)" w="80%" m="auto"  p="4%" gap="2%">

            {
                product.map((e,i)=>{
                    return <Card key={i} w="100%" textAlign="left" m="auto">
                    <CardBody>
                      <Image src={e.image} borderRadius='lg' w="100%" h="300px"/>
                      <Stack mt='6' spacing='3' h="300px">
                        <Text fontSize="smaller" h="30px"> {e.userId === localStorage.getItem("login-userId")?"Posted By You": `Posted By ${e.name}`}</Text>
                        <Heading size='md' h="30px">{e.title}</Heading>
                        <Text h="2000px">{e.description}</Text>
                        <Text color='blue.600' fontSize='2xl' h="80px">₹ {e.price}</Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing='2' h="70px">
                        <Button flex='1' variant='solid' colorScheme="green" leftIcon={<StarIcon />}>Add to Wishlist</Button>
                        <Button variant='ghost' colorScheme='green' leftIcon={<EmailIcon />}>Chat With Seller</Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                })
            }

        </SimpleGrid>

    </Box>:<Box p="5%">
        <Heading m="auto">Please Login First</Heading>
    </Box>
}