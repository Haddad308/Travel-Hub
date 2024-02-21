/* eslint-disable react-hooks/exhaustive-deps */
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
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../contexts/AuthContext";

export function Sidebar() {

    const role = useGetRole();
    const selected = useRef(0);
    const [token] = useContext(tokenContext);
    const [user, setUser] = useState("");

    const handleClick = (elementNumber) => {
        selected.current = elementNumber;
        localStorage.setItem('selectedItem', elementNumber); // Store selected item in localStorage
    };

    async function getUser(token) {
        let data = await axios.get("http://localhost:3000/api/v1/auth/me", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        ).catch((error) => {
            console.log(error.message);
        });

        if (data?.status === 200) {
            setUser(data.data)
        }
    }

    useEffect(() => {
        getUser(token); // Assuming getUser is a function to fetch user data
    }, [token]); // Make sure to include setSelected in the dependencies array if it's a dependency



    useEffect(() => {
        const selectedItem = localStorage.getItem('selectedItem'); // Retrieve selected item from localStorage
        const initialSelectedItem = role === "Admin" ? 0 : 8;
        selected.current = selectedItem ? parseInt(selectedItem) : initialSelectedItem; // Set selected item from localStorage or default based on role
    }, [role]);

    return (
        <>
            <div className="top-0 bottom-0 lg:left-0 fixed  overflow-y-auto w-[250px] bg-[#415A77] text-white" >
                <header className=" h-[70px] bg-[#344860] p-5 flex content-center ">
                    <MapIcon className="h-6 w-6 mt-1 mr-2" />
                    <h1 className="text-2xl font-semibold">Logo here</h1>
                </header>
                {role === "Admin" ? <List className="text-white" >
                    <Link to={"/"} >
                        <ListItem selected={selected.current === 0 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(0); }}>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link to={"/Agencies"} >
                        <ListItem selected={selected.current === 1 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(1); }} >
                            <ListItemPrefix>
                                <BriefcaseIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Agencies
                        </ListItem>
                    </Link>
                    <Link to={"/Users"}>
                        <ListItem selected={selected.current === 2 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(2); }}>
                            <ListItemPrefix>
                                <UsersIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Users
                        </ListItem>
                    </Link>
                    <Link to={"/Services"} >
                        <ListItem selected={selected.current === 3 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(3); }} >
                            <ListItemPrefix>
                                <WrenchScrewdriverIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Services
                        </ListItem>
                    </Link>
                    <Link to={"/Reservation"}>
                        <ListItem variant='small' selected={selected.current === 4 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(4); }}>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reservation
                        </ListItem>
                    </Link>
                    <Link to={"/Finance"}>
                        <ListItem selected={selected.current === 5 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(5); }}>
                            <ListItemPrefix>
                                <CurrencyDollarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Finance
                        </ListItem>
                    </Link>
                    <Link to={"/reports"}>
                        <ListItem selected={selected.current === 6 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(6); }}>
                            <ListItemPrefix>
                                <DocumentChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reports
                        </ListItem>
                    </Link>
                    <Link to={"/Settings"}>
                        <ListItem selected={selected.current === 7 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(7); }}>
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
                            <ListItem selected={selected.current === 8 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(8); }}>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                        <Link to={"/UserReservation"}>
                            <ListItem selected={selected.current === 9 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(9); }}>
                                <ListItemPrefix>
                                    <WalletIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Reservation
                            </ListItem>
                        </Link>
                        <Link to={"/UserFinance"}>
                            <ListItem selected={selected.current === 10 ? true : false} onClick={(e) => { e.stopPropagation(); handleClick(10); }}>
                                <ListItemPrefix>
                                    <CurrencyDollarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Finance
                            </ListItem>
                        </Link>
                        <Link to={"/UserSettings"}>
                            <ListItem selected={selected.current === 11 ? true : false} onClick={(e) => {
                                e.stopPropagation();

                                handleClick(11);
                            }}>
                                <ListItemPrefix>
                                    <Cog6ToothIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Setting
                            </ListItem>
                        </Link>
                        <LogOutDialog></LogOutDialog>
                    </List>}
                <footer className="absolute w-full  bottom-0 p-3" >
                    <AvatarWithText size={"lg"} img={user?.profilePhoto?.imageUrl} isBordered={true} color={"success"}>
                        <Typography color="white" variant='small' >
                            {user.firstName + " " + user.lastName}
                        </Typography>
                        <Typography variant="small" color="white" className="text-[#E8E8E8] font-thin">
                            {user.email}
                        </Typography>
                    </AvatarWithText>
                </footer>
            </div>
        </>
    );
}