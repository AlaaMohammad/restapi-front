import { Navigate , Outlet } from 'react-router-dom'
import { useAuthentication } from '../Context/AuthenticationContext';
function PrivateRoutes() {

    const authToken = localStorage.getItem('authToken');
 
   return (
    authToken ? <Outlet></Outlet> : <Navigate to='/login'/>
   )
  
}

export default PrivateRoutes

