/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,

} from "@material-tailwind/react";
import { SimplePagination } from "../Pagination";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../contexts/AuthContext";
import { SelectedServiceContext } from "../../contexts/ServicesContext";
import axios from "axios";
import HotelFormDialog from "../FormDialogs/HotelFormDialog";
import HotelsTable from "../ViewTables/HotelsTable";
import RoomsFormDialog from "../FormDialogs/RoomsFormDialog";
import RoomsTable from "../ViewTables/RoomsTable";


export function ServicesTable({ TABLE_ROWS, NumberOfPages, paginate, pageNumber, getService }) {

    const [token,] = useContext(tokenContext);
    const [selectedService,] = useContext(SelectedServiceContext)
    const [, setTableRows] = useState(TABLE_ROWS);

    const componentsAdd = {
        "Hotels": <HotelFormDialog status={"add"} buttonText={`New Hotel`} dialogTitle={`New Hotel`} getService={getService} />,
        "hotel-Rooms": <RoomsFormDialog status={"add"} buttonText={`New ${selectedService}`} dialogTitle={`New ${selectedService}`} getService={getService} />,
        "Flights": "",
        "Safari": "",
        "Cruises": "",
        "transportations": "",
        "standard-packages": "",
        "CustomPackage": "",
    }

    const tables = {
        "Hotels": <HotelsTable deleteService={DeleteService} rows={TABLE_ROWS} pageNumber={pageNumber} getService={getService} /> ,
        "hotel-Rooms": <RoomsTable deleteService={DeleteService} rows={TABLE_ROWS} pageNumber={pageNumber} getService={getService} />,
        "Flights": "",
        "Safari": "",
        "Cruises": "",
        "transportations": "",
        "standard-packages": "",
        "CustomPackage": "",
    }

    async function DeleteService(id, service) {
        console.log("hi fo");
        let data = await axios.delete(`http://localhost:3000/api/v1/${service}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            console.log(error.message);
        });

        if (data?.status === 200) {
            console.log(data);
        }
        getService(service, token);
    }

    useEffect(() => {
        setTableRows(TABLE_ROWS); // Update the table rows when TABLE_ROWS prop changes
    }, [TABLE_ROWS]);

    return (
        <Card className="h-100 w-full rounded-xl shadow-none	">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography component={'span'} variant="h5" color="blue-gray">
                            Recent Transactions
                        </Typography>
                        <Typography component={'span'} color="gray" className="mt-1 font-normal">
                            These are details about the last transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        {componentsAdd[selectedService]}
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-none py-2 px-0">
                {tables[selectedService]}
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4 pb-0">
                <SimplePagination NumberOfPages={NumberOfPages} paginate={paginate} />
            </CardFooter>
        </Card>
    );
}