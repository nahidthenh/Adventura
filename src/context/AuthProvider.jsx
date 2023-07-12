/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.init';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Google SignIn
    const googleLogin = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // GitHub SignIn 
    const githubLogin = () => {
        // setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // Create Account with email password 
    const createAccountWithEmailPws = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login Account With email password
    const loginAccountWithEmailPws = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update User Profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const userLogOut = () => {
        return signOut(auth)
    }

    // Use Effect 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }

            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    // Send Value 
    const authInfo = {
        googleLogin,
        githubLogin,
        createAccountWithEmailPws,
        loginAccountWithEmailPws,
        updateUserProfile,
        userLogOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;