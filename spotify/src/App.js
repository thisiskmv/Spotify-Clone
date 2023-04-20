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
import getData from './Redux/thunk';
function App() {
  let dispatch=useDispatch();
useEffect(()=>{
  dispatch(thunkActionCreator("token"))
},[])

let data=useSelector((store)=>{
  return store.data;
})
console.log(data)

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
