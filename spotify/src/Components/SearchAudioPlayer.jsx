import React from 'react'



import {useState,useEffect,useRef} from "react";

import { BiVolumeFull,BiVolumeMute } from "react-icons/bi";
import {
  MdOutlinePlayCircleFilled,
  MdSkipPrevious,
  MdSkipNext,
  MdPauseCircleFilled,
} from "react-icons/md";
import {
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Heading,
  ButtonGroup,
  Icon,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useToast
} from "@chakra-ui/react";
import {useSelector} from 'react-redux'

const SearchAudioPlayer = ({items,trackIndex,setTrackIndex}) => {

    console.log("from search audio player===",items,trackIndex)
    
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const[volume,setVolume] =useState(30);
  
    let isAuth =useSelector((store)=>store.isAuth);
    let toast = useToast();
  
    // Refs
    

    const audioRef = useRef(new Audio(items[trackIndex].preview_url));
    
    const intervalRef = useRef();
    const isReady = useRef(false);
  
    // Destructure for conciseness
    const { duration } = audioRef.current;
  
    
  
    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
  
      intervalRef.current = setInterval(() => {
        if (audioRef.current.ended) {
          toNextTrack();
        } else {
          setTrackProgress(audioRef.current.currentTime);
        }
      }, [1000]);
    };
  
    const onScrub = (value) => {
      // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      
      setTrackProgress(audioRef.current.currentTime);
    };
  
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    };
  
    const toPrevTrack = () => {
      if (trackIndex - 1 < 0) {
        setTrackIndex(items.length - 1);
      } else {
        setTrackIndex(trackIndex - 1);
      }
    };
  
    const toNextTrack = () => {
      if (trackIndex < items.length - 1) {
        setTrackIndex(trackIndex + 1);
      } else {
        setTrackIndex(0);
      }
    };
  
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);
  
    // Handles cleanup and setup when changing tracks
    useEffect(() => {
      audioRef.current.pause();
  
      audioRef.current = new Audio(items[trackIndex].preview_url);
      setTrackProgress(audioRef.current.currentTime);
  
      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        // Set the isReady ref as true for the next pass
        isReady.current = true;
      }
    }, [trackIndex]);
  
    useEffect(() => {
      // Pause and clean up on unmount
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
        setIsPlaying(false)
      };
    }, [items]);


    // volume controller

    useEffect(()=>{
        if(audioRef.current){
          audioRef.current.volume =(volume/100);
        }
    },[volume,trackIndex])


  return (
    <div>
      <Box
        position={"fixed"}
        bottom={"0"}
        bg={"#181818"}
        height={"90px"}
        width={"100%"}
        border={"3px solid "}
        p={"0 16px"}
        zIndex={'10'}
      >
        <Flex
          color={"white"}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box flex={"1"} className="leftContainer">
            <Flex alignItems={"center"}>
              <Image
                src={items[trackIndex].album.images[2].url}
                w={"56px"}
                h={"56px"}
                mr={"16px"}
              />
              <Stack direction={"column"} spacing={"1"} textAlign={"left"}>
                <Heading
                  as={"h2"}
                  fontSize={"sm"}
                  noOfLines={1}
                  _hover={{ textDecoration: "underline" }}
                >
                  {items[trackIndex].name}
                </Heading>
                <Text
                  fontSize={"xs"}
                  noOfLines={1}
                  _hover={{ textDecoration: "underline" }}
                >
                  {items[trackIndex].artists
                    .map((e) => e.name)
                    .join(", ")}
                </Text>
              </Stack>
            </Flex>
          </Box>
          <Box flex={"1"} className="midContainer">
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex className="playerControls-btn">
                <ButtonGroup color={"black"} gap={"10px"} alignItems={"center"}>
                  <Icon
                    as={MdSkipPrevious}
                    color={"gray"}
                    boxSize={"32px"}
                    _hover={{ color: "white" }}
                    onClick={()=>{ if(isAuth){
                       
                      toPrevTrack()
                      }else{
                        toast({
                                title: "Can't play without login/register" ,
                                description: "Please login first",
                                status: "error",
                                duration: 2000,
                              });
                      }}}
                  />
                  <Icon
                    as={
                      isPlaying
                        ? MdPauseCircleFilled
                        : MdOutlinePlayCircleFilled
                    }
                    color={"white"}
                    boxSize={"42px"}
                    _hover={{ transform: "scale(1.08)" }}
                    onClick={() =>{
                      if(isAuth){
                       setIsPlaying(!isPlaying)
                       
                      }else{
                        toast({
                                title: "Can't play without login/register" ,
                                description: "Please login first",
                                status: "error",
                                duration: 2000,
                              });
                      }
                      
                    }}
                  />
                  <Icon
                    as={MdSkipNext}
                    color={"gray"}
                    boxSize={"32px"}
                    _hover={{ color: "white" }}
                    onClick={()=>{ if(isAuth){
                      toNextTrack()
                      }else{
                        toast({
                                title: "Can't play without login/register" ,
                                description: "Please login first",
                                status: "error",
                                duration: 2000,
                              });
                      }}}
                  />
                </ButtonGroup>
              </Flex>
              <Flex
                w={"100%"}
                gap={"8px"}
                justify={"space-between"}
                alignItems={"center"}
                className="progressBar"
                columnGap={'5px'}
              >
                <Box fontSize={'0.8rem'} px={'5px'}>{Math.floor(trackProgress/60) < 10 ? `0${Math.floor(trackProgress/60)}` :  `${Math.floor(trackProgress/60)}`}:{Math.floor(trackProgress%60) < 10 ? `0${Math.floor(trackProgress%60)}` :  `${Math.floor(trackProgress%60)}`}</Box>

                <Box width={"100%"}>
                  <Slider
                    aria-label="slider-ex-1"
                    size={'md'}
                    colorScheme="green"
                    defaultValue={0}
                    value={audioRef.current.ended ? 0 : trackProgress}
                    max={duration}
                    onChange={(value) => onScrub(value)}
                    onChangeEnd={()=>onScrubEnd()}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb    />
                  </Slider>
                </Box>
                <Box fontSize={'0.8rem'} px={'5px'}>{duration ? `${Math.floor(duration/60)}:${Math.floor(duration%60)}` : "0:00"}</Box>
              </Flex>
            </Flex>
          </Box>
          <Box flex={"1"} className="rightContainer" >
            <Flex justify={"end"} alignItems={"center"} pr={"20px"}  >
              <Box flex={'3'} fontSize={'2rem'} textAlign={'end'}><Icon as={volume ==0 ? BiVolumeMute : BiVolumeFull} boxSize={"24px"}  textAlign={"right"}/></Box>
              <Box flex={'2'}>
              <Slider 
               
                aria-label="slider-ex-1"
                colorScheme="green"
                // defaultValue={30}
                value={volume}
                
                max={'100'}
                onChange={(val)=>setVolume(val)}
                  
                width={"90%"}
              >
                <SliderTrack boxSize={'4px'}>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={'10px'} />
              </Slider>
              </Box>
              <Box flex={'1'}>
              <Text fontSize={'0.8rem'} textAlign={'left'} >{volume}%</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default SearchAudioPlayer;
