import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    // const [token, setToken_] = useState(localStorage.getItem("token")?.token);
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [isAdmin, setisAdmin_] = useState(localStorage.getItem("admin"));

    // Function to set the authentication token
    const setToken = (newToken) => {
        localStorage.setItem('token',newToken);
        setToken_(newToken);
    };

    const setIsAdmin = (newIsAdmin) => {
        localStorage.setItem('admin',newIsAdmin);
        setisAdmin_(newIsAdmin);
    };

    // useEffect(() => {
    //     if (token) {
    //         axios.defaults.headers.common["Authorization"] = "token " + token;
    //         localStorage.setItem('token',token);
    //     } else {
    //         delete axios.defaults.headers.common["Authorization"];
    //         localStorage.removeItem('token')
    //     }
    // }, [token]);

  // Memoized value of the authentication context
    
  const contextValue = useMemo(
        () => (
            {
            token,
            setToken,
            isAdmin,
            setIsAdmin,
            }),
        [token]
    );

  // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;