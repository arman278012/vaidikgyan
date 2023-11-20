import { createContext, useState } from "react";

export const AppContext = createContext();

const AuthContext = ({ children }) => {


    const [otp, setOtp] = useState("")
    const [phone, setPhone] = useState("")
    const [user, setUser] = useState(null)
    const [checkOtp, setCheckOtp] = useState(null)
    const [showMedia, setShowMedia] = useState(false)
    const [isSticky, setSticky] = useState(false);
    const [verifyOtp, setVerifyOtp] = useState(['', '', '', '', '', '']);


    return (
        <AppContext.Provider value={{
            phone, setPhone, otp, setOtp, user, setUser, checkOtp, setCheckOtp, showMedia, setShowMedia, verifyOtp, setVerifyOtp,
            isSticky, setSticky
        }}>
            {children}
        </AppContext.Provider>
    )
}
export default AuthContext