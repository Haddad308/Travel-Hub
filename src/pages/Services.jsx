// import { Table } from "../components/Table";
import {  useState } from "react";
import { ServicesTable } from "../components/ServicesTable";
import { ServicesTab } from "../components/ServicesTabs";
// import { SelectedServiceContext } from "../contexts/ServicesContext";

const TABS = [
    // {
    //     label: "All",
    //     value: "all",
    // },
    {
        label: "Hotels",
        value: "hotels",
    },
    {
        label: "Rooms",
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
        label: "Transportation",
        value: "transportation",
    },
    {
        label: "Standard Package",
        value: "StandardPackage",
    },
    {
        label: "Custom Package",
        value: "CustomPackage",
    }
];

const heads = ["No", "Service Name", "Quantity", "Reserved", "Status", "Actions",""];

const hotels = [
    { "Service_Name": "Single Room", "Quantity": 5, "Reserved": 2, "status": "Available" },
    { "Service_Name": "Double Room", "Quantity": 8, "Reserved": 3, "status": "Available" },
    { "Service_Name": "Suite", "Quantity": 3, "Reserved": 1, "status": "Unavailable" },
    { "Service_Name": "Conference Room", "Quantity": 2, "Reserved": 0, "status": "Available" },
    { "Service_Name": "Poolside Cabana", "Quantity": 10, "Reserved": 5, "status": "Available" },
    { "Service_Name": "Gym Access", "Quantity": 15, "Reserved": 7, "status": "Available" },
    { "Service_Name": "Spa Treatment", "Quantity": 4, "Reserved": 2, "status": "Available" },
    { "Service_Name": "Airport Shuttle", "Quantity": 3, "Reserved": 1, "status": "Available" },
    { "Service_Name": "Breakfast Buffet", "Quantity": 20, "Reserved": 10, "status": "Available" },
    { "Service_Name": "WiFi Access", "Quantity": 50, "Reserved": 15, "status": "Available" }
];


export default function Services() {

    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };
    const rowsPerPage = 5;
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = hotels.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(hotels.length / rowsPerPage);

    function test(){
        console.log("hello from services");
    }

    return (
        <div className="p-6">
            <ServicesTab filter={test} TABS={TABS} search={false}  >
                <ServicesTable
                    TABLE_HEAD={heads}
                    TABLE_ROWS={rowData}
                    NumberOfPages={NumberOfPages}
                    pageNumber={pageNumber}
                    paginate={paginate}
                />
            </ServicesTab>
        </div>
    )
}
