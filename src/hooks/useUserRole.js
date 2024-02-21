import { useState } from "react";
import axios from "axios";

function useUserRole(token) {
    const [userRole, setUserRole] = useState(null);
    const apiUrl = "http://localhost:3000/api/v1/auth/me"; // Replace with your actual API endpoint

    const fetchUserRole = async () => {
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Assuming the response data structure matches your example
            const role = response.data.role.name;
            setUserRole(role); // Update state with new role value
        } catch (error) {
            console.error("Error fetching user role:", error);
            setUserRole(null);
        }
    };

    // Call fetchUserRole directly when token is provided
    if (token) {
        fetchUserRole();
    }

    return userRole;
}

export default useUserRole;
