import { Box,Card,CardBody, CardFooter,Image,Stack,Heading,Text,Button,useDisclosure, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,ButtonGroup } from "@chakra-ui/react";
import EditModal from "./EditModal";
import { useDispatch } from "react-redux";
import { deleteYourAdAction } from "../Redux/action";

export default function AdCard({title,image,price,description,id}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const { isOpe,  onClos } = useDisclosure()

    return <Box p="3%">
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' textAlign="left" h="400px" w="90%" m="auto" alignItems="center">
            <Box w="35%" h="400px"><Image  w="100%" h="400px" src={image}/></Box>
            <Stack w="75%">
                <CardBody alignItems="center">
                    <Heading size='md' h="50px">{title}</Heading>
                    <Text h="100px" mt="2%">{description}</Text>
                    <Text color='blue.600' fontSize='2xl' h="60px" mt="2%">₹ {price}</Text>
                </CardBody >

                <CardFooter gap="3%" h="50px" mt="2%">
                    <Button variant="outline" colorScheme='green' onClick={onOpen}> Edit</Button>
                    

                    <Popover returnFocusOnClose={false} isOpen={isOpe} onClose={onClos} placement='right' closeOnBlur={false}>
                        <PopoverTrigger>
                            <Button colorScheme='red'>Remove</Button>
                        </PopoverTrigger>
                        <PopoverContent>

                            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                                <PopoverArrow />
                            <PopoverCloseButton />

                            <PopoverBody>Are you sure you want to Delete?</PopoverBody>

                        <PopoverFooter display='flex' justifyContent='flex-end'>
                            <ButtonGroup size='sm'>
                                <Button colorScheme='red' onClick={()=>{
                                    dispatch(deleteYourAdAction(id))
                                }}>Delete</Button>
                            </ButtonGroup>

                        </PopoverFooter>
                        </PopoverContent>
                    </Popover>

                    
                </CardFooter>
            </Stack>
        </Card>
        {
            onOpen?<EditModal isOpen={isOpen} onClose={onClose} id={id}/>:false
        }
        
    </Box>
}