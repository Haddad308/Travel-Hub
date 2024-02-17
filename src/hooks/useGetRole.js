import { jwtDecode } from "jwt-decode";

export default function useGetRole() {
    let token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    return decoded.role.name
}