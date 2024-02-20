/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import useGetRole from "../hooks/useGetRole";

export default function ProtectRoutes({ allowedRoles, children }) {
    const auth = localStorage.getItem("userToken");
    const role = useGetRole()
    const location = useLocation();

    if (auth) {
        if (allowedRoles.includes(role))
            return children
        else
            return <Navigate to={"/unauthorized"} state={{ from: location }} replace />
    } else {
        return <Navigate to={"/login"} state={{ from: location }} replace />
    }


}