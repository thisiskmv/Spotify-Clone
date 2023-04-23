import React, { useState, useContext } from "react";
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
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import GridMain from "./Grid";
import { MyContext } from "../Components/context";
import Player from "./Player";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const SpotifyHomepage = () => {
  const Loggedin = true;
  const { myState, toggle } = useContext(MyContext);

  const handleOnChange = () => {
    toggle();
  };

  return (
    <>
      <Box>
        <Sidebar />
        <Flex
          alignItems="center"
          // justify="space-between"
          p="4"
          bg="rgb(16,16,16)"
          position="sticky"
          top="0"
        >
          <Box w={myState ? "200px" : "75px"}></Box>
          <ButtonGroup>
            <IconButton
              borderRadius={50}
              bg="rgb(10,10,10)"
              _hover={{ bg: "black", color: "white" }}
              icon={
                <AiOutlineLeft
                  color="grey"
                  size={20}
                  _hover={{ bg: "black", color: "white" }}
                />
              }
            />
            <IconButton
              borderRadius={50}
              bg="rgb(10,10,10)"
              _hover={{ bg: "black", color: "white" }}
              icon={
                <AiOutlineRight
                  color="grey"
                  size={20}
                  _hover={{ bg: "black", color: "white" }}
                />
              }
            />
          </ButtonGroup>

          <Spacer />
          <Box left={0}>
            {Loggedin ? (
              <Menu color="white" bg="rgba(40,40,40,255)" mr='10px'>
                <MenuButton>
                  <Avatar
                    size="md"
                    name="User"
                    src="https://bit.ly/dan-abramov"
                  />
                </MenuButton>
                <MenuList
                  bg="rgba(40,40,40,255)"
                  color="white"
                  border="0px solid grey"
                >
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Account
                  </MenuItem>
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Profile
                  </MenuItem>
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Mark as Draft
                  </MenuItem>
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Setting
                  </MenuItem>
                  <Divider />
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <ButtonGroup spacing={2}>
                <Button colorScheme="black" color="white" mr="2">
                  Sign Up
                </Button>
                <Button p={6} borderRadius="20px">
                  Log In
                </Button>
              </ButtonGroup>
            )}
          </Box>
        </Flex>
      </Box>
      <GridMain />
      {/* <Player/> */}
    </>
  );
};

export { SpotifyHomepage };
