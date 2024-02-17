/* eslint-disable react-hooks/exhaustive-deps */
// import { Table } from "../components/Table";
import { useContext, useEffect, useState } from "react";
import { ServicesTable } from "../../components/Tables/ServicesTable";
import { ServicesTab } from "../../components/ServicesTabs";
import { SelectedServiceContext } from "../../contexts/ServicesContext";
import axios from "axios";
import { tokenContext } from "../../contexts/AuthContext";


const TABS = [
    {
        label: "Hotels",
        value: "hotels",
    },
    {
        label: "hotel-Rooms",
        value: "rooms",
    },
    {
        label: "Flights",
        value: "flights",
    },
    {
        label: "Safari",
        value: "safari",
    },
    {
        label: "Cruises",
        value: "cruises",
    },
    {
        label: "transportations",
        value: "transportation",
    },
    {
        label: "standard-packages",
        value: "StandardPackage",
    },
    {
        label: "Packages",
        value: "CustomPackage",
    }
];




export default function Services() {

    
    
    
    const [services, setServices] = useState([]);
    const [token,] = useContext(tokenContext);
    const [pageNumber, setPageNumber] = useState(1);
    const rowsPerPage = 5;
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = services.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(services.length / rowsPerPage);
    const [selectedService,] = useContext(SelectedServiceContext)

    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    async function getService(service, token) {
        setServices([]);
        let data = await axios.get(`http://localhost:3000/api/v1/${service}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            console.log(error);
        });

        if (data?.status === 200) {
            setServices(data.data)
        }
    }

    useEffect(() => {
        getService(selectedService,token)
    }, [selectedService,token])

    console.log("Heelp ", rowData);

    return (
        <div className="p-6">
            <ServicesTab TABS={TABS} search={false}  >
                <ServicesTable
                    TABLE_ROWS={rowData}
                    NumberOfPages={NumberOfPages}
                    pageNumber={pageNumber}
                    paginate={paginate}
                    getService={getService}
                />
            </ServicesTab>
        </div>
    )
}
