import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const myAuth = {
        createUser
    }

    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;