import React,{ useState, useContext } from "react";
import { MyContext } from "../Components/context";
import {
  Center,
  Card,
  Box,
  Flex,
  Image,
  Button,
  Input,
  Stack,
  ButtonGroup,
  Divider,
  Text,
  VStack,
  Grid,
  GridItem,
  CardBody,
  CardFooter,
  Heading,
    Icon,
    Spacer,
    
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footermain=()=>{
    const { myState, toggle } = useContext(MyContext);
    return <>
   
    <Flex p={2} bg='rgb(22,22,22)'  h='200px' gap={3} align=''>
    <Box  w={myState ? "200px" : "75px"}
    //  display={myState ? '':'none'}
     >

    </Box>
    
    <Stack  align="flex-start" p={3}>
        <Text as='b' color='white'>
            Company
        </Text>
        <Text color='grey'>About</Text>
        <Text color='grey'>Jobs</Text>
        <Text color='grey'>For the Record</Text>
    </Stack>
    <Stack  align="flex-start" p={3}>
        <Text as='b' color='white'>
            Communites
        </Text>
        <Text color='grey'>For Artist</Text>
        <Text color='grey'>Developers</Text>
        <Text color='grey'>Advertising</Text>
        <Text color='grey'>Investors</Text>
        <Text color='grey'>Vendors</Text>
    </Stack>
    <Stack  align="flex-start" p={3}>
        <Text as='b' color='white'>
            Useful Links
        </Text>
        <Text color='grey'>Support</Text>
        <Text color='grey'>Free Mobile App</Text>
       
    </Stack>
    <Spacer/>

    <Box p={3} mr={3} >
        <Icon as={FaFacebook} color='white' boxSize={8} p={1} />
      <Icon as={FaInstagram} color='white' boxSize={8} p={1} />
      <Icon as={FaTwitter}  color='white'boxSize={8} p={1}/>

    </Box>
 
    </Flex>
    <Flex h='50px' bg='rgb(22,22,22)'>

  {/* <Divider orientation='horizontal' /> */}
    </Flex>
  
   
    
    </>
}

export default Footermain;