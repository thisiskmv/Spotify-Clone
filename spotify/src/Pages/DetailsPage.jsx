import React, { useRef, useState,useContext } from "react";
import {
  Avatar,
  
  Divider,
  
  VStack,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Spacer,
  IconButton,
  ButtonGroup,
  Icon,
  Input,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
// import { AiOutlineHeart ,AiFillHeart} from "react-icons/ai";
import { AiFillHeart,AiOutlineLeft,AiOutlineRight ,AiOutlineHeart } from "react-icons/ai";
import { BiVolumeFull } from "react-icons/bi";
import {
  MdOutlinePlayCircleFilled,
  MdSkipPrevious,
  MdSkipNext,
  MdPauseCircleFilled,
} from "react-icons/md";
import {
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Skeleton,
  Center,
  Button,
  toast,
} from "@chakra-ui/react";
import "../App.css";
import AudioPlayer from "../Components/AudioPlayer";
import { } from 'react-router-dom'
import Sidebar from "../Components/side";
import { MyContext } from "../Components/context";
import {Link} from 'react-router-dom'
// import { useSelector } from "react-redux";
import store from "../Redux/store";
import thunkActionCreator from "../Redux/thunk";
import {useDispatch,useSelector } from "react-redux";
import {ChevronDownIcon} from '@chakra-ui/icons'
import { BiUserCircle } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'
 
// let obj ={};
// let items =[];
// let Loggedin = false;

const DetailsPage = () => {
  let navigate =useNavigate()
  const { myState, toggle } = useContext(MyContext);
  const [Loggedin, setLoggedIn] = useState(false);
  const [liked, setLike] = useState([]);
  const[likedIds,setLikedIds] =useState(JSON.parse(localStorage.getItem("_likedIds")) || [])
  // const [isPlaying, setIsPlaying] = useState(false);
  const[obj,setObj] =useState()
  const[items,setItems] =useState()
  const [trackIndex, setTrackIndex] = useState(0);
  let toast = useToast();

  let dispatch =useDispatch();
  let name =JSON.parse(localStorage.getItem("userDetails"))

  store.subscribe(()=>{
    setItems(store.getState().getDetailsPlaylist.tracks.items);
    setObj(store.getState().getDetailsPlaylist)
    setLoggedIn (store.getState().isAuth)
  })

console.log("------------>",items);

  // remove song
  const removeSong = (index,likedId) => {
    let arr = [...liked];
    let arr2 = [...likedIds];
    // for liked songs
    arr = arr.filter((e, id) => {
      return likedId != e.track.id;
    });
    // for liked ids
    arr2 = arr2.filter((e, id) => {
      return likedId != e;
    });

    localStorage.setItem("liked", JSON.stringify(arr));
    localStorage.setItem("_likedIds", JSON.stringify(arr2));
    setLike(arr);
    setLikedIds(arr2);
  };

  return (
    <div style={{backgroundColor:"#181818"}}>
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
              <Menu  color="white" bg="rgba(40,40,40,255)" mr='10px'>
                <MenuButton as={Button}  _hover={{backgroundColor:'none'}} borderRadius={'50'} border={'1px solid green'} w={'14rem'} bg={'black'} color={'white'} fontSize={'2rem'} mr={'1rem'} leftIcon={<BiUserCircle/>} rightIcon={<ChevronDownIcon /> }>
                  {/* <Avatar
                    size="md"
                    name="User"
                    src="https://bit.ly/dan-abramov"
                  /> */}
                  <Heading as={'h5'} fontSize={'1rem'} noOfLines={'1'}  color={'white'} textTransform={'capitalize'}>{name[0].name}</Heading>
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
      <Box width={'91%' } ml={'11.9%'}>
        <Box
          p={"32px 24px"}
          bg={"rgb(40, 112, 168)"}
          bgGradient={"linear-gradient(transparent 0,rgba(0,0,0,.5) 100%)"}
          color={"white"}
        >
          
          <Flex alignItems={"center"}>
              
            <Image
              src={obj?.images[0].url}
              h={"232"}
              w={"192"}
              boxShadow={"0 4px 60px rgba(0,0,0,.5)"}
            />
            
            
            <Stack
              direction={"column"}
              ml={"20px"}
              spacing={"6"}
              textAlign={"left"}
            >
              <Text as="b">Playlist</Text>
              <Heading as={"h1"} size={"4xl"}>
                {obj?.name}
              </Heading>
              <Text as="b">{obj?.description}</Text>
            </Stack>
            
          </Flex>
          
        </Box>
        <Box>
          <Table colorScheme="facebook">
            <Thead bg={"black"} pos={"sticky"} top={"72px"}>
              <Tr>
                <Th p={"8px 12px"} border={"0"} color={"white"}>
                  #
                </Th>
                <Th p={"8px 12px"} border={"0"} color={"white"}>
                  Title
                </Th>
                <Th p={"8px 12px"} border={"0"} color={"white"}>
                  Album
                </Th>
                <Th p={"8px 12px"} border={"0"} color={"white"}>
                  Date Added
                </Th>
                <Th p={"8px 12px"} border={"0"} color={"white"}></Th>
                <Th p={"8px 12px"} border={"0"} color={"white"}>
                  Duration
                </Th>
              </Tr>
            </Thead>
            <Tbody className="playlist-tr" bg={"#121212"} color={"white"}>
              {obj?.tracks.items.length > 0 &&
                obj?.tracks.items.map((e, id) => {
                  return (
                    <Tr
                      key={id}
                      onClick={() => {
                        setTrackIndex(id)
                      }}

                       onMouseEnter={(event)=>{
                        
                            const newItems = [...items];
                            newItems[id].opacity = 1
                            setItems(newItems)
                        
                          }}

                      onMouseLeave={(e)=>{
                      
                      const newItems = [...items]
                      newItems[id].opacity = 0
                        setItems(newItems)
                      
                      }}
                         
                      
                     
                    
                    >
                      <Td border={"0"}>{id + 1}</Td>
                      <Td border={"0"}>
                        <Flex alignItems={"center"}>
                          <Image
                            src={e.track.album.images[2].url}
                            w={"40px"}
                            h={"40px"}
                            mr={"16px"}
                          />
                          <Stack direction={"column"} spacing={"1"}>
                            <Text
                              fontSize={"md"}
                              noOfLines={1}
                              _hover={{ textDecoration: "underline" }}
                              color={trackIndex!=null && trackIndex == id ? '#1ed760' : 'white'}
                             
                              fontWeight={'500'}
                            >
                             
                              {e.track.name}
                             
                            </Text>
                            <Text
                              fontSize={"sm"}
                              noOfLines={1}
                              _hover={{ textDecoration: "underline" }}
                            >
                              {e.track.artists.map((e) => e.name).join(", ")}
                            </Text>
                          </Stack>
                        </Flex>
                      </Td>
                      <Td border={"0"}>
                        <Text fontSize={"sm"} noOfLines={1}>
                          {e.track.album.name}
                        </Text>
                      </Td>
                     
                      <Td border={"0"}>{`1 day ago`}</Td>
                      <Tooltip
                        bg="black"
                        p={"10px 16px"}
                        label={likedIds.includes(e.track.id) ? "Remove from Liked Song":"Add to like songs"}
                        placement={"left"}
                        hasArrow
                      >
                        <Td border={"0"}>
                          <Icon
                            color={likedIds.includes(e.track.id) ?'green' : 'white'}
                            style={likedIds.includes(e.track.id) ?{opacity:1}:{opacity: e.opacity ? e.opacity : 0 }}
                            onClick={(event) => {
                              event.stopPropagation();
                              

                              if(!likedIds.includes(e.track.id)){
                                    localStorage.setItem(
                                    "liked",
                                    JSON.stringify([...liked, e])
                                  );
                                  localStorage.setItem(
                                    "_likedIds",
                                    JSON.stringify([...likedIds, e.track.id])
                                  );
                                  setLike([...liked, e]);
                                  setLikedIds([...likedIds, e.track.id]);

                                  toast({
                                    title: e.track.name,
                                    description: "Added to Liked Song",
                                    status: "success",
                                    duration: 2000,
                                  });
                              }
                              else{

                                  removeSong(id,e.track.id)
                                  toast({
                                  title: e.track.name,
                                  description: "Removed from Liked Song",
                                  status: "error",
                                  duration: 2000,
                                });

                              }

                             
                            }}
                            as={likedIds.includes(e.track.id) ?AiFillHeart : AiOutlineHeart}
                          />
                        </Td>
                      </Tooltip>
                      <Td border={"0"}>
                        {Math.floor(e.track.duration_ms / 60000)}:
                        {((e.track.duration_ms % 60000) / 1000).toFixed(0)}
                      </Td>
                    </Tr>
                  );
                })}
              
            </Tbody>
          </Table>
        </Box>
      </Box>
      
      {obj && <AudioPlayer items={obj.tracks.items} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />}
      {/* audio player container ends */}
    </div>
  );
};

export default DetailsPage;
