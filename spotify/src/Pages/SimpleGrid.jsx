import { useState, useEffect, useContext } from "react";
import {useSelector} from 'react-redux';
import store from "../Redux/store";
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
  SimpleGrid
} from "@chakra-ui/react";
import { MyContext } from "../Components/context";

const HeadGrid=()=>{
  const { myState, toggle } = useContext(MyContext);

  let data=useSelector((store)=>{
    return store.getPlaylists
    
  })
  
  // console.log("this data ",data);
  const numRows = 2;
  const numCols = 3;

  // Slice the array to only include the first (numRows * numCols) playlists
  // const limitedPlaylists = playlists.slice(0, numRows * numCols);
   
   
   return <>
 <Box w='200px'>

</Box>
<Flex bg="rgb(29,29,29)" fontSize="2xl" as="b" ml={myState ? '240px': '20px'} p={3}>

            <Text color="white">Good Morning</Text>
          </Flex>
        
    </>
}

export default HeadGrid
