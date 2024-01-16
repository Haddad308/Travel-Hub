import { AvatarWithText } from "./avatar";
import {
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    Cog6ToothIcon,
    UserPlusIcon,
    InboxIcon,
    PowerIcon,
    // HomeIcon,
    UsersIcon,
    CalendarIcon,
    CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";



export function Sidebar() {
    return (
        <>
            <div className="top-0 bottom-0 lg:left-0 fixed  overflow-y-auto w-[300px] bg-blue-gray-200 text-center " >
                <header className="py-9">
                    <h1>Logo</h1>
                </header>
                <List>
                    <Link to={"/"} >
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    {/* <Link to={"/settings"}>
                        <ListItem>
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                    </Link> */}
                    <Link to={"/users"}>
                        <ListItem>
                        <ListItemPrefix>
                            <UsersIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                    </Link>
                    <Link to={ "/notification"}>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Notification
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                    </Link>
                    <Link to={ "/reservation"}>
                        <ListItem>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Reservation
                        </ListItem>
                    </Link>
                    <Link to={ "/finance"}>
                        <ListItem>
                            <ListItemPrefix>
                                <CurrencyDollarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Finance
                        </ListItem>
                    </Link>
                    <Link to={ "/admins"}>
                        <ListItem>
                            <ListItemPrefix>
                                <UserPlusIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Admins
                        </ListItem>
                    </Link>
                    <Link to={ "/settings"}>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Setting
                        </ListItem>
                    </Link>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
                <footer className="absolute w-full  bottom-0 p-3  bg-gray-800 " >
                    <AvatarWithText />
                </footer>
            </div>
        </>
    );
}