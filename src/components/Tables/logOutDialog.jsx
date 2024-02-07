/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function LogOutDialog() {
    let navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("userToken");
        navigate("/login")
        handleOpen()
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    return (
        <>

            <ListItem onClick={handleOpen} >
                <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
            </ListItem>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Log Out</DialogHeader>
                <DialogBody>
                    Are You sure You want to logout?
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
                    <Button variant="gradient" color="red" onClick={logOut} >
                        <span>Yes</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}