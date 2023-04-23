import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineMusicNote } from "react-icons/md";
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
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import "../App.css";
import AudioPlayer from "../Components/AudioPlayer";

const LikePage = () => {
  const [song, setSong] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
  let toast = useToast();

  useEffect(() => {
    setSong(JSON.parse(localStorage.getItem("liked")) || []);
    
  }, []);

  const removeSong = (index,songId) => {
    let arr = [...song];
    let arr2 =JSON.parse(localStorage.getItem('_likedIds')) || []
    arr = arr.filter((e, id) => {
      return id != index;
    });

    arr2 =arr2.filter((id)=>{
      return id != songId;
    })

    localStorage.setItem("liked", JSON.stringify(arr));
    localStorage.setItem("_likedIds", JSON.stringify(arr2));
    setSong(arr);
  };

  return (
    <div>
      <Box>
        <Box
          p={"32px 24px"}
          bg={"rgb(80, 56, 160)"}
          color={"white"}
          bgGradient={"linear-gradient(transparent 0,rgba(0,0,0,.5) 100%)"}
        >
          <Flex alignItems={"center"}>
            <Image
              src={
                "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
              }
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
                {`Liked Songs`}
              </Heading>
              <Text as="b">Liked : {song.length} songs</Text>
            </Stack>
          </Flex>
        </Box>
        <Box>
          <Table colorScheme="facebook">
            <Thead bg={"black"} pos={"sticky"} top={"0px"}>
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
              {song.length > 0 ? (
                song.map((e, id) => {
                  return (
                    <Tr
                      key={id}
                      onClick={() => {
                        setTrackIndex(id)
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
                      {/* <Td>{e.added_at}</Td> */}
                      <Td border={"0"}>{`1 day ago`}</Td>
                      <Tooltip
                        bg="black"
                        p={"10px 16px"}
                        label="Remove from Liked Song"
                        placement={"left"}
                        hasArrow
                      >
                        <Td border={"0"}>
                          <Icon
                            color={"green"}
                            onClick={(event) => {
                              event.stopPropagation();
                              toast({
                                title: e.track.name,
                                description: "Removed from Liked Song",
                                status: "error",
                                duration: 2000,
                              });

                              removeSong(id,e.track.id);

                              // localStorage.setItem("liked",JSON.stringify([...liked,e]));
                              // setLike([...liked,e]);
                            }}
                            as={AiFillHeart}
                          />
                        </Td>
                      </Tooltip>
                      <Td border={"0"}>
                        {Math.floor(e.track.duration_ms / 60000)}:
                        {((e.track.duration_ms % 60000) / 1000).toFixed(0)}
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Tr height={"50vh"}>
                  <Td colSpan={"6"} textAlign={"center"}>
                    <Flex direction={'column'} justify={'center'} alignItems={'center'} rowGap={'15px'} >
                      
                      <Icon as={MdOutlineMusicNote} h={'50px'} w={'50px'}/>
                      <Heading as={"h3"} size={"xl"}>
                      Songs you like will appear here
                      </Heading>
                      <Text fontSize={'lg'}>Save songs by tapping the heart icon.</Text>
                      <Button variant={'solid'} color={'black'} size={'lg'} borderRadius={'500px'} p={'12px 32px'} _hover={{transform:"scale(1.05)"}}>Find Songs</Button>
                    </Flex>
                  </Td>
                </Tr>
              )}
              {/* <Tr >
                            <Td>1</Td>
                            <Td>{obj.tracks.items[0].track.name}</Td>
                            <Td>Ranbir kapoor</Td>
                            <Td>1 day ago</Td>
                            <Td>3:36</Td>
                        </Tr> */}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {song.length > 0 && <AudioPlayer items={song} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />}
    </div>
  );
};

export default LikePage;
