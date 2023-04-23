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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "./Redux/store";
import getData from "./Redux/thunk";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('spotify_token')) || null);
  let dispatch = useDispatch();

 

  store.subscribe(() => {
    if(token==null){

      setToken(store.getState().token.toke);
    }
  });

  useEffect(() => {
    
    if (token != null) {
      let tokenTime =JSON.parse(localStorage.getItem('spotify_token')).timestamp
      let time =Date.now();

      let diffTimestamp =Math.floor((time - tokenTime)/1000/60);

     

      console.log("timestamp===>",diffTimestamp)

      if(diffTimestamp>59){
        dispatch(thunkActionCreator("token"))
      }
      else{
        dispatch(thunkActionCreator("oldToken",null,token))
        dispatch(thunkActionCreator("playlist", token.token));
      }


    }
    else if(token==null){
      dispatch(thunkActionCreator("token"))

    }
  }, [token]);

  return (
    <div className="App">
      {/* <h1>Spotify Clone</h1> */}
      <DetailsPage />
      {/* <LikePage/> */}

      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}

      {/* <SpotifyHomepage/> */}
    </div>
  );
}

export default App;
