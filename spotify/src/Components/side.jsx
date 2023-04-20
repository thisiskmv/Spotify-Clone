import React, { useState, useContext } from "react";
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
import { MyContext } from "./context";

import NavItem from "./item";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  // const [isOpen, setIsOpen] = useState(true);
  
  const { myState, toggle } = useContext(MyContext);

  console.log("from side",myState);
 
  const handleOnChange = () => {
    toggle();
  };
 


  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      h="100%"
      w={navSize == "small" ? "75px" : "200px"}
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"

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
     
        <IconButton
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
        <NavItem
          navSize={navSize}
          color="white"
          icon={FiHome}
          title="Home"
          description="This is the description for the dashboard."
        />
     
        <NavItem navSize={navSize} icon={SearchIcon} title="Search" />
        <NavItem navSize={navSize} icon={VscLibrary} title="Your Library"/>

        {/* <HStack>
          <FiHome color="'white"/>
        <SearchIcon color='white'/>
        <svg role="img" height="24" 
        width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL collection-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>
        <Text color='white'>Search</Text>
        </HStack> */}

        {/* <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active /> */}
        {/* <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
      </Flex>


      {/* <Wrap border="1px solid white">
        <WrapItem>
          <Button colorScheme="teal" variant="link">
            Legal
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="teal" variant="link">
            PrivacyCenter
          </Button>
        </WrapItem>
        <WrapItem>
          <Button colorScheme="teal" variant="link">
            PrivacyPolicy
          </Button>
        </WrapItem>
     
      </Wrap> */}
      {/* <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex> */}
    </Flex>
  );
}
