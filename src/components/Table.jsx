/* eslint-disable react/prop-types */
// import { PencilIcon } from "@heroicons/react/24/solid";
import {
    // ArrowDownTrayIcon,
    // TrashIcon,
    // PlusIcon
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    // Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    // IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { SimplePagination } from "./Pagination";
import { NewButtonDialog } from "./NewButtonDialog";
import { DeleteDialog } from "./DeleteDialog";



export function Table({ TABLE_HEAD, TABLE_ROWS, NumberOfPages, paginate, pageNumber }) {
    // console.log(TABLE_ROWS);
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography component={'span'} variant="h5" color="blue-gray">
                            Recent Transactions
                        </Typography>
                        <Typography component={'span'}  color="gray" className="mt-1 font-normal">
                            These are details about the last transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <NewButtonDialog status={"add"}  />
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
                                    img,
                                    name,
                                    // amount,
                                    // date,
                                    status,
                                    // account,
                                    // accountNumber,
                                    // expiry,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography
                                                component={'span'}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {(index + 1) + (pageNumber-1)*5}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                component={'span'}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography 
                                                    component={'span'}
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    <div className="flex flex-col" >
                                                        <p>Mohamed</p>
                                                        <p>mohamed@gamil.com</p>
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                +201281982770
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-max">
                                                    <Chip
                                                        size="sm"
                                                        variant="ghost"
                                                        value={status}
                                                        color={
                                                            status === "Active"
                                                                ? "green"
                                                                : "red"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <NewButtonDialog status={"edit"} />
                                                
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <DeleteDialog/>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                <SimplePagination NumberOfPages={NumberOfPages} paginate={paginate} />
            </CardFooter>
        </Card>
    );
}