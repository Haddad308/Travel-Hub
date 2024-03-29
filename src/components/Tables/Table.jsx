/* eslint-disable react/prop-types */
import axios from "axios";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { SimplePagination } from "../TableComponents/Pagination";
import { DeleteDialog } from "../TableComponents/DeleteDialog";
import { useContext } from "react";
import { tokenContext } from "../../contexts/AuthContext";
import UserFormDialog from "../FormDialogs/UserFormDialog";
import { Avatar, Skeleton } from "@nextui-org/react";


export function Table({ isLoading, TABLE_HEAD, TABLE_ROWS, NumberOfPages, paginate, pageNumber, getUsers }) {
    // Define the number of rows and columns
    const skel = [1, 2, 3, 4, 5]
    const [token,] = useContext(tokenContext);

    async function DeleteItem(id) {
        console.log("hi");
        let data = await axios.delete(`http://localhost:3000/api/v1/users/${id}`, {
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
        getUsers(token);
    }

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography component={'span'} variant="h5" color="blue-gray">
                            Current users
                        </Typography>
                        <Typography component={'span'} color="gray" className="mt-1 font-normal">
                            These are details about the current users
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <UserFormDialog status={"add"} text={"New User"} type={"New user"} getUsers={getUsers} />
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
                        {isLoading ? skel.map((id) => {
                            const classes = " justify-center items-center  p-5 border-b border-blue-gray-50";
                            return (
                                <tr key={id}>
                                    <td className={classes}>
                                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                                    </td>
                                    <td className={classes}>
                                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                                    </td>
                                    <td className={classes}>
                                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                                    </td>
                                    <td className={classes}>
                                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                                    </td>
                                    <td className={classes}>
                                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                                    </td>
                                </tr>)
                        }) : TABLE_ROWS.map(
                            (
                                {
                                    id,
                                    email,
                                    firstName,
                                    lastName,
                                    profilePhoto,
                                    travelOffice
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-1 pt-2"
                                    : "p-1 pt-2 border-b border-blue-gray-50";
                                return (
                                    <tr key={id}>
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
                                                    {travelOffice ? travelOffice.name : "Not connected"}
                                                </div>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                {profilePhoto?.imageUrl ? <Avatar
                                                    src={profilePhoto.imageUrl}
                                                    size="md"
                                                    isBordered={true}
                                                /> : <Avatar showFallback src='https://images.unsplash.com/broken' />}

                                                <Typography
                                                    component={'span'}
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    <div className="flex flex-col" >
                                                        <p>{firstName + " " + lastName}</p>
                                                        <p>{email}</p>
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <UserFormDialog status={"edit"} text={"Edit User"} type={"Edit user"} getUsers={getUsers} UserId={id} />
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <DeleteDialog onDelete={() => {
                                                    DeleteItem(id)
                                                }} />
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