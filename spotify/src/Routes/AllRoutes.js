import React from 'react';
import {Routes,Route} from "react-router-dom"
import Login from '../Login & Signup/Login';
import SignUp from '../Login & Signup/SignUp';
function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
            </Routes>
        </div>
    );
}

export default AllRoutes;