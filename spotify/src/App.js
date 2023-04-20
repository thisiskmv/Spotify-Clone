import logo from './logo.svg';
import { Button, Text } from '@chakra-ui/react';
import './App.css';
import { SpotifyHomepage } from './Pages/Home';
import Login from './Login & Signup/Login';
import SignUp from './Login & Signup/SignUp';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Routes/Navbar';
import thunkActionCreator from './Redux/thunk';
import {useDispatch, useSelector} from "react-redux"
import { useEffect,useState } from 'react';
import store from "./Redux/store"
import getData from './Redux/thunk';
function App() {

let timer=Date.now();
let dispatch=useDispatch();

const [token,setToken]=useState(
  useSelector((store)=>{
  return store.token.toke
}));

store.subscribe(()=>{

  setToken(store.getState().token.toke)
})
// console.log(token);

if(token){
  // dispatch(thunkActionCreator("playlist"))
}

let spotify_time=useSelector((store)=>{
  return store.token.time
})

useEffect(()=>{
  dispatch(thunkActionCreator("token"))
  // dispatch(thunkActionCreator("playlist"))
},[])


  return (
    <div className="App">
      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
      
      <SpotifyHomepage/>
    </div>
  );
}

export default App;
