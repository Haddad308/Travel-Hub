import { jwtDecode } from "jwt-decode";

export default function useGetRole() {
    let token = localStorage.getItem("userToken");
    if(!token) return;
    const decoded = jwtDecode(token);
    return decoded.role.name
}
