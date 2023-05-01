import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;

/***
 * ------------------------------
 *  Steps:
 * 1. check if user is logged in or not
 * 2. if logged in then allow to visit the route
 * 3. else redirect the user to the login page
 * 4. setup teh private router
 * 5. handle loading
 * 
 * ------------------------------
 * **/ 