import React, { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) => {
    const [token, setToken] = useState({})
    const [currentUser, setCurrentUser] = useState({})

return(
    <AuthContext.Provider value={{token, setToken, currentUser, setCurrentUser}}>
        {props.children}
    </AuthContext.Provider>
)

}