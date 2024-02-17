import { AvatarWithText } from "./avatar";
import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    // ListItemSuffix,
    // Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    Cog6ToothIcon,
    MapIcon,
    UsersIcon,
    CalendarIcon,
    CurrencyDollarIcon,
    DocumentChartBarIcon,
    WalletIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HomeIcon, WrenchIcon } from "@heroicons/react/24/outline";
import { LogOutDialog } from "./Tables/logOutDialog";
import useGetRole from "../hooks/useGetRole";



export function Sidebar() {
    const role = useGetRole()
    
    return (
        <>
            <div className="top-0 bottom-0 lg:left-0 fixed  overflow-y-auto w-[250px] bg-[#415A77] text-white" >
                <header className=" h-[70px] bg-[#344860] p-5 flex content-center ">
                    <MapIcon className="h-6 w-6 mt-1 mr-2" />
                    <h1 className="text-2xl font-semibold	" > Logo here</h1>
                </header>
                {role === "Admin" ? <List className="text-white" >
                    <Link to={"/"} >
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link to={"/Users"}>
                        <ListItem>
                            <ListItemPrefix>
                                <UsersIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Users
                        </ListItem>
                    </Link>
                    <Link to={"/Services"}>
                        <ListItem>
                            <ListItemPrefix>
                                <WrenchIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Services
                        </ListItem>
                    </Link>
                    <Link to={"/Reservation"}>
                        <ListItem variant='small'>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reservation
                        </ListItem>
                    </Link>
                    <Link to={"/Finance"}>
                        <ListItem>
                            <ListItemPrefix>
                                <CurrencyDollarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Finance
                        </ListItem>
                    </Link>
                    <Link to={"/reports"}>
                        <ListItem>
                            <ListItemPrefix>
                                <DocumentChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reports
                        </ListItem>
                    </Link>
                    <Link to={"/Settings"}>
                        <ListItem>
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
                            <ListItem>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </Link>
                        <Link to={"/UserReservation"}>
                            <ListItem>
                                <ListItemPrefix>
                                    <WalletIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Reservation
                            </ListItem>
                        </Link>
                        <Link to={"/UserFinance"}>
                            <ListItem>
                                <ListItemPrefix>
                                    <CurrencyDollarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Finance
                            </ListItem>
                        </Link>
                        <Link to={"/UserSettings"}>
                            <ListItem>
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