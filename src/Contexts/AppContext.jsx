import React, { createContext, useReducer, useState } from 'react'
export const AppContext = createContext();
const inState ={
    email:"",
    password:""
}

const AppContextProvider = ({children}) => {
    const [register, setRegister] = useState({inState});
    const [isAuth, setIsAuth] = useState(false);
    const handleAuth=()=>{
        setIsAuth(!isAuth);
    }
console.log(isAuth)
  return (
    <AppContext.Provider value={{register, setRegister, isAuth, setIsAuth, handleAuth}}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider