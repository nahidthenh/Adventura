/* eslint-disable react/prop-types */
import { createContext } from 'react';
import app from './../firebase/firebase.init';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const AuthProvider = ({ children }) => {

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

    // Send Value 
    const authInfo = {
        googleLogin,
        githubLogin,
        createAccountWithEmailPws,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;