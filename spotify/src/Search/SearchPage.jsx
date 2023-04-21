import {Box,Flex,Button,Input,ButtonGroup,InputGroup,InputLeftElement} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Sidebar from "../Components/side";
import Footermain from "../Pages/Footermain";
import {FaSearch} from "react-icons/fa"
import {MdOutlineSettingsVoice} from "react-icons/md"


const SearchPage = ({action,debounce}) => {
  
  // let [state,setSearch]=useState("");
  // console.log(state)
let data=useSelector((store)=>{
    return store.CategoryPlaylists
})
// console.log(data)
let data2=useSelector((store)=>{
  return store.searchResults
})
console.log(data2)
  return (
    <>
        <Sidebar />
        <Flex
          alignItems="center"
          justify="space-between"
          p="4"
          bg="rgb(16,16,16)"
          position="fixed"
          w="88.2%"
          marginLeft="11.8%"
         
          marginTop="-5.6rem"
        >
            
         
            <InputGroup w="25rem" ml="15rem"  >
            <InputLeftElement
            pointerEvents='none' fontSize={20} 
            children={<FaSearch/>}
              />
              <Input type='ser' borderRadius="5rem" bg="white" placeholder='Search here....' onChange={(e)=>{action(e.target.value)}} />
              <InputLeftElement
            pointerEvents='none' ml="22rem" fontSize={20}
            children={<MdOutlineSettingsVoice/>}
              />
           </InputGroup>
     
          <Box>
            <ButtonGroup spacing={2}>
              <Button colorScheme="black" color="white" mr="2">
                Sign Up
              </Button>
              <Button p={6} borderRadius="20px">
                Log In
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>

        <div >
      
             {
              (debounce.length==0) ? <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"10px",width:"88%" ,margin:"5px",marginLeft:"12%",marginTop:"5.6rem",marginBottom:"10px"}}>
                {
                data.map((elm,i)=>{
                    return <div key={i}>
                        <img src={elm.icons[0].url } style ={{borderRadius:"2rem"}} />
    
                        <p style={
                          {color:"white",
                          position:"absolute",
                          marginTop:"-60px",
                          fontSize:"25px",
                          marginLeft:"15px"
                          }
                          }>{elm.name}</p>
                    </div>
                })
            }
              </div> : <div>
                {
                  data2.map((elm,i)=>{
                    return <div>
                      <p>{elm.name}</p>
                    </div>
                  })
                }
              </div>
             }
          
        
      
        </div>
    

          <Footermain />

    </>
  );
};

export default SearchPage;
