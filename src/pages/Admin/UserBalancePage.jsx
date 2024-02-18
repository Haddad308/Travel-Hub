import { useState } from "react";
import { FinanceTable } from "../../components/Tables/FininaceTable";
import { AvatarWithText } from "../../components/General/avatar";
import { Chip } from "@material-tailwind/react";

const heads = ["No", "User", "Current Balance", "Amount", "Date", "Actions"];

const transactions = [
    {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/face-2.jpg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    }, {
        "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        "name": "Spotify",
        "Current_Balance": "$2,500",
        "Amount": "Active",
        "date": "Wed 3:00pm",
    },
];



export default function UserBalancePage() {

    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };
    const rowsPerPage = 5;
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = transactions.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(transactions.length / rowsPerPage);

    return (
        <div>
            <div className="m-6 bg-white rounded-3xl" >
                <div className="mt-5 p-3" >
                    <div className=" p-5 rounded-2xl border-2 flex justify-around items-center w-full" >
                        <AvatarWithText size={"xl"} img={"https://docs.material-tailwind.com/img/face-2.jpg"}>
                            <p className="font-semibold " >Travel agency</p>
                            <p className="text-gray-600">agency@ca.com</p>
                        </AvatarWithText>
                        <div className="bg-gray-300 w-[2px] h-24 mx-4 flex items-center">
                            <span className="text-gray-600">&nbsp;</span>
                        </div>
                        <div className="w-64 grid gap-2">
                            <div className="flex justify-between">
                                <p className="font-bold">Member Since:</p>
                                <p>15/1/2024</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-bold" >Contact:</p>
                                <p>+201281982770</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-bold">Status:</p>
                                <Chip
                                    size="sm"
                                    variant="ghost"
                                    value="Active"
                                    color={"green"}
                                />
                            </div>
                        </div>
                        <div className="bg-gray-300 w-[2px] h-24   mx-4 flex items-center">
                            <span className="text-gray-600">&nbsp;</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold">Current Balance:</h1>
                            <h2 className="mt-2  font-light" >50,000$</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-0"  >
                <FinanceTable
                    TABLE_HEAD={heads}
                    TABLE_ROWS={rowData}
                    NumberOfPages={NumberOfPages}
                    pageNumber={pageNumber}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
