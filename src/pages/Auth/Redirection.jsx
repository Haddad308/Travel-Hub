// import { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import useGetRole from '../../hooks/useGetRole';
// import { RoleContext } from '../../contexts/RoleContext';

export default function Redirection() {
    const auth = localStorage.getItem("userToken");
    const role = useGetRole()
    console.log("hello from Redirection",role);
    if (auth) {
        if (role === "Admin")
            return <Navigate to={"/Dashboard"} replace />
        else
            return <Navigate to={"/home"} replace />
    } else {
        return <Navigate to={"/login"} />
    }

}
