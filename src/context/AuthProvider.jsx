/* eslint-disable react/prop-types */
import { createContext } from 'react';
import app from './../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // Google SignIn

    // Google login 
    const googleLogin = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Send Value 
    const authInfo = { googleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;