import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    IconButton,
    // Typography,
    // Input,
} from "@material-tailwind/react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";


// eslint-disable-next-line react/prop-types
export function NewButtonDialog({status}) {


    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);

    return (
        <>
            {status === "add" ? 
                <Button
                    onClick={() => handleOpen("lg")}
                    className="flex items-center gap-3 bg-[#616CA8] p-3 px-5 rounded-2xl normal-case"
                >
                    New User
                    <PlusIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            : 
                <IconButton variant="text" onClick={() => handleOpen("lg")}>
                    <PencilIcon className="h-4 w-4" />
                </IconButton>
            }

            
            <Dialog className="w-25" open={
                size === "xs" ||
                size === "sm" ||
                size === "md" ||
                size === "lg" ||
                size === "xl" ||
                size === "xxl"
            }
                size={size || "md"}
                handler={handleOpen}>
                <DialogHeader>New User</DialogHeader>
                <DialogBody  >
                    <div className="flex  justify-between items-center  " >
                        <div className="w-full">
                            <div className="w-72">
                                <div className="py-3" >
                                    <label htmlFor="email">User Name</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="email">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="email">Password</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="email">Contact</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-5" >
                            <div className="mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 h-80">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button className="bg-[#616CA8]" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}