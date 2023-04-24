import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'
import store from '../Redux/store';

const PrivateRoute = ({children}) => {
    
    // let navigate = useNavigate();
    let isAuth =useSelector((store)=>store.isAuth);

    console.log("====isAuth===",isAuth);
    
    return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute