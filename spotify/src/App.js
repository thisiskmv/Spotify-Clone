import logo from './logo.svg';
import { Button, Text } from '@chakra-ui/react';
import './App.css';
import { SpotifyHomepage } from './Pages/Home';


function App() {
  return (
    <div className="App">
    
      {/* <h1>Spotify Clone</h1> */}
     
      <SpotifyHomepage/>
    </div>
  );
}

export default App;
