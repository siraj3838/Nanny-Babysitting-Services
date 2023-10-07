import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const myAuth = {

    }

    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;