/* eslint-disable no-unused-vars */
import { IconButton, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from 'yup'; // For validation. 
import ImagesUploader from "../FromComponants/ImagesUploader";
import { useContext, useState } from "react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";
import { tokenContext } from "../../contexts/AuthContext";
import ButtonLoader from "../General/ButtonLoader";
import toast, { Toaster } from "react-hot-toast";
import { SelectedServiceContext } from "../../contexts/ServicesContext";
import { RemoveEmptyValues } from "../../Middlewares/RemoveEmptyValues";
import Alert from "../FromComponants/Alert";


// eslint-disable-next-line react/prop-types
export default function HotelFormDialog({ buttonText, dialogTitle, getService, status, hotelID }) {

    const [token,] = useContext(tokenContext);
    const [selectedService,] = useContext(SelectedServiceContext)
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [apiErrorImg, setApiErrorImg] = useState("");
    const handleOpen = () => setOpen(!open);
    const notify = status === "add" ? () => toast.success('User Added Successfully.') : () => toast.success('User Edited Successfully.') 


    async function addHotel(values, service) {
        // Set loading state to true
        setIsLoading(true);
        // Clear any previous API error
        setApiError("");



        try {
            console.log("check Values Form Hotel Function", values);
            // Make POST request to add a user
            await axios.post("http://localhost:3000/api/v1/hotels", values, {
                headers: {
                    Authorization: "Bearer " + token, // Include bearer token in the header
                }
            });
            // If successful, clear API error and log success message
            setApiError("");
            console.log("hello from success");
        } catch (error) {
            // If error occurs, log error response data, set API error state, and throw the error
            setApiError(error.response.data?.message);
            throw error; // Throw the error for further handling if needed
        } finally {
            // Set loading state to false regardless of success or failure
            setIsLoading(false);
            getService(service, token);
        }
    }

    async function editHotel(values, service, id) {
        // Set loading state to true
        setIsLoading(true);
        // Clear any previous API error
        setApiError("");

        try {
            console.log("check Values", values);
            console.log("check id", id);
            // Make POST request to add a user
            await axios.patch(`http://localhost:3000/api/v1/hotels/${id}`, values, {
                headers: {
                    Authorization: "Bearer " + token, // Include bearer token in the header
                }
            });
            // If successful, clear API error and log success message
            setApiError("");
            console.log("hello from success");
        } catch (error) {
            // If error occurs, log error response data, set API error state, and throw the error
            if (error.response.data?.message)
                setApiError(error.response.data?.message);
            else
                setApiError("Email is already exists")
            throw error; // Throw the error for further handling if needed
        } finally {
            // Set loading state to false regardless of success or failure
            setIsLoading(false);
            getService(service, token);
        }
    }

    async function uploadImage(imagesList) {
        setIsLoading(true); // Set loading state to true
        try {
            console.log("hellp");
            setApiErrorImg(""); // Clear any previous image upload error

            const formData = new FormData();
            imagesList.forEach(image => {
                formData.append("files", image);
            });
            console.log("check formData", formData);

            const result = await axios.post("http://localhost:3000/api/v1/images/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("most important", result);
            const uploadedImageIds = result.data.map(image => image.id);
            console.log("test Upload image 1100", uploadedImageIds);
            return uploadedImageIds;

        } catch (error) {
            console.error("Error uploading image:", error);
            console.log("What is the status",status);
            if (status === "edit")
                return;
            setApiErrorImg("Error uploading image. Please try again later.");
            throw error; // Re-throw the error to propagate it to the calling code
        } finally {
            setIsLoading(false); // Set loading state to false regardless of success or failure
        }
    }


    const formHandler = useFormik({
        initialValues: {
            name: "",
            address: "",
            state: "",
            website: "",
            city: "sad",
            email: "das",
            mobileNumber: "das",
            phoneNumber: "das",
            zipCode: "dsa",
        },
        validationSchema: () => {
            if (status === "add") {
                return Yup.object({
                    name: Yup.string().required('Required'),
                    address: Yup.string().required('Required'),
                    state: Yup.string().required('Required'),
                    website: Yup.string().required('Required')
                });
            } else {
                return Yup.object({
                    name: Yup.string(),
                    address: Yup.string(),
                    state: Yup.string(),
                    website: Yup.string()
                });
            }

        },
        onSubmit: (values) => {
            try {
                // Building the right logic here... 
                uploadImage(images).then((id) => {
                    console.log("checking the Image.", id); // Check if image is properly updated
                    values['imageIds'] = id;
                    if (status === "add") {
                        addHotel(values, selectedService).then(() => {
                            notify();
                            handleOpen();
                        })
                    } else {
                        values = RemoveEmptyValues(values);
                        editHotel(values, selectedService, hotelID).then(() => {
                            notify();
                            handleOpen();
                        })
                    }
                })
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    });


    return (
        <>
            {/* Button Style */}
            <Toaster />
            {status === "add" ?
                <Button
                    onClick={() => handleOpen("xl")}
                    className="flex items-center gap-3 bg-[#616CA8] p-3 px-5 rounded-2xl normal-case"
                >
                    {buttonText}
                    <PlusIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
                :
                <IconButton variant="text" onClick={() => handleOpen("lg")}>
                    <PencilIcon className="h-4 w-4" />
                </IconButton>
            }

            <Dialog open={open} size="lg" handler={handleOpen}>
                <DialogHeader>{dialogTitle}</DialogHeader>
                <DialogBody>
                    <form onSubmit={formHandler.handleSubmit} >
                        <div className=" grid grid-cols-2 gap-5 items-center" >
                            {/* Input Fields */}
                            <div>
                                <div className="py-3" >
                                    <label htmlFor="name">Hotel Name</label>
                                    <Input
                                        id="name"
                                        type="name"
                                        placeholder="name"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                        onChange={formHandler.handleChange}
                                        onBlur={formHandler.handleBlur}
                                        value={formHandler.values.name}
                                    />
                                    {formHandler.touched.name && formHandler.errors.name ? (
                                        <div className='text-red-600' >{formHandler.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="address">Address</label>
                                    <Input
                                        id="address"
                                        type="address"
                                        placeholder="address"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                        onChange={formHandler.handleChange}
                                        onBlur={formHandler.handleBlur}
                                        value={formHandler.values.address}
                                    />
                                    {formHandler.touched.address && formHandler.errors.address ? (
                                        <div className='text-red-600' >{formHandler.errors.address}</div>
                                    ) : null}
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="state">State</label>
                                    <Input
                                        id="state"
                                        type="state"
                                        placeholder="state"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                        onChange={formHandler.handleChange}
                                        onBlur={formHandler.handleBlur}
                                        value={formHandler.values.state}
                                    />
                                    {formHandler.touched.state && formHandler.errors.state ? (
                                        <div className='text-red-600' >{formHandler.errors.state}</div>
                                    ) : null}
                                </div>
                                <div className="py-3" >
                                    <label htmlFor="website">Website</label>
                                    <Input
                                        id="website"
                                        type="website"
                                        placeholder="website"
                                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        containerProps={{ className: "min-w-[100px]" }}
                                        onChange={formHandler.handleChange}
                                        onBlur={formHandler.handleBlur}
                                        value={formHandler.values.website}
                                    />
                                    {formHandler.touched.website && formHandler.errors.website ? (
                                        <div className='text-red-600' >{formHandler.errors.website}</div>
                                    ) : null}
                                </div>
                            </div>
                            {/* Image Uploader */}
                            <div id="Image Uploader">
                                <ImagesUploader files={images} setFiles={setImages} isMultiple={true} />
                            </div>
                        </div>
                        <DialogFooter className="flex justify-between" >
                            <div className="me-20" >
                                {(apiError || apiErrorImg) ? <Alert text={apiError + apiErrorImg} /> : ""}
                            </div>
                            <div className="flex">

                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <div>
                                    {isLoading ? <Button type="submit" className="flex w-full justify-center rounded-md bg-[#616CA8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#616CA8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-[#616CA8]">
                                        <ButtonLoader />
                                    </Button> : <Button
                                        type="submit"
                                        disabled={!(formHandler.isValid && formHandler.dirty) && status == "add"}
                                        className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#616CA8] ${!(formHandler.isValid && formHandler.dirty) && status == "add"
                                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                            : 'bg-[#616CA8] text-white hover:bg-[#616CA8]'
                                            }`}
                                    >
                                        Confirm
                                    </Button>

                                    }
                                </div>
                            </div>

                        </DialogFooter>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    )
}

