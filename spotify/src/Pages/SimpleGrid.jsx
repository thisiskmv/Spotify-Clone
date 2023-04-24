import { useState, useEffect, useContext } from "react";

import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
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
  Spacer,
  IconButton,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { MyContext } from "../Components/context";
import { SlHeart } from "react-icons/sl";
import {useDispatch} from 'react-redux'
import thunkActionCreator from "../Redux/thunk";
import { useNavigate } from "react-router-dom";


const HeadGrid = () => {
  const [isHovered, setIsHovered] = useState(null);
  const { myState, toggle } = useContext(MyContext);
  let dispatch =useDispatch();
  let navigate =useNavigate()
  let token =JSON.parse(localStorage.getItem("spotify_token"))

  const Loggedin = useSelector((store)=>store.isAuth);

  // useEffect(()=>{
  
  // },[])
  
  let data=useSelector((store)=>{
    return store.getPlaylists
})

const play=data.slice(0, 6)

console.log("=====playdata==>",data)
  // data for playlist
 
console.log("for playlist",play)
console.log("for testing", play)

  
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const handleMouseEnter = (value) => {
    setIsHovered(value);
    // console.log(value)
  };

  const handleMouseLeave = () => {
    setIsHovered();
  };

  const handleClick =(id)=>{
      dispatch(thunkActionCreator("detailsPlaylist",token.token,null,null,id))
      navigate("/playlist")
  }

 
  const numRows = 2;
  const numCols = 3;

  return (
    <>
    {
      Loggedin ? (
        <>
        <Flex
    bg="rgb(29,29,29)"
    fontSize="2xl"
    as="b"
    ml={myState ? "240px" : "20px"}
    p={3}
  >
    <Text color="white">{greeting}</Text>
       </Flex>

 <HStack  mr="30px">
   
   <Box
     position="static"
     w={myState ? "300px" : "75px"}
     display={myState ? '':'none'}
     h="20px"
     
   ></Box>
   
   <SimpleGrid w="100%" columns={3} spacing={4} >
     <Box
       w="100%"
       height=" 100px"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("11")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
       >
         <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}
           src="https://i.scdn.co/image/ab6761610000e5eb33a4a7e4a1bf0aa584bbb02f"
           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
         <Text ml="20px" as="b" color="white">
           Peaceful Guitar
         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "11" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
     <Box
       w="100%"
       height=" 100px"
       // bg="rgb(22,22,22)"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("12")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
        
         m={0}
       >
        <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}
           src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"
           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
    
         
         <Text ml="20px" as="b" color="white">
          Liked Songs 
         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "12" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
     <Box
       w="100%"
       height=" 100px"
       // bg="rgb(22,22,22)"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("3")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
       >
         <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}
           src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
         <Text ml="20px" as="b" color="white">
          Peaceful Piano
         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "3" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
     <Box
       w="100%"
       height=" 100px"
       // bg="rgb(22,22,22)"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("2")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
       >
         <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}
           src="https://i.scdn.co/image/ab67706f00000002698894ab14938696261d9cd5"
           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
         <Text ml="20px" as="b" color="white">
           Hots Hits Hindi
         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "2" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
     <Box
       w="100%"
       height=" 100px"
       // bg="rgb(22,22,22)"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("1")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
       >
         <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}
           src="https://play-lh.googleusercontent.com/cLVnEMwBmZE_utXIAPJ4w6nRjviWTKplMxzyiUFrUTEnZMQ-CkHSBAi81NJFxoZc4yI"
           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
         <Text ml="20px" as="b" color="white">
           Classical
         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "1" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
     <Box
       w="100%"
       height=" 100px"
       // bg="rgb(22,22,22)"
       bg="rgb(44,45,48)"
       boxShadow="sm"
       borderRadius={10}
       colSpan={2}
       p={3}
       onMouseEnter={() => handleMouseEnter("0")}
       onMouseLeave={handleMouseLeave}
       _hover={{
         bg: "rgba(67,69,71,255)",
         boxShadow: "dark-lg",
       }}
     >
       <Box
         display="flex"
         alignItems="center"
         justifyContent="space-between"
       >
         <Image
           objectFit="cover"
           // maxW={{ base: "80%", sm: "200px" }}

           src="https://i.scdn.co/image/ab67616d0000b2735ca12e898fac5a6161fbf1df"

           alt="hot hits"
           borderRadius={10}
           // h='20%'
           w="15%"
         />
         <Text ml="20px" as="b" color="white">

           Gym Playlist

         </Text>
         <Spacer />
         <Flex justifyContent="right">
           <IconButton
             // position="absolute"
             borderRadius={30}
             variant="ghost"
             aria-label="Play"
             color="black"
             bg="green"
             icon={<FaPlay />}
             size="lg"
             opacity={isHovered == "0" ? 1 : 0}
             transition="opacity 0.2s"
             // transform="translate(-11px, -55px)"
           />
         </Flex>
       </Box>
     </Box>
   </SimpleGrid>
 </HStack>
 <Flex bg="rgb(29,29,29)" fontSize="2xl" mt='20px' as="b" ml={myState ? '240px': '20px'} p={3}>
            <Text color="white">Made for You</Text>
          </Flex>
 <Grid  templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" mr={'20px'}>
            <GridItem   w={myState ?'200px':'75px'} display={myState ? '':'none'} rowSpan={5} bg="tomato" />
            
            {

 play.map(item=>(
 
  <GridItem
  w="100%"
  bg="rgb(22,22,22)"
  boxShadow="sm"
  borderRadius={10}
  p={3}
  _hover={{
    bg:'rgba(40,40,40,255)',
    boxShadow:'dark-lg'
  }}
 >
     <Stack
                spacing={3}
                // bg={useColorModeValue('gray.100', 'rgb(22,22,22)')}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                  {
            item.images.map(imag=>(
              <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={imag.url}
              alt="hot hits"
              borderRadius={10}
              align="center"
            />
            ))
          }
           <Flex justifyContent="right">
                      <IconButton
                        onClick={()=>{handleClick(item.id)}}
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == item.id ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>

                  </Box>
                </Center>
                <Text as="b" color="white">
                  {item.name}
                </Text>
                <Text color="grey" fontSize="sm">
                  {item.description}
                </Text>
              </Stack>
 
 </GridItem>
))
            }
          
            </Grid>
 
  </>
      ):(
     <></>

      )
    }

      
    </>
  );
};

export default HeadGrid;
