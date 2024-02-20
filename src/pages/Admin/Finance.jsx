import { ChevronRightIcon } from "@heroicons/react/24/outline";
import UserBalance from "../../components/Finance/UserBalance";
import { FinanceTable } from "../../components/Tables/FininaceTable";
import { useState } from "react";
import { Link } from "react-router-dom";



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


export default function Finance() {


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
                <div className="p-4" >
                    <div className="flex justify-between px-1" >
                        <h1 className="font-bold" >Users Balance</h1>
                        <Link to={"/balances"}>
                            <div className="flex items-center transition-all duration-300 hover:text-blue-800    ">
                                <h1 className="font  ">See All</h1>
                                <ChevronRightIcon className="w-4 h-4" />
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-4 mt-5 gap-5" >
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
                        <UserBalance />
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
