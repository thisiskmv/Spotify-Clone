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
import { useEffect } from 'react';
import store from "./Redux/store"
import getData from './Redux/thunk';
function App() {

let timer=Date.now();
let dispatch=useDispatch();
// var spotify_token = JSON.parse(localStorage.getItem('spotify_token'))
let spotify_time=useSelector((store)=>{
  return store.token.time
})
// console.log(spotify_time)

let token=useSelector((store)=>{
  return store.token.toke
})
console.log(token)


  
// let token_timer = localStorage.getItem('token_timer',"time")||0
 
// setInterval(function(){
//   time = today.toTimeString()[0]+today.toTimeString()[1];
// },3000)
 
// if(token_timer === "0" || time!=token_timer || spotify_token == undefined || spotify_token == null){
//   localStorage.setItem('token_timer', time)
//   localStorage.removeItem("spotify_token");
//   // refreshToken()
//   console.log("Your new generated token is this", spotify_token)
// }
// store.subscribe(()=>{

// })
// useEffect(()=>{
//   // if(Math.floor(( timer - spotify_time/1000/60))>59){
//     
//   // }else {
  
//   // }
//   // 
// },[])
useEffect(()=>{
  dispatch(thunkActionCreator("token"))
  dispatch(thunkActionCreator("playlist"))
},[])

// let data=useSelector((store)=>{
//   return store.data;
// })
// console.log(data)

  return (
    <div className="App">
      {/* <Login/>  */}
      {/* <SignUp/>  */}
      {/* <Navbar/> */}
      {/* <AllRoutes/> */}
      
    </div>
  );
}

export default App;
