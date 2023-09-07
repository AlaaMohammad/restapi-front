import React from 'react'
import AuthAPI from '../../Services/AuthAPI'
import { useAuthentication } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    const { setIsAuthenticated, setAuthUser } = useAuthentication();
    const handleLogout = async (e) => {
        try {
            e.preventDefault()
            await AuthAPI.logout();
            setIsAuthenticated(false)
            localStorage.setItem('authToken', '')
            setAuthUser(null)
            navigate('/login')
        } catch (error) {
            console.error(error)
        }
       
    }
    return (
        <button className='btn btn-primary' onClick={(e) => handleLogout(e)}>logout</button>
    )
}

export default Logout