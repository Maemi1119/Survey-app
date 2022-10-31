import React, { createContext, useContext, useState } from 'react';

const AuthContext = React.createContext();
export default function AnswerPass({children}){

    const [pass,setPass] = React.useState(false);
    
    function truePass () {
        setPass(true);
    }
    
    function badPass () {
        setPass(false);
    }
    
    const auth = {
        pass,
        truePass,
        badPass
    };
  
    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

      const useAuth = () => {
      const context = useContext(AuthContext);
    
      return context;
    };


export {useAuth};