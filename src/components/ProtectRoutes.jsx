/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"


export default function ProtectRoutes({ children }) {
    if (localStorage.getItem("userToken")) {
        return children 
    } else {
        return <Navigate to={"/login"} />
    }
}
