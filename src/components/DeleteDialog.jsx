import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";

export function DeleteDialog() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>

            <IconButton onClick={handleOpen} variant="text">
                <TrashIcon className="h-4 w-4" />
            </IconButton>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Delete User</DialogHeader>
                <DialogBody>
                    Are You sure to delete the user?
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
                    <Button variant="gradient" color="red" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}