/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    CardBody,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

// *This works with the reservation page. 
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
