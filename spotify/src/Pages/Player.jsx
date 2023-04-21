import React, { useState,useContext } from "react";
import {
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
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
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";
import SpotifySlider from "./Slider";

import { IoMdSkipBackward,IoMdSkipForward } from "react-icons/io";
import { BsRepeat, } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";

const Player=()=>{
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

    return<>
    {/* <Flex position='sticky' w='100%' h='92px' bottom={0} bg='black' border='2px solid white'>

    </Flex> */}
    <Box position="fixed" bottom={0} left={0} width="100%" bg='white'  p={4}>
      <Flex alignItems="center" justify='space-between'>
        <Box>
          <Text fontWeight="bold">Song Title</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Stack>
        <Flex border='1px solid grey'>
          <BiShuffle/>
        < IoMdSkipBackward/>
     
     <IconButton
       aria-label="play-pause"
       icon={isPlaying ? <FaPause /> : <FaPlay />}
       onClick={handlePlayPause}
     />
    
     <IoMdSkipForward />
     <BsRepeat/>
        </Flex>
     
          <SpotifySlider/>
        </Stack>

       
  
 
       
        <Box>
        <Text>Content</Text>
      </Box>
      </Flex>
      
    </Box>
   
    </>
}

export default Player