/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { SimplePagination } from "./Pagination";
import { DeleteDialog } from "./DeleteDialog";
import { AvatarWithText } from "./avatar";




export function FinanceTable({ TABLE_HEAD, TABLE_ROWS, NumberOfPages, paginate, pageNumber }) {
    return (
        <Card className="h-100 w-full rounded-3xl">
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
                        {/* <NewButtonDialog status={"add"} text={`Add Balance`} type={`Add Balance`}>
                            
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
                                    img,
                                    name,
                                    Current_Balance,
                                    Amount,
                                    date
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-1"
                                    : "p-1 border-b border-blue-gray-50";
                                return (
                                    <tr key={index}>
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
                                            <AvatarWithText img={img}>
                                                <p>{name}</p>
                                                <p>mohamed@gamil.com</p>
                                            </AvatarWithText>
                                            
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
                                                        {Current_Balance}
                                                    </div>
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {Amount}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="pl-7">
                                                {date}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                {/* <NewButtonDialog status={"edit"} text={`edit`} type={``}>
                                                </NewButtonDialog> */}
                                                <h1></h1>
                                            </Tooltip>
                                            <Tooltip content="Delete User">
                                                <DeleteDialog />
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