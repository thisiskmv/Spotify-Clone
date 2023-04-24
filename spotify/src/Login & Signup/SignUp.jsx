import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import {
  Img,
  Center,
  Box,
  Button,
  Divider,
  Input,
  Select,
  Text,
  Flex,
  Checkbox,
  RadioGroup,
  Stack,
  Radio,
  Spacer,
  Heading,
  Container,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
import {useNavigate} from 'react-router-dom'
import thunkActionCreator from "../Redux/thunk";
const initial = {
  email: "",
  password: "",
  name: "",
  year: "",
  month: "",
  day: "",
  Confirmpassword: "",
};

function SignUp(props) {
  let navigate =useNavigate();
  let dispatch = useDispatch()
  let jsonData=JSON.parse(localStorage.getItem("userDetails")) || []
  let isAuth = useSelector((store) => {
    return store.isAuth;
  });
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [shows, setShows] = React.useState(false);
  const handleClicks = () => setShows(!shows);

  const [state, setState] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    year: "",
    month: "",
    day: "",
    Confirmpassword: "",
  });

  const sendRegesterData = () => {
    if (
      userData.email == "" ||
      userData.password == "" ||
      userData.name == "" ||
      userData.year == "" ||
      userData.month == "" ||
      userData.day == "" ||
      userData.Confirmpassword == ""
    ) {
   
      toast({
        position: "top-right",
        title: "Attention!.",
        description: "Please fill all the fields!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });



      
    } 
    else if (userData.password !== userData.Confirmpassword) {
      toast({
        position: "top-right",
        title: `Confirm password dosn't match`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      let array=[...jsonData]
      array=array.filter((elm)=>{
        return elm.email===userData.email 
      })
      if(array.length==1){
        toast({
          position: 'top-right',
          title: 'User already exists!.',
          description: "Please Login now...",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }else{
      localStorage.setItem("userDetails", JSON.stringify([...state, userData]));
      setState([...state, userData]);
      console.log(state);
      setUserData(initial);
      // isAuth = true;
      toast({
        position: "top-right",
        title: "Account Created.",
        description: "Successfully created Account!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(thunkActionCreator("auth"))
      navigate('/')
    }
  }
  };

  return (
    <div>
      <Box pb="1.5rem">
        <Center>
          <Img
            w="9rem"
            mt={10}
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
          ></Img>
        </Center>
      </Box>
      <div style={{ margin: "auto", marginBottom: "3rem", width: "30rem" }}>
        <Center>
          <Heading fontSize="1.9rem" mt="1rem" mb="1rem">
            Sign up for free to start listening.
          </Heading>
        </Center>
        <Center>
          <Box mt="1rem">
            <Button
              bg="rgb(64,90,147)"
              w="27rem"
              p={6}
              borderRadius="5rem"
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
            >
              CONTINUE WITH FACEBOOK
            </Button>
          </Box>
        </Center>
        <Center>
          <Box mb="1rem" mt="1rem">
            <Button
              bg="rgb(255,255,255)"
              color="black"
              p={6}
              border="1px solid grey"
              w="27rem"
              borderRadius="5rem"
              colorScheme="facebook"
              leftIcon={<FcGoogle />}
            >
              CONTINUE WITH GOOGLE
            </Button>
          </Box>
        </Center>

        <Center mt="1rem">
          <h6 className="divider-signup" style={{ fontSize: "1.4rem" }}>OR</h6>
        </Center>

        <div style={{ marginTop: "2rem" }}>
          <p>What's your email?</p>
          <Input
            w="30rem"
            mt="0.8rem"
            p="1.6rem"
            border="1px solid grey"
            focusBorderColor="black"
            placeholder="Email Address or Username"
            size="sm"
            value={userData.email}
            type="email"
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
          />
          <Text mb="8px" mt="0.8rem">
            Create a password
          </Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              w="30rem"
              p="1.6rem"
              value={userData.password}
              border="1px solid grey"
              focusBorderColor="black"
              placeholder="Enter Password"
              size="sm"
              onChange={(e) =>
                setUserData({
                  ...userData,
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
            Confrom password
          </Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={shows ? "text" : "password"}
              w="30rem"
              p="1.6rem"
              value={userData.Confirmpassword}
              border="1px solid grey"
              focusBorderColor="black"
              placeholder=" Confirm Password"
              size="sm"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  Confirmpassword: e.target.value,
                })
              }
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" mt="0.8rem" size="sm" onClick={handleClicks}>
                {shows ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text mb="8px" mt="0.8rem">
            What should we call you?
          </Text>
          <Input
            w="30rem"
            p="1.6rem"
            border="1px solid grey"
            focusBorderColor="black"
            placeholder="Enter a profile  name"
            type="text"
            size="sm"
            value={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />
        </div>
        <Text mb="8px" mt="0.8rem">
          This appears on your profile.
        </Text>
        <Text mb="8px" mt="0.8rem">
          What's your date of birth?
        </Text>

        <Box>
          <Flex flexDirection="spaceBetween">
            <Input
              w="8rem"
              p="1.2rem"
              mr="1rem"
              placeholder="YYYY"
              size="sm"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  year: e.target.value,
                })
              }
            />
            <Select
              placeholder="Select option"
              w="12rem"
              ml="1rem"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  month: e.target.value,
                })
              }
            >
              <option value="january">January</option>
              <option value="fabuary">Fabuary</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="jun">Jun</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="octomber">Octumber</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </Select>
            <Input
              w="6rem"
              p="1.2rem"
              ml="2rem"
              placeholder="DD"
              size="sm"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  day: e.target.value,
                })
              }
            />
          </Flex>
        </Box>

        <Text mb="8px" mt="0.8rem">
          What's your gender?
        </Text>

        <RadioGroup>
          <Stack direction="row" spacing={14}>
            <Radio>Male</Radio>
            <Radio>Female</Radio>
            <Radio>Non binary</Radio>
            <Radio>Others</Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup>
          <Stack direction="row">
            <Radio mt="0.5rem">Prefer not to say</Radio>
          </Stack>
        </RadioGroup>

        <Box>
          <Checkbox mt="1rem">
            I would prefer not to receive marketing messages from Spotify
          </Checkbox>
        </Box>
        <Box>
          <Checkbox>
            <p style={{ marginTop: "1rem" }}>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </p>
          </Checkbox>
        </Box>

        <Center>
          <p style={{ fontSize: "0.6rem", marginTop: "1rem" }}>
            By clicking on sign-up, you agree to Spotify's Terms and Conditions
            of Use.
          </p>
        </Center>
        <Center>
          <p style={{ fontSize: "0.6rem" }}>
            To learn more about how Spotify shares and protects your personal
            data,please see{" "}
            <span style={{ color: "blue" }}>Spotify's Privacy Policy</span>
          </p>
        </Center>

        <Center>
          <Flex>
            <Button
              colorScheme="rgb(30,215,96)"
              color="black"
              bg="rgb(30,215,96)"
              fontSize="1rem"
              mt="1.5rem"
              p="1.7rem"
              borderRadius="2rem"
              w="9rem"
              size="xs"
              onClick={sendRegesterData}
            >
              SignUp
            </Button>
          </Flex>
        </Center>
        <Center>
          <h1 style={{ marginTop: "1.2rem", marginBottom: "1.2rem" }}>
            have an account? <span onClick={()=>navigate('/login')} style={{ color: "blue" ,cursor:"pointer"}}>Login</span>
          </h1>
        </Center>
      </div>
    </div>
  );
}

export default SignUp;
