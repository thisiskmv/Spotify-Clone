import React from "react";
import { useToast } from '@chakra-ui/react'
import {
  Img,
  Center,
  Box,
  Button,
  Divider,
  Input,
  Text,
  Flex,
  Checkbox,
  Spacer,
  Container,
  InputRightElement,
  InputGroup,
  Heading
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { json, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import thunkActionCreator from "../Redux/thunk";
const initial={
  email: "",
  password: "",
}
function Login(props) {
  let jsonData=JSON.parse(localStorage.getItem("userDetails"))
  let dispatch =useDispatch();
  // console.log(jsonData)
  let navigate =useNavigate();
  const toast = useToast()
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // const [state, setState] = useState([]);
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });

  let loginData = () => {
    if(users.email==="" || users.password===""){
      toast({
        position: 'top-right',
        title: 'Attention!.',
        description: "Please fill all the fields!",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }else{
  // setState([...state, users]);
  let array=[...jsonData]
    array=array.filter((elm)=>{
      return elm.email===users.email && elm.password===users.password
    })
    if(array.length==0){
      toast({
        position: 'top-right',
        title: 'user Not found!.',
        description: "Please Regester now!",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }else{
      toast({
        position: 'top-right',
        title: 'Login successfull!.',
        description: "Enjoy now!",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      dispatch(thunkActionCreator("auth"))
      setUsers(initial)
      navigate('/')

    }
   }
  };
  return (
    <div>
      <Box borderBottom="0.1px solid grey" w="100%" pb="1.5rem">
        <Center>
          <Img
            w="9rem"
            mt={6}
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          ></Img>
        </Center>
      </Box>
      <div style={{ margin: "auto", marginBottom: "5rem", width: "30rem" }}>
        <Center>
          <Heading fontSize="0.8rem" mt="3rem">To continue, log in to Spotify.</Heading>
        </Center>
        <div>
          <Box mb="1rem" mt="1rem">
            <Button
              bg="rgb(24,119,242)"
              w="30rem"
              p={6}
              borderRadius="5rem"
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
            >
              CONTINUE WITH FACEBOOK
            </Button>
          </Box>
          <Box mb="1rem" mt="1rem">
            <Button
              bg="rgb(25,25,25)"
              w="30rem"
              p={6}
              borderRadius="5rem"
              colorScheme="facebook"
              leftIcon={<AiFillApple />}
            >
              CONTINUE WITH APPLE
            </Button>
          </Box>
          <Box mb="1rem" mt="1rem">
            <Button
              bg="rgb(255,255,255)"
              color="black"
              p={6}
              border="1px solid grey"
              w="30rem"
              borderRadius="5rem"
              colorScheme="facebook"
              leftIcon={<FcGoogle />}
            >
              CONTINUE WITH GOOGLE
            </Button>
          </Box>
          <Box mb="1rem" mt="1rem">
            <Button
              bg="rgb(255,255,255)"
              color="black"
              p={6}
              border="1px solid grey"
              w="30rem"
              borderRadius="5rem"
            >
              CONTINUE WITH PHONE NUMBER
            </Button>
          </Box>

          <Center mt="2rem" mb="1rem">
            <h6 className="divider-login" style={{ fontSize: "1.4rem" }}>OR</h6>
          </Center>

          <Text mb="8px">Email address or username</Text>
          <Input
            w="30rem"
            p="1.6rem"
            border="1px solid grey"
            focusBorderColor="black"
            placeholder="Email Address or Username"
            size="sm"
            type="email"
            value={users.email}
            onChange={(e) =>
              setUsers({
                ...users,
                email: e.target.value,
              })
            }
          />
          <Text mb="8px" mt="0.8rem">
            Password
          </Text>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              w="30rem"
              p="1.6rem"
              border="1px solid grey"
              focusBorderColor="black"
              placeholder="Password"
              size="sm"
              value={users.password}
              onChange={(e) =>
                setUsers({
                  ...users,
                  password: e.target.value,
                })
              }
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" mt="0.8rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text mb="8px" mt="0.8rem">
            Forgot your password?
          </Text>

          <Center>
            <Flex>
              <Box p="2" ml="">
                <Checkbox defaultChecked>Remember me</Checkbox>
              </Box>

              <Box p="2" ml="13rem">
                <Button
                  onClick={loginData}
                  colorScheme="rgb(30,215,96)"
                  color="black"
                  bg="rgb(30,215,96)"
                  fontSize="1rem"
                  p="1.4rem"
                  borderRadius="2rem"
                  w="7rem"
                  size="xs"
                >
                  Login
                </Button>
              </Box>
            </Flex>
          </Center>
          <hr style={{ borderBottom: "1px solid grey", marginTop: "2rem" }} />

          <h1 style={{ marginTop: "1.2rem", marginBottom: "1.2rem" }}>
            Don't have an account?
          </h1>

          <Box mb="1rem" mt="1rem">
            <Button onClick={()=>navigate('/signup')}
              bg="rgb(255,255,255)"
              color="black"
              p={6}
              border="1px solid grey"
              w="30rem"
              borderRadius="5rem"
            >
              SIGNUP FOR SPOTIFY
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Login;
