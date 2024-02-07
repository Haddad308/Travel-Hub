/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { SimplePagination } from "../Pagination";
import { DeleteDialog } from "../DeleteDialog";
import { SelectedServiceContext } from "../../contexts/ServicesContext";
import { useContext } from "react";
import NewHotelForm from "../Forms/NewHotelForm";
import NewRoomForm from "../Forms/NewRoomForm";
import NewFlightForm from "../Forms/NewFlightForm";
import NewSafariForm from "../Forms/NewSafariForm";
import NewCruiseForm from "../Forms/NewCruiseForm";
import NewTransportationForm from "../Forms/NewTransportationFrom";
import NewStandardPackageForm from "../Forms/NewStandardPackageForm";
import NewCustomPackageForm from "../Forms/NewCustomPackageForm";
import { Link } from "react-router-dom";

const serviceForms = {
    Hotels: NewHotelForm,
    Rooms: NewRoomForm,
    Flights: NewFlightForm,
    Safari: NewSafariForm,
    Cruises: NewCruiseForm,
    Transportation: NewTransportationForm,
    'Standard Package': NewStandardPackageForm,
    'Custom Package': NewCustomPackageForm,
};


export function ServicesTable({ TABLE_HEAD, TABLE_ROWS, NumberOfPages, paginate, pageNumber }) {
    // console.log(TABLE_ROWS);
    // const [selectedService,] = useContext(SelectedServiceContext)
    // const FormComponent = serviceForms[selectedService];

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
                        {/* <NewButtonDialog status={"add"} text={`New ${selectedService}`} type={`New ${selectedService}`}>
                            {FormComponent && <FormComponent />}
                        </NewButtonDialog> */}
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-none py-2 px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        component={'span'}
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    Service_Name,
                                    Quantity,
                                    Reserved,
                                    status
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-1"
                                    : "p-1 border-b border-blue-gray-50";
                                return (
                                    <tr key={Service_Name}>
                                        <td className={classes}>
                                            <Typography
                                                component={'span'}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                <div className="pl-4" >
                                                    {(index + 1) + (pageNumber - 1) * 5}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                component={'span'}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                <div className="pl-3">
                                                    {Service_Name}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="">
                                                <Typography
                                                    component={'span'}
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    <div className="pl-5">

                                                        {Quantity}
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {Reserved}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center">
                                                <div className="w-max">
                                                    <Chip
                                                        size="sm"
                                                        variant="ghost"
                                                        value={status}
                                                        color={
                                                            status === "Available"
                                                                ? "green"
                                                                : "red"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                {/* <NewButtonDialog status={"edit"} text={`New ${selectedService}`} type={`Edit ${selectedService}`}>{FormComponent && <FormComponent />}
                                                </NewButtonDialog> */}
                                                <h1></h1>
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <DeleteDialog />
                                            </Tooltip>
                                        </td>
                                        <td className={classes}>
                                            <Link to={"/details"}>
                                                <Button className="bg-[#616CA8] rounded-2xl normal-case p-3 py-2"
                                                >View</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4 pb-0">
                <SimplePagination NumberOfPages={NumberOfPages} paginate={paginate} />
            </CardFooter>
        </Card>
    );
}