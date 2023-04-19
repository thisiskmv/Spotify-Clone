import React from 'react';
import {Img,Center,Box,Button, Divider,Input,Text,Flex,Checkbox,Spacer, Container } from "@chakra-ui/react"
import {FaFacebook} from "react-icons/fa"
import {AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import "./Login.css"
function Login(props) {
    return (
        <div >
        <Box borderBottom="0.1px solid grey" w="100%" pb="1.5rem">
        <Center >   
        <Img w="9rem" mt={6}   src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'></Img>
        </Center> 
        </Box> 
        <div style={{margin:"auto",marginBottom:"5rem",width:"30rem"}}>
        <Center><p style={{marginTop:"15px"}}>To continue, log in to Spotify.</p></Center>

        <Box mb="1rem" mt="1rem">
        <Button bg="rgb(24,119,242)" w="30rem" p={6} borderRadius="5rem" colorScheme='facebook' leftIcon={<FaFacebook />}>
        CONTINUE WITH FACEBOOK
        </Button>
        </Box>
        <Box mb="1rem" mt="1rem">
        <Button bg="rgb(25,25,25)" w="30rem" p={6} borderRadius="5rem" colorScheme='facebook' leftIcon={<AiFillApple />}>
        CONTINUE WITH APPLE
        </Button>
        </Box>
        <Box mb="1rem" mt="1rem">
        <Button bg="rgb(255,255,255)" color="black" p={6} border="1px solid grey" w="30rem" borderRadius="5rem" colorScheme='facebook' leftIcon={<FcGoogle />}>
        CONTINUE WITH GOOGLE
        </Button>
        </Box>
        <Box mb="1rem" mt="1rem">
        <Button bg="rgb(255,255,255)" color="black" p={6} border="1px solid grey" w="30rem" borderRadius="5rem" >
        CONTINUE WITH PHONE NUMBER
        </Button>
        </Box>

        
        <p >OR</p>
        



        <Text mb='8px' ml="-18rem">Email address or username</Text>
        <Input w="30rem" p="1.6rem" border="1px solid grey" focusBorderColor='black'
        placeholder='Email Address or Username'
        size='sm'
      />
      <Text mb='8px' mt="0.8rem" ml="-26rem">Password</Text>
        <Input w="30rem" p="1.6rem" border="1px solid grey" focusBorderColor='black'
        placeholder='Password' type='password'
        size='sm'

      />
      <Text mb='8px' mt="0.8rem" ml="-20rem">Forgot your password?</Text>

      <Center >
      <Flex >

        <Box p="2" ml=""><Checkbox defaultChecked>Remember me</Checkbox></Box>
  
        <Box p="2" ml="13rem" >
        <Button colorScheme='rgb(30,215,96)' color="black" bg="rgb(30,215,96)" fontSize="1rem" p="1.4rem" borderRadius="2rem" w="7rem" size='xs'>
         Login
        </Button>
        </Box>
        
        
      </Flex>
      </Center>
      <hr style={{ borderBottom:"1px solid grey",marginTop:"2rem"}} />

      <h1 style={{marginTop:"1.2rem",marginBottom:"1.2rem"}}>Don't have an account?</h1>

      <Box mb="1rem" mt="1rem">
        <Button bg="rgb(255,255,255)" color="black" p={6} border="1px solid grey" w="30rem" borderRadius="5rem" >
        SIGNUP FOR SPOTIFY
        </Button>
        </Box>
      </div>

      

        
        
        </div>

    );
}

export default Login;