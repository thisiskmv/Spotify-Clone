import logo from "./logo.svg";
import { Button, Text } from "@chakra-ui/react";
// import './App.css';
import { SpotifyHomepage } from "./Pages/Home";
import UserProfile from "./Pages/Profile";

import DetailsPage from "./Pages/DetailsPage";
import LikePage from "./Pages/LikePage";

import Login from "./Login & Signup/Login";
import SignUp from "./Login & Signup/SignUp";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";
import thunkActionCreator from "./Redux/thunk";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import store from "./Redux/store";
import getData from "./Redux/thunk";

import SearchPage from "./Search/SearchPage";

import { MyContext } from "./Components/context";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("spotify_token")) || null
  );
  let dispatch = useDispatch();

  let [query, setQuery] = useState("");
  console.log(query);
  let [debouncedText] = useDebounce(query, 1000);

  const [myState, setMyState] = useState(true);

  const toggle = () => {
    setMyState((prev) => !prev);
  };

  store.subscribe(() => {
    if (token == null) {
      setToken(store.getState().token.toke);
    }
  });

  useEffect(() => {
    if (token != null) {
      let tokenTime = JSON.parse(
        localStorage.getItem("spotify_token")
      ).timestamp;
      let time = Date.now();

      let diffTimestamp = Math.floor((time - tokenTime) / 1000 / 60);

      // console.log("timestamp===>",diffTimestamp)

      if (diffTimestamp > 59) {
        dispatch(thunkActionCreator("token"));
      } else {
        dispatch(thunkActionCreator("oldToken", null, token));
        dispatch(thunkActionCreator("playlist", token.token));

        // dispatch(thunkActionCreator("oldToken"))

        // dispatch(thunkActionCreator("playlist", token.token));
        // dispatch(thunkActionCreator("searchResults", token.token));
        // dispatch(thunkActionCreator("category", token.token));
        // dispatch(
        //   thunkActionCreator("searchResults", token.token, null, debouncedText)
        // );
        dispatch(thunkActionCreator("category",token.token))
        // dispatch(thunkActionCreator("searchResults",token.token,debouncedText))
       


        dispatch(thunkActionCreator("playlist", token.token));
        dispatch(thunkActionCreator("searchResults", token.token));
        dispatch(thunkActionCreator("category", token.token));
        // dispatch(
        //   thunkActionCreator("searchResults", token.token, null, debouncedText)
        // );

      }
    } else if (token == null) {
      dispatch(thunkActionCreator("token"));
    }
  }, [token]);

  return (
    <MyContext.Provider value={{ myState, toggle }}>
      <div className="App">
        {/* <h1>Spotify Clone</h1> */}
        {/* <DetailsPage /> */}

        {/* <LikePage/> */}

      {/* <LikePage/> */}



      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Navbar/> */}
      <AllRoutes/>

        {/* <Login/>  */}
        {/* <SignUp/>  */}
        {/* <Navbar/> */}
        {/* <AllRoutes /> */}


        {/* <SearchPage action={setQuery} debounce={debouncedText}/> */}
        {/* <Dictaphone/> */}

        {/* <SpotifyHomepage /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
