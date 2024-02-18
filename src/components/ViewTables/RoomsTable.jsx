/* eslint-disable react/prop-types */
import { Button, Tooltip, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { DeleteDialog } from '../TableComponents/DeleteDialog';
import { useContext } from 'react';
import { SelectedServiceContext } from '../../contexts/ServicesContext';
import RoomsFormDialog from '../FormDialogs/RoomsFormDialog';

export default function RoomsTable({ rows, deleteService, pageNumber, getService }) {

    const TABLE_HEAD = ["No", "Name", "Type", "Description", "Price", "Actions", ""];
    const [selectedService,] = useContext(SelectedServiceContext)

    return (
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
                {rows.map(({ id, name, type, description, price }, index) => {
                    const isLast = index === rows.length - 1;
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
                                <Tooltip content="Edit room">
                                    <RoomsFormDialog status={"edit"} roomID={id} buttonText={`Edit Room`} dialogTitle={`Edit Room`} getService={getService} />
                                </Tooltip>
                                <Tooltip content="Delete room">
                                    <DeleteDialog onDelete={() => {
                                        deleteService(id, selectedService)
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
                })}
            </tbody>
        </table>
    )
}
