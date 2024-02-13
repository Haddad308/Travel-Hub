/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { SimplePagination } from "../Pagination";
import { DeleteDialog } from "../DeleteDialog";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../contexts/AuthContext";
import { SelectedServiceContext } from "../../contexts/ServicesContext";
import axios from "axios";
import AddButton from "../Add/AddButton";


export function ServicesTable({ TABLE_HEAD, TABLE_ROWS, NumberOfPages, paginate, pageNumber, getService }) {

    const [tableRows, setTableRows] =useState(TABLE_ROWS);
    const [token,] = useContext(tokenContext);
    const [selectedService,] = useContext(SelectedServiceContext)

    async function DeleteService(id,service) {
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
        getService(service,token);
    }

    useEffect(() => {
        setTableRows(TABLE_ROWS); // Update the table rows when TABLE_ROWS prop changes
    }, [TABLE_ROWS]);

    const hotels = TABLE_HEAD.length === 8 ? true : false;
    console.log(TABLE_ROWS);

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
                        <AddButton buttonText={`New ${selectedService}`} dialogTitle={`New ${selectedService}`} addedItem={"hotels"} />
                        {/* <NewServiceForm status={"add"} text={`New ${selectedService}`} /> */}
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
                        {hotels ? (
                            tableRows.map(({ id,name, type, description, price, quantityAvailable }, index) => {
                                const isLast = index === tableRows.length - 1;
                                const classes = isLast ? "p-1" : "p-1 border-b border-blue-gray-50";
                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                <div className="pl-4">
                                                    {(index + 1) + (pageNumber - 1) * 5}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                <div className="pl-3">
                                                    {name}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                <div className="pl-3">
                                                    {type}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="">
                                                <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                    <div className="pl-5">
                                                        {description}
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {price}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {quantityAvailable}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit Hotel">
                                                {/* <NewButtonDialog status={"edit"} text={`New ${selectedService}`} type={`Edit ${selectedService}`}>{FormComponent && <FormComponent />}
                        </NewButtonDialog> */}
                                                <h1></h1>
                                            </Tooltip>
                                            <Tooltip content="Delete Hotel">
                                                <DeleteDialog onDelete={() => {
                                                    DeleteService(id,selectedService)
                                                }} />
                                            </Tooltip>
                                        </td>
                                        <td className={classes}>
                                            <Link to={"/details"}>
                                                <Button className="bg-[#616CA8] rounded-2xl normal-case p-3 py-2">
                                                    View
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                                tableRows.map(({ id,name, address, state, website }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-1" : "p-1 border-b border-blue-gray-50";
                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                <div className="pl-4">
                                                    {(index + 1) + (pageNumber - 1) * 5}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                <div className="pl-3">
                                                    {name}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="">
                                                <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                                    <div className="pl-5">
                                                        {address}
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {state}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {website}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                {/* <NewButtonDialog status={"edit"} text={`New ${selectedService}`} type={`Edit ${selectedService}`}>{FormComponent && <FormComponent />}
                        </NewButtonDialog> */}
                                                <h1></h1>
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <DeleteDialog onDelete={() => {
                                                    DeleteService(id, selectedService)
                                                }} />
                                            </Tooltip>
                                        </td>
                                        <td className={classes}>
                                            <Link to={"/details"}>
                                                <Button className="bg-[#616CA8] rounded-2xl normal-case p-3 py-2">
                                                    View
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
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