import React,{ useState } from "react";
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
import GridMain from "./Grid";


const SpotifyHomepage = () => {
 
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
    </>
  );
};

export { SpotifyHomepage };
