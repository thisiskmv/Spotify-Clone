import logo from './logo.svg';
import { Button, Text } from '@chakra-ui/react';
import './App.css';
import { SpotifyHomepage } from './Pages/Home';
import Login from './Login & Signup/Login';
import SignUp from './Login & Signup/SignUp';
function App() {
  return (
    <div className="App">
      {/* <Login/>  */}
      <SignUp/> 
    </div>
  );
}

export default App;
