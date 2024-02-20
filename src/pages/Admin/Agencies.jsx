/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../contexts/AuthContext";
import axios from "axios";
import GetNumberOfPages from "../../Middlewares/GetNumberOfPages";
import { AgenciesTable } from "../../components/Tables/AgenciesTable";

export default function Agencies() {
    const Headers = ["No", "Agency", "Phone", "City", "Actions"];
    const [token,] = useContext(tokenContext);
    const [agencies, SetAgencies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [, setApiError] = useState("");
    

    async function getAgencies(token) {
        
        setApiError("");
        setIsLoading(true)
        let data = await axios.get("http://localhost:3000/api/v1/travel-offices", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            console.log(error);
            setApiError(error.message);
            setIsLoading(false)
        });

        if (data?.status === 200) {
            SetAgencies(data.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAgencies(token)
    }, [token])

    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    console.log(agencies);
    const { rowData, NumberOfPages } = GetNumberOfPages(pageNumber, agencies, 5)

    return (
        <div className="p-6">
            <AgenciesTable
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                TABLE_HEAD={Headers}
                TABLE_ROWS={rowData}
                NumberOfPages={NumberOfPages}
                pageNumber={pageNumber}
                paginate={paginate}
                getAgencies={getAgencies}
            />
        </div>
    )
}
