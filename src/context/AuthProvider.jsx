/* eslint-disable react/prop-types */
import { createContext } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


    const authInfo = { displayName: 'Nahid' }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;