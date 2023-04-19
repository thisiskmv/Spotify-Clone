import React from 'react';

import {Img,Center,Box,Button, Divider,Input,Select,Text,Flex,Checkbox,RadioGroup,Stack,Radio,Spacer,Heading, Container } from "@chakra-ui/react"
import {FaFacebook} from "react-icons/fa"
import {AiFillApple} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import "./Signup.css"
function SignUp(props) {
    return (
        <div >
        <Box  pb="1.5rem">
        <Center >   
        <Img w="9rem" mt={10}   src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'></Img>
        </Center> 
        </Box> 
        <div style={{margin:"auto",marginBottom:"3rem",width:"30rem"}}>
        <Center><Heading fontSize="1.9rem" mt="1rem" mb="3rem">Sign up for free to start listening.</Heading></Center>
       <Center>
        <Box  mt="1rem">
        <Button bg="rgb(64,90,147)" w="27rem" p={6} borderRadius="5rem" colorScheme='facebook' leftIcon={<FaFacebook />}>
        CONTINUE WITH FACEBOOK
        </Button>
        </Box>
        </Center>
        <Center>
        <Box mb="1rem" mt="1rem">
        <Button bg="rgb(255,255,255)" color="black" p={6} border="1px solid grey" w="27rem" borderRadius="5rem" colorScheme='facebook' leftIcon={<FcGoogle />}>
        CONTINUE WITH GOOGLE
        </Button>
        </Box>
        </Center>
        

        
        <Center>
        <p >OR</p>
        </Center>
        


       <div>
        <p >What's your email?</p>
        <Input w="30rem" p="1.6rem" border="1px solid grey" focusBorderColor='black'
        placeholder='Email Address or Username'
        size='sm'
      />
      <Text mb='8px' mt="0.8rem" >Create a password</Text>
        <Input w="30rem" p="1.6rem" border="1px solid grey" focusBorderColor='black'
        placeholder='Create a Password' type='password'
        size='sm'

      />
      <Text mb='8px' mt="0.8rem" >What should we call you?</Text>
        <Input w="30rem" p="1.6rem" border="1px solid grey" focusBorderColor='black'
        placeholder='Enter profile a name' type='password'
        size='sm'

      />
      </div>
       <Text mb='8px' mt="0.8rem">This appears on your profile.</Text>
      <Text mb='8px' mt="0.8rem">What's your date of birth?</Text>

      <Box>
      <Flex flexDirection="spaceBetween">
      <Input w="8rem" p="1.2rem" mr="1rem" 
        placeholder='YYYY'
        size='sm'
      />
      <Select placeholder='Select option' w="12rem" ml="1rem" >
        <option value='option1'>January</option>
        <option value='option2'>Fabuary</option>
        <option value='option3'>March</option>
        <option value='option1'>April</option>
        <option value='option2'>May</option>
        <option value='option3'>Jun</option>
        <option value='option1'>July</option>
        <option value='option2'>August</option>
        <option value='option3'>September</option>
        <option value='option1'>Octumber</option>
        <option value='option2'>November</option>
        <option value='option3'>December</option>
      </Select>
      <Input w="6rem" p="1.2rem" ml="2rem"
        placeholder='DD'
        size='sm'
      />
      </Flex>
      </Box>

      <Text mb='8px' mt="0.8rem">
What's your gender?</Text>

<RadioGroup >
      <Stack direction='row'>
        <Radio >Male</Radio>
        <Radio >Female</Radio>
        <Radio>Non binary</Radio>
        <Radio>Others</Radio>
        <Radio>Prefer not to say</Radio>
      </Stack>
    </RadioGroup>

    <Box>
    <Checkbox >I would prefer not to receive marketing messages from Spotify</Checkbox>
    </Box>
    <Box>
    <Checkbox >Share my registration data with Spotify's content providers for marketing purposes.</Checkbox>
    </Box>
   
    <Center>
        <Box><p>By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.</p></Box></Center>
        <Center>
       <Box> <p>To learn more about how Spotify collects, uses, shares and protects your personal data,please see Spotify's Privacy Policy</p></Box>
       </Center>
      
      <Center >


      <Flex >

  

        <Button colorScheme='rgb(30,215,96)' color="black" bg="rgb(30,215,96)" fontSize="1rem" mt="1.5rem" p="1.7rem" borderRadius="2rem" w="9rem" size='xs'>
         SignUp
        </Button>

        
        
      </Flex>
      
      </Center>
<Center>
<h1 style={{marginTop:"1.2rem",marginBottom:"1.2rem"}}>have an account? <span style={{color:"blue"}}>Login</span></h1>
</Center>
      

      </div>

      

        
        
        </div>
    );
}

export default SignUp;