/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Reserved",
        value: "reserved",
    },
    {
        label: "Pending",
        value: "pending",
    },
    {
        label: "Cancelled",
        value: "cancelled",
    }
];


export function TabsComponent(props) {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value} onClick={()=>{
                                    props.filterReservation(label)
                                    // console.log(label);
                                }} >
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                {props.children}
            </CardBody>
            
        </Card>
    );
}
