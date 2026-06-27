import React, { Children } from 'react'
import { createContext,useEffect,useState } from 'react'

export const AutoContext = createContext();

function AutoProvider({Children}){

  cosnt [user,setUser ] =useState(null);

  useEffect(()=>{
    const saveData = JSON.parse(
      localStorage.getItem("user")
    );
    if(saveData){
      setUser(saveUser);
    }
  },[]);
}
  const login =(name)=>{
  const userData ={name};

  SetUser (userData);
  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  )
}

// const logout =()=>{
//   setUser(null);
//   localStorage.removeItem("user");
// }


function AutoContext() {


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

    
  

export default AutoContext