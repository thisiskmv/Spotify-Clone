import logo from "./logo.svg";
import { Button, Text } from "@chakra-ui/react";
// import './App.css';
import { SpotifyHomepage } from "./Pages/Home";

import DetailsPage from "./Pages/DetailsPage";
import LikePage from "./Pages/LikePage";

import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";
import thunkActionCreator from "./Redux/thunk";
import {useDebounce} from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "./Redux/store";
import getData from "./Redux/thunk";
import SearchPage from "./Search/SearchPage";
function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('spotify_token')) || null);
  let dispatch = useDispatch();
  let [query,setQuery] = useState("");
  let [debouncedText]=useDebounce(query,1000);
  // console.log(query);
//  localStorage.setItem("song",query);
//  let query1=localStorage.getItem("song")
  useEffect(() => { 
    
    if (token != null) {
      let tokenTime =JSON.parse(localStorage.getItem('spotify_token')).timestamp
      let time =Date.now();

      let diffTimestamp =Math.floor((time - tokenTime)/1000/60);

     

      // console.log("timestamp===>",diffTimestamp)

      if(diffTimestamp>59){
        dispatch(thunkActionCreator("token"))
      }
      else{
        dispatch(thunkActionCreator("oldToken"))
        // dispatch(thunkActionCreator("playlist", token.token));
        // dispatch(thunkActionCreator("searchResults", token.token));
        dispatch(thunkActionCreator("category",token.token))
        dispatch(thunkActionCreator("searchResults",token.token,debouncedText))
       
      }
 
        
      

    }
    else if(token==null){
      dispatch(thunkActionCreator("token"))

    }
  }, [token,debouncedText]);

  return (
    <div className="App">
      {/* <h1>Spotify Clone</h1> */}
      {/* <DetailsPage /> */}
      {/* <LikePage/> */}

      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
     <SearchPage action={setQuery} debounce={debouncedText}/>
      {/* <SpotifyHomepage/> */}
    </div>
  );
}

export default App;