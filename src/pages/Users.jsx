import { useState } from "react";
import { Table } from "../components/Table";

export default function Users() {
    const h = ["No", "Agency", "User", "Contact", "Status", "Actions"];

    const r = [
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Spotify",
            "amount": "$2,500",
            "date": "Wed 3:00pm",
            "status": "Active",
            "account": "visa",
            "accountNumber": "1234",
            "expiry": "06/2026"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Netflix",
            "amount": "$1,800",
            "date": "Mon 8:30am",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "5678",
            "expiry": "09/2025"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Amazon Prime",
            "amount": "$1,200",
            "date": "Fri 5:45pm",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "9012",
            "expiry": "12/2023"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Hulu",
            "amount": "$1,000",
            "date": "Tue 11:15am",
            "status": "Active",
            "account": "visa",
            "accountNumber": "3456",
            "expiry": "03/2024"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Disney+",
            "amount": "$2,200",
            "date": "Thu 2:45pm",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "7890",
            "expiry": "10/2023"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Apple Music",
            "amount": "$1,500",
            "date": "Wed 6:30pm",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "2345",
            "expiry": "08/2022"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Google Drive",
            "amount": "$800",
            "date": "Mon 10:00am",
            "status": "Active",
            "account": "visa",
            "accountNumber": "6789",
            "expiry": "07/2025"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Microsoft 365",
            "amount": "$2,700",
            "date": "Fri 4:20pm",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "1234",
            "expiry": "11/2024"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Twitch",
            "amount": "$1,100",
            "date": "Tue 9:45am",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "5678",
            "expiry": "04/2023"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Adobe Creative Cloud",
            "amount": "$1,900",
            "date": "Thu 1:15pm",
            "status": "Active",
            "account": "visa",
            "accountNumber": "9012",
            "expiry": "02/2026"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Slack",
            "amount": "$1,300",
            "date": "Wed 7:30pm",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "3456",
            "expiry": "05/2024"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Zoom",
            "amount": "$2,300",
            "date": "Mon 12:00pm",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "7890",
            "expiry": "09/2022"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "LinkedIn Premium",
            "amount": "$1,600",
            "date": "Fri 3:45pm",
            "status": "Active",
            "account": "visa",
            "accountNumber": "2345",
            "expiry": "12/2025"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Dropbox",
            "amount": "$900",
            "date": "Tue 11:30am",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "6789",
            "expiry": "06/2023"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Evernote",
            "amount": "$2,000",
            "date": "Thu 2:00pm",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "1234",
            "expiry": "01/2022"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "WhatsApp",
            "amount": "$1,400",
            "date": "Wed 5:15pm",
            "status": "Active",
            "account": "visa",
            "accountNumber": "5678",
            "expiry": "08/2024"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Twitter",
            "amount": "$1,000",
            "date": "Mon 8:45am",
            "status": "Pending",
            "account": "mastercard",
            "accountNumber": "9012",
            "expiry": "03/2023"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Reddit Premium",
            "amount": "$2,500",
            "date": "Fri 6:30pm",
            "status": "Expired",
            "account": "amex",
            "accountNumber": "3456",
            "expiry": "10/2022"
        },
        {
            "img": "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
            "name": "Pinterest",
            "amount": "$1,200",
            "date": "Tue 10:00am",
            "status": "Active",
            "account": "visa",
            "accountNumber": "7890",
            "expiry": "07/2025"
        }
    ]


    const [pageNumber, setPageNumber] = useState(1);
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
    };

    const rowsPerPage = 5;
    const indexFirstItem = (pageNumber - 1) * rowsPerPage;
    const indexLastItem = pageNumber * rowsPerPage;
    const rowData = r.slice(indexFirstItem, indexLastItem);
    const NumberOfPages = Math.ceil(r.length / rowsPerPage);
    
    
    return (
        <div className="p-6">
            <Table
                TABLE_HEAD={h}
                TABLE_ROWS={rowData}
                NumberOfPages={NumberOfPages}
                pageNumber={pageNumber}
                paginate={paginate}
            />
        </div>
    );
}
