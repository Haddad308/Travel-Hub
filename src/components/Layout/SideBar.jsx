/* eslint-disable no-unused-vars */
import { AvatarWithText } from "../General/avatar";
import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,

} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    Cog6ToothIcon,
    MapIcon,
    UsersIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    DocumentChartBarIcon,
    WalletIcon,
    BriefcaseIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HomeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { LogOutDialog } from "../Tables/logOutDialog";
import useGetRole from "../../hooks/useGetRole";
import { useEffect, useState } from "react";

export function Sidebar() {

    const role = useGetRole()
    const [selected, setSelected] = useState(0);
    const handleClick = (elementNumber) => {
        setSelected(elementNumber);
    };

    useEffect(() => {
        if (role==="Admin")
            handleClick(0);
        else
            handleClick(8);
    }, [role])

    return (
        <>
            <div className="top-0 bottom-0 lg:left-0 fixed  overflow-y-auto w-[250px] bg-[#415A77] text-white" >
                <header className=" h-[70px] bg-[#344860] p-5 flex content-center ">
                    <MapIcon className="h-6 w-6 mt-1 mr-2" />
                    <h1 className="text-2xl font-semibold">Logo here</h1>
                </header>
                {role === "Admin" ? <List className="text-white" >
                    <Link to={"/"} >
                        <ListItem selected={selected === 0 ? true : false} onClick={() => { handleClick(0); }}>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link to={"/Agencies"} >
                        <ListItem selected={selected === 1 ? true : false} onClick={() => { handleClick(1); }} >
                            <ListItemPrefix>
                                <BriefcaseIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Agencies
                        </ListItem>
                    </Link>
                    <Link to={"/Users"}>
                        <ListItem selected={selected === 2 ? true : false} onClick={() => { handleClick(2); }}>
                            <ListItemPrefix>
                                <UsersIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Users
                        </ListItem>
                    </Link>
                    <Link to={"/Services"} >
                        <ListItem selected={selected === 3 ? true : false} onClick={() => { handleClick(3); }} >
                            <ListItemPrefix>
                                <WrenchScrewdriverIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Services
                        </ListItem>
                    </Link>
                    <Link to={"/Reservation"}>
                        <ListItem variant='small' selected={selected === 4 ? true : false} onClick={() => { handleClick(4); }}>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reservation
                        </ListItem>
                    </Link>
                    <Link to={"/Finance"}>
                        <ListItem selected={selected === 5 ? true : false} onClick={() => { handleClick(5); }}>
                            <ListItemPrefix>
                                <CurrencyDollarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Finance
                        </ListItem>
                    </Link>
                    <Link to={"/reports"}>
                        <ListItem selected={selected === 6 ? true : false} onClick={() => { handleClick(6); }}>
                            <ListItemPrefix>
                                <DocumentChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reports
                        </ListItem>
                    </Link>
                    <Link to={"/Settings"}>
                        <ListItem selected={selected === 7 ? true : false} onClick={() => { handleClick(7); }}>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Setting
                        </ListItem>
                    </Link>
                    <LogOutDialog></LogOutDialog>
                </List> :
                    <List className="text-white" >
                        <Link to={"/home"} >
                            <ListItem selected={selected === 8 ? true : false} onClick={() => { handleClick(8); }}>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                        <Link to={"/UserReservation"}>
                            <ListItem selected={selected === 9 ? true : false} onClick={() => { handleClick(9); }}>
                                <ListItemPrefix>
                                    <WalletIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Reservation
                            </ListItem>
                        </Link>
                        <Link to={"/UserFinance"}>
                            <ListItem selected={selected === 10 ? true : false} onClick={() => { handleClick(10); }}>
                                <ListItemPrefix>
                                    <CurrencyDollarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Finance
                            </ListItem>
                        </Link>
                        <Link to={"/UserSettings"}>
                            <ListItem selected={selected === 11 ? true : false} onClick={() => { handleClick(11); }}>
                                <ListItemPrefix>
                                    <Cog6ToothIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Setting
                            </ListItem>
                        </Link>

                        <LogOutDialog></LogOutDialog>
                    </List>}
                <footer className="absolute w-full  bottom-0 p-3" >
                    <AvatarWithText size={"md"} img={"https://docs.material-tailwind.com/img/face-2.jpg"}>
                        <Typography color="white" variant='small' >
                            Lania Andrew
                        </Typography>
                        <Typography variant="small" color="white" className="text-[#E8E8E8] font-thin">
                            lania.andrew@gmail.com
                        </Typography>
                    </AvatarWithText>
                </footer>
            </div>
        </>
    );
}