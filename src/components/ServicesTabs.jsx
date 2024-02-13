/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BuildingOffice2Icon, GlobeEuropeAfricaIcon, LifebuoyIcon, MagnifyingGlassIcon, MoonIcon, QueueListIcon, Square3Stack3DIcon, SunIcon, TicketIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    CardBody,
    Tabs,
    TabsHeader,
    Tab,

} from "@material-tailwind/react";
import { useContext } from "react";
import { SelectedServiceContext } from "../contexts/ServicesContext";


const commonStyles = "w-5 pb-[3.2px] text-[#5e5c5c] pr-1";

const iconMap = {
    hotels: <BuildingOffice2Icon className={commonStyles} />,
    rooms: <MoonIcon className={commonStyles} />,
    flights: <GlobeEuropeAfricaIcon className={commonStyles} />,
    safari: <SunIcon className={commonStyles} />,
    cruises: <LifebuoyIcon className={commonStyles} />,
    transportation: <TicketIcon className={commonStyles} />,
    CustomPackage: <Square3Stack3DIcon className={commonStyles} />,
    StandardPackage: <QueueListIcon className={commonStyles} />,
};


export function ServicesTab({ TABS, filter, search, children }) {

    const [, SetSelectedService] = useContext(SelectedServiceContext)

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="hotels" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab className="text-nowrap" key={value} value={value} onClick={() => {
                                    // filter(label);
                                    SetSelectedService(label); 
                                }} >
                                    <div className="flex justify-center items-center">
                                        {iconMap[value]}
                                        <p className="text-[#808080]">
                                            {value}
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
