import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Image,
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
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./item";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      h="95vh"
      // marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      // justifyContent="space-between"
      bg="rgb(0,0,0)"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
   
        <Box>
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
            height="8"
          />
        </Box>
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          color="white"
          icon={FiHome}
          title="Home"
          description="This is the description for the dashboard."
        />
        {/* <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active /> */}
        <NavItem navSize={navSize} icon={SearchIcon} title="Search" />
        {/* <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
      </Flex>

      <Flex
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
      </Flex>
    </Flex>
  );
}
