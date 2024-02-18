/* eslint-disable react/prop-types */
import { BuildingOffice2Icon, GlobeEuropeAfricaIcon, LifebuoyIcon, MagnifyingGlassIcon, MoonIcon, Square3Stack3DIcon, SunIcon, TicketIcon } from "@heroicons/react/24/outline";
// import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    // Typography,
    // Button,
    CardBody,
    // Chip,
    // CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    // Avatar,
    // IconButton,
    // Tooltip,
} from "@material-tailwind/react";


const commonStyles = "w-5 pb-[3.2px] text-[#5e5c5c] pr-1";

const iconMap = {
    Hotels: <BuildingOffice2Icon className={commonStyles} />,
    Rooms: <MoonIcon className={commonStyles} />,
    Flights: <GlobeEuropeAfricaIcon className={commonStyles} />,
    Safari: <SunIcon className={commonStyles} />,
    Cruises: <LifebuoyIcon className={commonStyles} />,
    Transportation: <TicketIcon className={commonStyles} />,
    Package: <Square3Stack3DIcon className={commonStyles} />,
};


export function TabsComponent({ TABS, filter, search, children }) {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value} onClick={() => {
                                    filter(label)
                                    
                                }} >
                                    <div className="flex justify-center items-center">
                                        {iconMap[label]}
                                        <p className="text-[#808080]">
                                            {label}
                                        </p>
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    {search ? <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div> : ""}
                </div>
            </CardHeader>
            <CardBody className="px-0">
                {children}
            </CardBody>

        </Card>
    );
}
