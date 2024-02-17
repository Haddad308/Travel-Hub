import { useContext, useEffect, useState } from "react";
import { Table } from "../../components/Tables/Table";
import { tokenContext } from "../../contexts/AuthContext";
import axios from "axios";

export default function Users() {
    const Headers = ["No", "Agency", "User", "Actions"];
    const [token,] = useContext(tokenContext);
    const [users, SetUsers] = useState([]);
    const [, setApiError] = useState("");
    

    async function getUsers(token) {
        setApiError("");

        let data = await axios.get("http://localhost:3000/api/v1/users?limit=50", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            setApiError(error.message);
        });

        if (data?.status === 200) {
            SetUsers(data.data.data)
        }
    }

    useEffect(() => {
        getUsers(token)
    }, [token])


    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const rowsPerPage = 5;
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = users.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(users.length / rowsPerPage);


    return (
        <div className="p-6">
            <Table
                TABLE_HEAD={Headers}
                TABLE_ROWS={rowData}
                NumberOfPages={NumberOfPages}
                pageNumber={pageNumber}
                paginate={paginate}
                getUsers={getUsers}
            />
        </div>
    );
}
