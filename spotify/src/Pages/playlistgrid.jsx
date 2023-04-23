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
    Spacer,
    IconButton,
    SimpleGrid,
    HStack,
  } from "@chakra-ui/react";
  import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";


const DynamicGrid=()=>{
    let play=useSelector((store)=>{
        return store.getPlaylists
    })
    // console.log(" from play", play);
    return<>
    <Box>

    </Box>
        </>
}

export default DynamicGrid;