import { createContext } from "react";
export const AuthFormContext = createContext();
export const AuthFormContextProvider = ({ children }) => {
    return <AuthFormContext.Provider>{...children }</AuthFormContext.Provider>
}