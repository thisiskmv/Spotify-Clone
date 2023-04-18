import React from "react";
import Sidebar from "../Components/side";
import {
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
} from "@chakra-ui/react";
// import { FaHome, FaSearch, FaHeart, FaMusic } from "react-icons/fa";

const SpotifyHomepage = () => {
  return (
    <>
     
      <Box>
        <Flex
          alignItems="center"
          justify="space-between"
          p="4"
          borderBottom="1px"
          borderColor="gray.200"
          bg="rgb(17,17,17)"
        >
          <Box>
            <Image
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
              height="8"
            />
          </Box>
          <Box>
            <ButtonGroup spacing={2}>
              <Button colorScheme="black" color="white" mr="2">
                Sign Up
              </Button>
              <Button p={6} borderRadius="20px">
                Log In
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
        {/* <Box bg="gray.800" color="white" w="250px" h="100vh" p="4">
    <VStack align='stretch' spacing={4} direction='row'   bg="rgb(17,17,17)">
        <Text color='white'>Home</Text>
        <Text  color='white'> Home</Text>
        <Text  color='white'>Home</Text>
        

    </VStack>
    </Box> */}
        <VStack  bg='blue'>
        <Text  color='white'> Home</Text>
        <Box w='40px' h='40px' bg='yellow.200'>
    1
  </Box>
  <Box w='40px' h='40px' bg='tomato'>
    2
  </Box>
  <Box w='40px' h='40px' bg='pink.100'>
    3
  </Box>
        </VStack>
       
        <Flex direction="column" p="8">
        {/* <Sidebar/> */}
       
        
          <Box mb="5" bg='teal'>
            <Text fontSize="6xl" fontWeight="bold" mb="4">
              Music for everyone.
            </Text>
            <Text fontSize="2xl" mb="4">
              Millions of songs. No credit card needed.
            </Text>
            <Input placeholder="Email address" w="xs" mb="4" />
            <Button colorScheme="green">Get Spotify Free</Button>
          </Box>
          <Box mb="8">
            <Text fontSize="4xl" fontWeight="bold" mb="4">
              What's new?
            </Text>
            {/* <Stack direction="row" spacing="4">
            <Box borderRadius="lg" boxShadow="md" overflow="hidden">
              <Image src="https://i.scdn.co/image/ab67706c0000bebbf07af3c3d4a2c99b10f8e977" width="64" height="64" />
              <Text fontWeight="bold" mt="2">New Music Friday</Text>
              <Text fontSize="sm">Playlist</Text>
            </Box>
            <Box borderRadius="lg" boxShadow="md" overflow="hidden">
              <Image src="https://i.scdn.co/image/ab67706c0000bebbe9f9f48e7a03db04a1c8f0e6" width="64" height="64" />
              <Text fontWeight="bold" mt="2">The Joe Rogan Experience</Text>
              <Text fontSize="sm">Podcast</Text>
            </Box>
            <Box borderRadius="lg" boxShadow="md" overflow="hidden">
              <Image src="https://i.scdn.co/image/ab67706c0000bebb1f11d0835c5f5d5ba5a24f7c" width="64" height="64" />
              <Text fontWeight="bold" mt="2">Billie Eilish: The World's a Little Blurry</Text>
              <Text fontSize="sm">Album</Text>
            </Box>
          </Stack> */}
            <Flex />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export { SpotifyHomepage };
