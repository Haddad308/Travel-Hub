/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    // Input,
    IconButton,
    // Typography,
    // Input,
} from "@material-tailwind/react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";


// eslint-disable-next-line react/prop-types
export function NewButtonDialog({text, status, children,type}) {
    // console.log(props.children);


    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);

    return (
        <>
            {status === "add" ? 
                <Button
                    onClick={() => handleOpen("lg")}
                    className="flex items-center gap-3 bg-[#616CA8] p-3 px-5 rounded-2xl normal-case"
                >
                    {text}
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
                <DialogHeader>{type}</DialogHeader>
                <DialogBody  >
                    {children}
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