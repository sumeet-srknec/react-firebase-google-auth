import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../firebase/fire";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { useState } from "react";

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error) {
        return error;
    }
}

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const creds = GoogleAuthProvider.credentialFromResult(result);
        const token = creds.accessToken;
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
        const errorCode = error.error;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error)
    })
}

export const logout = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        return error;
    }
}

export const signUp = async(email, password, userData) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", user.user.uid), {
            ...userData,
            uid: user.user.uid
        });

        return user.user;
    } catch (error) {
        return error;
    }
}