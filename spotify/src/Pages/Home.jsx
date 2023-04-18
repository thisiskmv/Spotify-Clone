import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";

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
            <ButtonGroup p={2}>
              <Button colorScheme="teal" variant="solid">
                Button
              </Button>
              <Button colorScheme="teal" variant="solid">
                Button
              </Button>
              <Button colorScheme="teal" variant="solid">
                Button
              </Button>
            </ButtonGroup>
            <ButtonGroup spacing={2}>
            <Button colorScheme="teal" color="white" mr="2">
              Sign Up
            </Button>
            <Button>Log In</Button>
            </ButtonGroup>
          
          </Box>
        </Flex>
        <Flex direction="column" p="8">
        <Box mb="8">
          <Text fontSize="6xl" fontWeight="bold" mb="4">Music for everyone.</Text>
          <Text fontSize="2xl" mb="4">Millions of songs. No credit card needed.</Text>
          <Input placeholder="Email address" w="xs" mb="4" />
          <Button colorScheme="green">Get Spotify Free</Button>
        </Box>
        <Box mb="8">
          <Text fontSize="4xl" fontWeight="bold" mb="4">What's new?</Text>
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
            <Flex/>
        </Box>
        </Flex>
      
      </Box>
    </>
  );
};

export { SpotifyHomepage };
