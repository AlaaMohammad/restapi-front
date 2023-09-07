import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthentication } from '../Context/AuthenticationContext';
function PrivateRoute({children}) {

    const {isAuthenticated} = useAuthentication();
 
    if (!isAuthenticated && localStorage.getItem('authToken') == '') {
        return <Navigate to="/login" state={{ from: history.location }} />
    }

    return children;
  
}

export default PrivateRoute