/* eslint-disable react/prop-types */
import { createContext } from 'react';
import app from './../firebase/firebase.init';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


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

    // Send Value 
    const authInfo = {
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;