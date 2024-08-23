import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase/fire';

const UserContext = createContext();

export const UserAuth = () => {
    return useContext(UserContext);
}

export default function AuthContextProvider({ children }) {
    const [isLoggedOut, setIsLoggedOut] = useState(true);
    const [user, setUser] = useState(null);
    const [authProvider, setAuthProvider] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setIsLoggedOut(false);

                let authProviderID = currentUser?.providerData[0]?.providerId;
                console.log("auth-provider", authProviderID)
                setAuthProvider(authProviderID)

                if (authProviderID === 'password') {
                    onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
                        setUser(doc.data());
                    });
                } else {
                    setUser(currentUser);
                }
                
                console.log("it run again");
            } else {
                setIsLoggedOut(true);
            }
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ isLoggedOut, user, authProvider }}>
            {children}
        </UserContext.Provider>
    )
}
