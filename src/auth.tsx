import React from "react";
import { LoginApi } from "@/features/login/libs/api";
import { signInResponse, signInRequest } from "@/features/login/libs/definitions";

interface AuthContextProps {
    currentUser: signInResponse | null
    signIn: (signInRequest: signInRequest) => Promise<signInResponse>
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState<signInResponse | null>(null)

    const signIn = async (signInReqest: signInRequest): Promise<signInResponse> => {
        const response = await LoginApi(signInReqest)
        setCurrentUser(response)
        return response
    }

    return (
        <AuthContext.Provider value={{ currentUser, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthProvider = (): AuthContextProps => {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuthProvider must be used within an AuthProvider")
    }
    return context
}

