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

const HeadGrid = () => {
  const [isHovered, setIsHovered] = useState(null);
  const { myState, toggle } = useContext(MyContext);

  let data = useSelector((store) => {
    return store.getPlaylists;
  });

  const handleMouseEnter = (value) => {
    setIsHovered(value);
    // console.log(value)
  };

  const handleMouseLeave = () => {
    setIsHovered();
  };

  // console.log("this data ",data);
  const numRows = 2;
  const numCols = 3;

  return (
    <>
      <Flex
        bg="rgb(29,29,29)"
        fontSize="2xl"
        as="b"
        ml={myState ? "240px" : "20px"}
        p={3}
      >
        <Text color="white">Good Morning</Text>
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
                src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                alt="hot hits"
                borderRadius={10}
                // h='20%'
                w="15%"
              />
              <Text ml="20px" as="b" color="white">
                Playlist One
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
                Playlist One
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
                Playlist One
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
                src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                alt="hot hits"
                borderRadius={10}
                // h='20%'
                w="15%"
              />
              <Text ml="20px" as="b" color="white">
                Playlist One
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
                src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                alt="hot hits"
                borderRadius={10}
                // h='20%'
                w="15%"
              />
              <Text ml="20px" as="b" color="white">
                Playlist One
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
                src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                alt="hot hits"
                borderRadius={10}
                // h='20%'
                w="15%"
              />
              <Text ml="20px" as="b" color="white">
                Playlist One
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

      {/* <Grid templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" >
            <GridItem  w={myState ?'200px':'75px'} display={myState ? '':'none'} rowSpan={5} bg="tomato"  />
           <GridItem
              w="100%"
              // bg="rgb(22,22,22)"
              bg='rgb(44,45,48)'
              boxShadow="sm"
              borderRadius={10}
              colSpan={2}
              p={3}
             
              onMouseEnter={() => handleMouseEnter("11")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(67,69,71,255)',
                boxShadow:'dark-lg'
              }}
            >           
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Image
                      objectFit="cover"
                      // maxW={{ base: "80%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                      alt="hot hits"
                      borderRadius={10}
                      // h='20%'
                      w='20%'
                    />
                <Text ml='20px'as="b" color="white">
                 Playlist One
                </Text>
                  <Spacer/>
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
               

               
    
            </GridItem>
            <GridItem
              w="100%"
              // bg="rgb(22,22,22)"
              bg='rgb(44,45,48)'
              boxShadow="sm"
              borderRadius={10}
              colSpan={2}
              p={3}
             
              onMouseEnter={() => handleMouseEnter("11")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(67,69,71,255)',
                boxShadow:'dark-lg'
              }}
            >           
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Image
                      objectFit="cover"
                      // maxW={{ base: "80%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                      alt="hot hits"
                      borderRadius={10}
                      // h='20%'
                      w='20%'
                    />
                <Text ml='20px'as="b" color="white">
                 Playlist One
                </Text>
                  <Spacer/>
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
               

               
    
            </GridItem>
            <GridItem
              w="100%"
              // bg="rgb(22,22,22)"
              bg='rgb(44,45,48)'
              boxShadow="sm"
              borderRadius={10}
              colSpan={2}
              p={3}
             
              onMouseEnter={() => handleMouseEnter("11")}
              onMouseLeave={handleMouseLeave}
              _hover={{
                bg:'rgba(67,69,71,255)',
                boxShadow:'dark-lg'
              }}
            >           
                  <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Image
                      objectFit="cover"
                      // maxW={{ base: "80%", sm: "200px" }}
                      src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6"
                      alt="hot hits"
                      borderRadius={10}
                      // h='20%'
                      w='20%'
                    />
                <Text ml='20px'as="b" color="white">
                 Playlist One
                </Text>
                  <Spacer/>
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
               

               
    
            </GridItem>
            </Grid> */}
    </>
  );
};

export default HeadGrid;
