import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
    Button,FormControl,FormLabel,Input,Box,Select} from '@chakra-ui/react'

import { useState } from 'react' 
import { updateYourAdAction } from '../Redux/action'   
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function EditModal({ isOpen, onClose,id}) {

    const [item,setItem] = useState({})
    const dispatch = useDispatch()

    
    
 
  
    return (
      <Box>
        <Modal
          
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Want To Update?</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              
  
              <FormControl mt={4}>
                <FormLabel>Product Title</FormLabel>
                <Input placeholder='Enter Product Title'name ="title" onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Image Url</FormLabel>
                <Input placeholder='Product Url' name ="image" onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Description</FormLabel>
                <Input placeholder='Provide Product Description' name ="description" onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Price (INR)</FormLabel>
                <Input placeholder='Your Expected Price' name ="price" onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Product Category</FormLabel>
                <Select placeholder='Select Category' name ="category" onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}>
                    <option value='Household'>Household</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Other'>Other</option>
                </Select>
              </FormControl>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='green' mr={3} onClick={()=>{
                dispatch(updateYourAdAction(item,id))
                setTimeout(() => {
                    
                }, 3000);
                onClose()
              }} >Upadate</Button>
              <Button colorScheme='red' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }