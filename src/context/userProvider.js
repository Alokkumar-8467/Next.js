"use client";

import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userSignUpService';



const UserProvider = ({ children}) => {

    const [user, setUser] = useState(undefined);

useEffect(() => {
    async function load(){
    try {
       const logUser =  currentUser();
       console.log(logUser)
       setUser({...logUser})
    } catch (error) {
        console.log(error);
        toast.error("error in loading current user",
        setUser(undefined)
        );
    
    }
    load();
}
}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  );
};

export default UserProvider
