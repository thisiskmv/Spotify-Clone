import logo from './logo.svg';
import { Button, Text } from '@chakra-ui/react';
import './App.css';
import { SpotifyHomepage } from './Pages/Home';
import DetailsPage from './Pages/DetailsPage';
import LikePage from './Pages/LikePage';

function App() {
  return (
    <div className="App">
    
      {/* <h1>Spotify Clone</h1> */}
      <DetailsPage/>
      {/* <LikePage/> */}
     
    </div>
  );
}

export default App;
