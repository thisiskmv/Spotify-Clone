import React, { useState,useContext } from "react";
import {
  Disclosure ,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
  useDisclosure,
} from "@chakra-ui/react";
import HeadGrid from "./SimpleGrid";
import Footermain from "./Footermain";
import { FaPlay } from "react-icons/fa";
import { MyContext } from "../Components/context";
import DynamicGrid from "./playlistgrid";
import { useNavigate } from "react-router-dom";

const GridMain = () => {
  const [isHovered, setIsHovered] = useState(null);
  const { myState, toggle } = useContext(MyContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  let navigate =useNavigate();

  // console.log("from grid",myState);
 
  const handleOnChange = () => {
    toggle();
  };

  // console.log(isHovered);
  const handleMouseEnter = (value) => {
    setIsHovered(value);
    // console.log(value)
  };

  const handleMouseLeave = () => {
    setIsHovered();
  };
  return (
    <>
      <Flex bg='rgb(29,29,29)'>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size='custom' 
      >
        <ModalOverlay />
        <ModalContent bg='rgb(41,41,41)' p={10} maxW="810px" maxH="480px" >
         
          <ModalCloseButton color='white' m={0} />
          <ModalBody p={3} m={4} color='#373737'>
           
            <Flex spacing={6}>
             
            <Image
                    objectFit="cover"
                    w='50%'
                    src="https://i.scdn.co/image/ab67706f000000036caf8c414e0b49f1b5be3e91"
                    alt="hot hits"
                    borderRadius={15}
                    p={2}
                  />
                <Stack p={6} >
                  <Box  align="center"
      justify="center" >
                  <Heading as='b' color='white' size='lg' mb={4}>Start listening with a free Spotify account</Heading>                

                  </Box>
                
                    <VStack spacing={4} p={4}>
                    <Button onClick={()=>navigate('/signup')} alignContent='center' w='90%' color='black' borderRadius={30} p={4} bg='#1ed760'>Sign up for free</Button>
                  <Button onClick={()=>navigate('/login')} w='90%' color='white' _hover={{bg:"white",color:"black"}} borderRadius={30} p={4}  variant='outline' >Log in</Button>           
                  </VStack>
                  <Box  align="center"
      justify="center">
                    <Text  fontSize='sm' color='white'>Already have an Account?</Text>
                    <Text as='b'  fontSize='sm'>  Download App</Text>
                  </Box>
 </Stack>
            </Flex>
          </ModalBody>
        
        </ModalContent>
      </Modal>
      <Flex position='static'  h='100%'left={0}
           flexDir="column"
           w={myState ?'350px':'175px'}
      top={0}  bg='rgb(29,29,29)'
      display={myState ? 'none':''}
      ></Flex>
        <Box bg="rgb(29,29,29)">
          <HeadGrid />
         
          <Flex bg="rgb(29,29,29)" fontSize="2xl" mt='20px' as="b" ml={myState ? '240px': '20px'} p={3}>
            <Text color="white">Focus</Text>
          </Flex>
          <DynamicGrid/>

          <Grid templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" mr={'20px'}>
            <GridItem  w={myState ?'200px':'75px'} display={myState ? '':'none'} rowSpan={5} bg="tomato"  />
           <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={() => handleMouseEnter("11")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f000000030776a5b5a70f372747584c2b"
                      alt="hot hits"
                      borderRadius={10}
                    />
                    <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "11" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>

                <Text as="b" color="white">
                Punjabi 101
                </Text>
                <Text color="grey" fontSize="sm">
                Ultimate 101 Punjabi Hits with Sidhu Moose Wala
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={() => handleMouseEnter("12")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
              onClick={onOpen}
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706f000000036caf8c414e0b49f1b5be3e91"
                    alt="hot hits"
                    borderRadius={10}
                  />
                  <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "12" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                Bollywood R&B
                </Text>
                <Text color="grey" fontSize="sm">
                Hottest Bollywood R&B tunes!
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={()=>handleMouseEnter('13')}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            
            >
              <Stack spacing={3}>
                <Center>
                  <Box>

                 
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c"
                    alt="hot hits"
                    borderRadius={10}
                  />
                  <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "13" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                    </Box>
                </Center>
                <Text as="b" color="white">
                  Instrumental Study
                </Text>
                <Text color="grey" fontSize="sm">
                  Focus with soft study music in the...
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={()=>handleMouseEnter('14')}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc"
                    alt="hot hits"
                    borderRadius={10}
                  />
                  <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "14" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                    </Box>
                </Center>
                <Text as="b" color="white">
                  Focus Flow
                </Text>
                <Text color="grey" fontSize="sm">
                  Uptempo Instrumental hip hop beats.
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={()=>handleMouseEnter('15')}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706f00000002ba1149f135035bc23c4a7f25"
                    alt="hot hits"
                    borderRadius={10}
                  />
                  <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "15" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Relaxing Music
                </Text>
                <Text color="grey" fontSize="sm">
                  Gental instrumenta music to relax to
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={()=>handleMouseEnter('16')}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6"
                    alt="hot hits"
                    borderRadius={10}
                  />
                  <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "16" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Beats to think to
                </Text>
                <Text color="grey" fontSize="sm">
                  Focus with deep techno and tech house.
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Flex bg="rgb(29,29,29)" fontSize="2xl" as="b" ml={myState ? '240px': '20px'} p={3}>
            <Text color="white">Spotify Playlists</Text>
          </Flex>
          <Grid templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" mr={'20px'}>
            <GridItem   w={myState ?'200px':'75px'} display={myState ? '':'none'} rowSpan={5} bg="tomato" />
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
                onMouseEnter={() => handleMouseEnter("1")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f0000000383829f7cdd2443271b6a6ec2"
                      alt="hot hits"
                      borderRadius={10}
                      align="center"
                    />
                    <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "1" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>

                <Text as="b" color="white">
                  Todays Top Hits
                </Text>
                <Text color="grey" fontSize="sm">
                  Post Malone is on Top of the Hottest 50!
                </Text>
              </Stack>
            </GridItem>

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
                onMouseEnter={() => handleMouseEnter("2")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f0000000297037047894ce6c9d8e2efc2"
                      alt="hot hits"
                      borderRadius={10}
                    />
                   <Flex justifyContent='right'>
               
               <IconButton
               position="absolute"
               borderRadius={30}
               variant="ghost"
               aria-label="Play"
               color='black'
               bg='green'
               icon={<FaPlay />}
               size="lg"
               opacity={isHovered=='2' ? 1 : 0}
             transition="opacity 0.2s"
             transform="translate(-11px, -55px)"
             />
               </Flex>

                  </Box>
                </Center>

                <Text as="b" color="white">
                  RapCaviar
                </Text>
                <Text color="grey" fontSize="sm">
                  New Music from NLE Choppa, Ice Spice and...
                </Text>
              </Stack>
            </GridItem>

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
                onMouseEnter={() => handleMouseEnter("3")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1"
                      alt="hot hits"
                      borderRadius={10}
                    />
                   <Flex justifyContent='right'>
               
               <IconButton
               position="absolute"
               borderRadius={30}
               variant="ghost"
               aria-label="Play"
               color='black'
               bg='green'
               icon={<FaPlay />}
               size="lg"
               opacity={isHovered=='3' ? 1 : 0}
             transition="opacity 0.2s"
             transform="translate(-11px, -55px)"
             />
               </Flex>

                  </Box>
                </Center>
                <Text as="b" color="white">
                  All Out 2010s
                </Text>
                <Text color="grey" fontSize="sm">
                  The biggest song of 2010s
                </Text>
              </Stack>
            </GridItem>

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
                onMouseEnter={() => handleMouseEnter("4")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e"
                      alt="hot hits"
                      borderRadius={10}
                    />
                   <Flex justifyContent='right'>
               
               <IconButton
               position="absolute"
               borderRadius={30}
               variant="ghost"
               aria-label="Play"
               color='black'
               bg='green'
               icon={<FaPlay />}
               size="lg"
               opacity={isHovered=='4' ? 1 : 0}
             transition="opacity 0.2s"
             transform="translate(-11px, -55px)"
             />
               </Flex>

                  </Box>
                </Center>

                <Text as="b" color="white">
                  Rock Classics
                </Text>
                <Text color="grey" fontSize="sm">
                  Rock Legends & epic songs that continue to...
                </Text>
              </Stack>
            </GridItem>

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
                onMouseEnter={() => handleMouseEnter("5")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361"
                      alt="hot hits"
                      borderRadius={10}
                    />
                    <Flex justifyContent='right'>
               
               <IconButton
               position="absolute"
               borderRadius={30}
               variant="ghost"
               aria-label="Play"
               color='black'
               bg='green'
               icon={<FaPlay />}
               size="lg"
               opacity={isHovered=='5' ? 1 : 0}
             transition="opacity 0.2s"
             transform="translate(-11px, -55px)"
             />
               </Flex>

                  </Box>
                </Center>
                <Text as="b" color="white">
                  Chill Hits
                </Text>
                <Text color="grey" fontSize="sm">
                  Kick back and relax to the new and fresh hits of...
                </Text>
              </Stack>
            </GridItem>

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
                onMouseEnter={() => handleMouseEnter("6")}
                onMouseLeave={handleMouseLeave}
              >
                <Center>
                  <Box>
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002db32a17c1f5291b19317b62e"
                      alt="hot hits"
                      borderRadius={10}
                    />
                  <Flex justifyContent='right'>
               
               <IconButton
               position="absolute"
               borderRadius={30}
               variant="ghost"
               aria-label="Play"
               color='black'
               bg='green'
               icon={<FaPlay />}
               size="lg"
               opacity={isHovered=='6' ? 1 : 0}
             transition="opacity 0.2s"
             transform="translate(-11px, -55px)"
             />
               </Flex>

                  </Box>
                </Center>
                <Text as="b" color="white">
                  Mega Hit Mix
                </Text>
                <Text color="grey" fontSize="sm">
                  All time Mega Hit Mix around the globe
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Flex bg="rgb(29,29,29)" fontSize="2xl" as="b" ml={myState ? '240px': '20px'} p={3}>
            <Text color="white">Sound of India</Text>
          </Flex>
          <Grid  templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" mr={'20px'}>
            <GridItem   w={myState ?'200px':'75px'} display={myState ? '':'none'} rowSpan={5} bg="tomato" />
            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={() => handleMouseEnter("21")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706c0000da84d6c2d54c59e03d1a0511091c"
                    alt="hot hits"
                    borderRadius={10}
                  />
                   <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "21" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Sound of Delhi
                </Text>
                <Text color="grey" fontSize="sm">
                  the music that defines, unites and ...
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={() => handleMouseEnter("22")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706c0000da84f08995d9d0e8d1be1281bec9"
                    alt="hot hits"
                    borderRadius={10}
                  />
                   <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "22" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Sound of Bengaluru
                </Text>
                <Text color="grey" fontSize="sm">
                  The Music that defines, unites and..
                </Text>
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={3}
              onMouseEnter={() => handleMouseEnter("23")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3}>
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab67706c0000da84d14381db5ba21de72810e100"
                    alt="hot hits"
                    borderRadius={10}
                  
                  />
                   <Flex justifyContent="right">
                      <IconButton
                        position="absolute"
                        borderRadius={30}
                        variant="ghost"
                        aria-label="Play"
                        color="black"
                        bg="green"
                        icon={<FaPlay />}
                        size="lg"
                        opacity={isHovered == "23" ? 1 : 0}
                        transition="opacity 0.2s"
                        transform="translate(-11px, -55px)"
                      />
                    </Flex>
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Sound of Mumbai
                </Text>
                <Text color="grey" fontSize="sm">
                  The music that defines and unites...
                </Text>
              </Stack>
            </GridItem>
          </Grid>

          <Footermain />
        </Box>
      </Flex>
    </>
  );
};

export default GridMain;