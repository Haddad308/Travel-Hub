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
    HomeIcon,
    UsersIcon,
    CalendarIcon,
    CurrencyDollarIcon
} from "@heroicons/react/24/solid";

export function Sidebar() {
    return (
        <>
            <div className="top-0 bottom-0 lg:left-0 fixed p-2 overflow-y-auto w-[300px] bg-blue-gray-200 text-center " >
                <header>
                    <h1>Logo</h1>
                </header>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UsersIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <CalendarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Reservation
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <CurrencyDollarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Finance
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <UserPlusIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Admins
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Setting
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
                
                <footer className="absolute bottom-2 ms-4 " >
                    <AvatarWithText />
                </footer>
            </div>
        </>
    );
}