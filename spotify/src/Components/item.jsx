import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

import NavHoverBox from './hovernav'

export default function NavItem({ icon, title, description, active, navSize }) {

    let navigate =useNavigate();

    const handleclick =(title) =>{
        if(title == "Home"){
           navigate("/")
        }
        else if(title == "Search"){
            navigate("/search")
        }
        else if(title == "Liked Songs"){
            navigate("/likedsong")
        }
        
    }
    return (
        <Flex
            mt={2}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    
                    _hover={{ textDecor: 'none', backgroundColor: "rgba(40,40,40,255)" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%" onClick={()=>handleclick(title) }>
                        <Flex >
                            <Icon as={icon}  color='white' fontSize="xl" />
                            <Text  ml={2} color='white' display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                {/* <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                > */}
                    {/* <NavHoverBox title={title} icon={icon} description={description} /> */}
                {/* </MenuList> */}
            </Menu>
        </Flex>
    )
}