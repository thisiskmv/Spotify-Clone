import React,{ useState } from "react";
import Sidebar from "../Components/side";
import {
  Box,
  Avatar,
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
import GridMain from "./Grid";
import Player from "./Player";


const SpotifyHomepage = () => {
  const Loggedin=true;
 
  return (
    <>
     <Box>
        <Sidebar/>
        <Flex
          alignItems="center"
          justify="space-between"
          p="4"
          bg="rgb(16,16,16)"
        >
          <Box >
            {/* <Image
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
              height="8"
            /> */}
          </Box>
          <Box>
            <ButtonGroup spacing={2}>
           
            {/* <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
              <Button colorScheme="black" color="white" mr="2">
                Sign Up
              </Button>
              <Button p={6} borderRadius="20px">
                Log In
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
      <GridMain/>
      {/* <Player/> */}
    </>
  );
};

export { SpotifyHomepage };
