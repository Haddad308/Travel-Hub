import { useContext, useEffect, useState } from "react";
import { Table } from "../../components/Tables/Table";
import { tokenContext } from "../../contexts/AuthContext";
import axios from "axios";
import GetNumberOfPages from "../../Middlewares/GetNumberOfPages";

export default function Users() {
    const Headers = ["No", "Agency", "User", "Actions"];
    const [token,] = useContext(tokenContext);
    const [users, SetUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [, setApiError] = useState("");


    async function getUsers(token) {
        setApiError("");
        setIsLoading(true)
        let data = await axios.get("http://localhost:3000/api/v1/users?limit=50", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            setApiError(error.message);
            setIsLoading(false)
        });

        if (data?.status === 200) {
            SetUsers(data.data.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUsers(token)
    }, [token])

    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const { rowData, NumberOfPages } = GetNumberOfPages(pageNumber, users, 5)


    return (
        <div className="p-6">
            <Table
                TABLE_HEAD={Headers}
                TABLE_ROWS={rowData}
                NumberOfPages={NumberOfPages}
                pageNumber={pageNumber}
                paginate={paginate}
                getUsers={getUsers}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
            />
        </div>
    );
}
