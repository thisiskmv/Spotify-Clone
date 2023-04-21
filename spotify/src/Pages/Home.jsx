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
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
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
          { Loggedin ?
          <Menu  color='white' bg='rgba(40,40,40,255)'>
          <MenuButton  >
          <Avatar size='md' name='User' src='https://bit.ly/dan-abramov' />
          </MenuButton>
          <MenuList bg='rgba(40,40,40,255)' color="white" border='0px solid grey'>
            <MenuItem color='white'bg='rgba(40,40,40,255)' >Account</MenuItem>
            <MenuItem color='white' bg='rgba(40,40,40,255)'>Profile</MenuItem>
            <MenuItem color='white' bg='rgba(40,40,40,255)'>Mark as Draft</MenuItem>
            <MenuItem color='white' bg='rgba(40,40,40,255)'>Setting</MenuItem>
            <Divider/>
            <MenuItem color='white' bg='rgba(40,40,40,255)'>Log Out</MenuItem>
          </MenuList>
        </Menu>
          
           :
           <ButtonGroup spacing={2}>
              <Button colorScheme="black" color="white" mr="2">
                Sign Up
              </Button>
              <Button p={6} borderRadius="20px">
                Log In
              </Button>
            </ButtonGroup>}

            
          </Box>
        </Flex>
      </Box>
      <GridMain/>
      {/* <Player/> */}
    </>
  );
};

export { SpotifyHomepage };
