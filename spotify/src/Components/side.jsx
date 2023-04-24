import React, { useState, useContext, useEffect } from "react";
import {
  useBoolean,
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { MyContext } from "./context";


import NavItem from "./item";
import { Link } from "react-router-dom";

import { useBreakpointValue } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  // const [isOpen, setIsOpen] = useState(true);
  
  
  const { myState, toggle } = useContext(MyContext);

  // console.log("from side",myState);
 
  const handleOnChange = () => {
    toggle();
  };
 
  // const breakpoints = {
  //   sm: '320px',
  //   md: '768px',
  //   lg: '960px',
  //   xl: '1200px',
  //   '2xl': '1536px',
  // }

  // const theme = extendTheme({ breakpoints })
  const shouldDisplaySidebar = useBreakpointValue({sm:'sm',md:'md',lg:'lg'});
  useEffect(()=>{
    if(shouldDisplaySidebar==='sm'){
      toggle();
      changeNavSize("small");
     
    }
    if(shouldDisplaySidebar==='lg'){
      // toggle();
      changeNavSize("large");
      // toggle();
    }
    if(shouldDisplaySidebar==='md'){
      changeNavSize("large");
      // toggle();
    }
    
    console.log("from use effect",navSize);
    
  },[shouldDisplaySidebar]) 


 

  return (
    <Flex
      position="fixed"
      zIndex={2}
      left={0}
      top={0}
      h="100%"
      w={navSize == "small" ? "75px" : "200px"}
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
    //  w={ shouldDisplaySidebar? "": "75px"}
    // w={{base:'200px%',md:}}
    //  w={{md:changeNavSize("small")}}
      flexDir="column"
      justifyContent="space-between"
      bg="rgb(0,0,0)"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <Box p={2} >
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
            height="10"
            display={myState ? "block":"none"}
          />
        </Box>
        {/* <BiLibrary/> */}
     
        <Link to={'/'}> <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          color='white'
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
            handleOnChange();
          }}
        />
        </Link>
        <NavItem
          navSize={navSize}
          color="white"
          icon={FiHome}
          title="Home"
          description="This is the description for the dashboard."
        />
     
        <NavItem  navSize={navSize} icon={SearchIcon} title="Search"  />
        <NavItem navSize={navSize} icon={VscLibrary} title="Your Library"/>
        <NavItem navSize={navSize} icon={AiFillHeart} title="Liked Songs"/>

    
      </Flex>

    </Flex>
  );
}
