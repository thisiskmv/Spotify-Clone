import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Avatar,
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
  import Sidebar from "../Components/side";
  import Footermain from "./Footermain";
  import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

  import {   BsThreeDots } from "react-icons/bs";
import thunkActionCreator from "../Redux/thunk";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import {ChevronDownIcon} from '@chakra-ui/icons'
import { BiUserCircle } from "react-icons/bi";



const UserProfile=()=>{
  let dispatch =useDispatch();
  let navigate =useNavigate();
    const { myState, toggle } = useContext(MyContext);
    const [isHovered, setIsHovered] = useState(null);
    let name =JSON.parse(localStorage.getItem("userDetails"))
    name =name[0].name
    const Loggedin =  useSelector((store)=>store.isAuth);
    const handleOnChange = () => {
        toggle();
      };

      let data=useSelector((store)=>{
        return store.getPlaylists
    })
    const handleMouseEnter = (value) => {
        setIsHovered(value);
        // console.log(value)
      };
    
      const handleMouseLeave = () => {
        setIsHovered();
      };

      const logout =()=>{
        console.log("==========loooo====")
      }
    
    const play=data.slice(3, 10)
    return <>
    <Box>
        <Sidebar />
      
        <Flex
          alignItems="center"
          // justify="space-between"
          p="4"
          bg="rgb(16,16,16)"
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
              <Menu  color="white" bg="rgba(40,40,40,255)" mr='10px'>
                <MenuButton as={Button}  _hover={{backgroundColor:'none'}} borderRadius={'50'} border={'1px solid green'} w={'14rem'} bg={'black'} color={'white'} fontSize={'2rem'} mr={'1rem'} leftIcon={<BiUserCircle/>} rightIcon={<ChevronDownIcon /> }>
                 
                  <Heading as={'h5'} fontSize={'1rem'} noOfLines={'1'}  color={'white'} textTransform={'capitalize'}>{name}</Heading>
                </MenuButton>
                <MenuList
                  bg="rgba(40,40,40,255)"
                  color="white"
                  border="0px solid grey"
                >
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Account
                  </MenuItem>
                  <MenuItem onClick={() => {navigate('/profile')}}  color="white" bg="rgba(40,40,40,255)">
                    Profile
                  </MenuItem>
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Mark as Draft
                  </MenuItem>
                  <MenuItem color="white" bg="rgba(40,40,40,255)">
                    Setting
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => {dispatch(thunkActionCreator("authfalse"));
                          navigate('/')}} 
                          color="white" bg="rgba(40,40,40,255)">
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <ButtonGroup spacing={2}>
                <Link to={'/signup'}><Button colorScheme="black" color="white" mr="2">
                  Sign Up
                </Button>
                </Link>
                <Link to="/login"><Button p={6} borderRadius="20px">
                  Log In
                </Button>
                </Link>
              </ButtonGroup>
            )}
          </Box>
        </Flex>
        <Box ml={myState ? '200px':'75px'} bg="rgb(29,29,29)">
            <Flex bg="rgb(29,29,29)" >
                <Box p={10}>
                    <Avatar mt={'1rem'} size='2xl'/>
                </Box>
                
                <Stack align="flex-start" p={3}>
                <Text color='white' mb={0}>
                    {/* Profile */}
                </Text>
                <Text  mt={0}color='white' fontSize={'7rem'}  fontWeight="bold" >
                    {name}
                </Text>
                <Text color='white' fontSize='sm'>17 Public libraries ~ 3 Followers ~ 16 Following</Text>
            </Stack>
            </Flex>
            <Flex bg="rgb(29,29,29)"ml='10px'>
                <IconButton color='white' variant='ghost' fontSize='30px' icon={ <BsThreeDots />}/>
         
            </Flex>
            <Flex ml={myState ? '0px': '20px'} p={3} >
                <Stack align='flex-start'>
                    <Text color='white'  fontSize="2xl" as="b" >
                    Top Artists this month
                </Text>
                <Text color='grey'>
                    only visible to you
                </Text>
                </Stack>
                
            </Flex>
            <Grid  templateColumns="repeat(7 , 1fr)" gap={3} bg="rgb(29,29,29)" p={3}>
            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={5}
            
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3} >
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84"
                    alt="hot hits"
                    borderRadius={200}
                  />
                
                  </Box>
                </Center>
                <Text as="b" color="white">
                  Atif Aslam
                </Text>
                
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={5}
              
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
                    src="https://i.scdn.co/image/ab6761610000e5ebbc959d7569618ec2af2210f5"
                    alt="hot hits"
                    borderRadius={100}
                  />
                  
                  </Box>
                </Center>
                <Text as="b" color="white">
                 Sonu Nigam
                </Text>
              
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={5}
              
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
                    src="https://i.scdn.co/image/ab67616d0000b2730ebc4e024184d30a61d7e447"
                    alt="hot hits"
                    borderRadius={500}
                  />
                   
                  </Box>
                </Center>
                <Text as="b" color="white">
                Arijit singh
                </Text>
              
              </Stack>
            </GridItem>

            <GridItem
              w="100%"
              bg="rgb(22,22,22)"
              boxShadow="sm"
              borderRadius={10}
              p={5}
              
              _hover={{
                bg:'rgba(40,40,40,255)',
                boxShadow:'dark-lg'
              }}
            >
              <Stack spacing={3} >
                <Center>
                  <Box>
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c"
                    alt="hot hits"
                    borderRadius={100}
                  />
                  
                  </Box>
                </Center>
                <Text as="b" color="white">
                 A R Rahman
                </Text>
              
              </Stack>
            </GridItem>
          </Grid>
          <Flex bg="rgb(29,29,29)" fontSize="2xl" as="b" ml={myState ? '0px': '20px'} p={3}>
            <Text color="white">Your Fav Tracks</Text>
          </Flex>
          <Grid templateColumns="repeat(7 , 1fr)" gap={3} p={3}>
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
           
        </Box>
        <Footermain/>
      </Box>
    </>
}

export default UserProfile;