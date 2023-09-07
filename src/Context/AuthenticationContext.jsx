import {createContext,useContext,useState} from 'react';


const AuthenticationContext = createContext(undefined)

export const AuthContextProvider = ({children}) =>{
    const [authUser, setAuthUser] = useState({authUser:''})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const value ={
        authUser,
        setAuthUser,
        isAuthenticated,
        setIsAuthenticated
    }

    return (
        <AuthenticationContext.Provider value={value}> {children}
        </AuthenticationContext.Provider>
    )

}

export const useAuthentication = () => useContext(AuthenticationContext)



