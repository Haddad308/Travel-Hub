/* eslint-disable react/prop-types */
import { Button, Tooltip, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { DeleteDialog } from '../DeleteDialog';
import HotelFormDialog from '../FormDialogs/HotelFormDialog';
import { useContext } from 'react';
import { SelectedServiceContext } from '../../contexts/ServicesContext';

export default function HotelsTable({ rows, deleteService, pageNumber, getService }) {

    const TABLE_HEAD = ["No", "name", "address", "state", "website", "Actions", ""];
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
                {rows.map(({ id, name, address, state, website }, index) => {
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
                                            {address}
                                        </div>
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <div className="">
                                        <Typography component={'span'} variant="small" color="blue-gray" className="font-normal">
                                            <div className="pl-5">
                                                {state}
                                            </div>
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div className="pl-7">
                                        {website}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Tooltip content="Edit Hotel">
                                        <HotelFormDialog status={"edit"} hotelID={id} buttonText={`New Hotel`} dialogTitle={`New Hotel`} getService={getService} />
                                    </Tooltip>
                                    <Tooltip content="Delete Hotel">
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
