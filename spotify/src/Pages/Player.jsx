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

import SpotifySlider from "./Slider";

import { AiOutlineHeart } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSkipBackward,IoMdSkipForward } from "react-icons/io";
import { BsRepeat, } from "react-icons/bs";
import { BiShuffle,BiLibrary } from "react-icons/bi";

const Player=()=>{
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

    return<>
    {/* <Flex position='sticky' w='100%' h='92px' bottom={0} bg='black' border='2px solid white'>

    </Flex> */}
    <Box position="fixed" bottom={0} left={0} width="100%" bg='black'  p={3} >
      <Flex alignItems="center" justify='space-between'>
        <Box display='flex'>
        <Image
                      // objectFit="cover"
                      w='20%'
                      // maxW={{ base: "1%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                      alt="hot hits"
                      // borderRadius={10}
                    />
                    <Stack p={1}>
                    <Text fontWeight="bold" color="white">Song Title</Text>
          <Text fontSize="sm" color="white">Artist Name</Text>
                    </Stack>
          <AiOutlineHeart color="green" bg='white'onClick={()=>{}} />
        </Box>
        <Stack>
        <Flex border='1px solid grey' align='center' justifyContent='space-evenly'>
          <BiShuffle color="white"/>
        < IoMdSkipBackward color="white"/>
     
     <IconButton
       aria-label="play-pause"
       icon={isPlaying ? <FaPause /> : <FaPlay />}
       onClick={handlePlayPause}
     />
    
     <IoMdSkipForward  color="white"/>
     <BsRepeat color="white"/>
        </Flex>
     
         <Flex  w='600px'>
         <Slider
        defaultValue={50}
        // value={volume}
        min={0}
        max={100}
        // onChange={handleVolumeChange}
        colorScheme="green"
        size="lg"
        ml={2}
       
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={3} />
      </Slider>
         </Flex>
         
        </Stack>
    
       
  
 
       
        <Flex>
        
        <BiLibrary color="white" boxSize={6}/>
        <SpotifySlider />
      </Flex>
      </Flex>
      
    </Box>
   
    </>
}

export default Player