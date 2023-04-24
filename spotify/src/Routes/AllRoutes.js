import {useState} from 'react';
import {Routes,Route} from "react-router-dom"
import Login from '../Login & Signup/Login';
import SignUp from '../Login & Signup/SignUp';
import { SpotifyHomepage } from '../Pages/Home';
import DetailsPage from '../Pages/DetailsPage';
import SearchPage from '../Search/SearchPage';
import { useDebounce } from "use-debounce";
import UserProfile from '../Pages/Profile';
import LikePage from '../Pages/LikePage';
import PrivateRoute from './PrivateRoute';
function AllRoutes(props) {
    let [query, setQuery] = useState("");
    let [debouncedText] = useDebounce(query, 1000);
    return (
        <div>
            <Routes>
                <Route path='/' element={<SpotifyHomepage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
                <Route path='/search' element={<SearchPage action={setQuery} debouncedText={'kesariya'} />}></Route>
                <Route path='/profile' element={<PrivateRoute><UserProfile /></PrivateRoute>}></Route>
                <Route path='/playlist' element={<PrivateRoute><DetailsPage/></PrivateRoute>}></Route>
                <Route path='/likedsong' element={<PrivateRoute><LikePage/></PrivateRoute>}></Route>
            </Routes>
        </div>
    );
}

export default AllRoutes;