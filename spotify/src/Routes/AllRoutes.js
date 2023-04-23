import React from 'react';
import {Routes,Route} from "react-router-dom"
import Login from '../Login & Signup/Login';
import SignUp from '../Login & Signup/SignUp';
import { SpotifyHomepage } from '../Pages/Home';
import DetailsPage from '../Pages/DetailsPage';
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SpotifyHomepage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
                <Route path='/playlist/:playlistId' element={<DetailsPage/>}></Route>
            </Routes>
        </div>
    );
}

export default AllRoutes;