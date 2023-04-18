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
      </Box>
    </>
  );
};

export { SpotifyHomepage };
