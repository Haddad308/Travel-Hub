/* eslint-disable react/prop-types */
import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import AddHotelForm from "./AddHotelForm";


const components = {
    "user":"", 
    "hotels":<AddHotelForm/>,
    "services":""
}

const AddButton = ({buttonText,dialogTitle,addedItem}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            {/* Button Style */}
            <Button onClick={() => handleOpen("xl")} className="flex items-center gap-3 bg-[#616CA8] p-3 px-5 rounded-2xl normal-case" >
                {buttonText}
                <PlusIcon strokeWidth={2} className="h-4 w-4" />
            </Button> 

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{dialogTitle}</DialogHeader>
                <DialogBody>
                    {components[addedItem]}
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
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default AddButton
