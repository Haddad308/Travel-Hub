/* eslint-disable no-unused-vars */
import { useFormik } from "formik";
import * as Yup from 'yup'; // For validation. 
/* eslint-disable react/prop-types */
import axios from 'axios';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    IconButton,
} from "@material-tailwind/react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ButtonLoader from "../ButtonLoader";
import Alert from "../Alert";


export default function NewUserForm({ text, status, type, getUsers, UserId }) {

    const [token,] = useContext(tokenContext);

    const [size, setSize] = useState(null);
    const [file, setFile] = useState(null);
    const [image,] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [apiErrorImg, setApiErrorImg] = useState("");



    const notify = () => toast.success('User Added Successfully.');
    const handleOpen = (value) => setSize(value);

    async function uploadImage(fileItem) {
        setIsLoading(true); // Set loading state to true
        if (image) return; // If image is already uploaded, return

        try {
            setApiErrorImg(""); // Clear any previous image upload error

            const formData = new FormData();
            formData.append("files", fileItem);

            const result = await axios.post("http://localhost:3000/api/v1/images/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const uploadedImageId = result.data[0].id; // Extract image ID from the result
            return uploadedImageId;
        } catch (error) {
            console.error("Error uploading image:", error);
            setApiErrorImg("Error uploading image. Please try again later.");
            throw error; // Re-throw the error to propagate it to the calling code
        } finally {
            setIsLoading(false); // Set loading state to false regardless of success or failure
        }
    }


    async function addUser(values) {
        // Set loading state to true
        setIsLoading(true);
        // Clear any previous API error
        setApiError("");

        try {
            console.log("check Values", values);
            // Make POST request to add a user
            await axios.post("http://localhost:3000/api/v1/users", values, {
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
        }
    }

    async function editUser(values, id) {
        // Set loading state to true
        setIsLoading(true);
        // Clear any previous API error
        setApiError("");

        try {
            console.log("check Values", values);
            console.log("check id", id);
            // Make POST request to add a user
            await axios.patch(`http://localhost:3000/api/v1/users/${id}`, values, {
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
        }
    }


    const formHandler = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address'),
            password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required')
        }),
        onSubmit: (values) => {
            try {
                // Building the right logic here... 
                uploadImage(file).then((id) => {
                    console.log("checking the Image.", id); // Check if image is properly updated
                    values['profilePhotoId'] = id; // This might not work as expected
                    if (status === "add") {
                        addUser(values).then(() => {
                            notify();
                            handleOpen();
                            getUsers(); // Need here to refetch. 
                        })
                    }else{
                        delete values['email'];
                        editUser(values, UserId).then(() => {
                            notify();
                            handleOpen();
                            getUsers(); // Need here to refetch. 
                        })
                    }
                })
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    })

    return (
        <>
            <Toaster />
            {status === "add" ?
                <Button
                    onClick={() => handleOpen("xl")}
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

                    <form onSubmit={formHandler.handleSubmit} >
                        <div className="flex  justify-between items-center" >
                            <div className="w-full">
                                <div className="w-72">
                                    <div className="py-3" >
                                        <label htmlFor="firstName">First Name</label>
                                        <Input
                                            id="firstName"
                                            type="firstName"
                                            placeholder="firstName"
                                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.firstName}
                                        />
                                        {formHandler.touched.firstName && formHandler.errors.firstName ? (
                                            <div className='text-red-600' >{formHandler.errors.firstName}</div>
                                        ) : null}
                                    </div>
                                    <div className="py-3" >
                                        <label htmlFor="lastName">Last Name</label>
                                        <Input
                                            id="lastName"
                                            type="lastName"
                                            placeholder="Last Name"
                                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.lastName}
                                        />
                                        {formHandler.touched.lastName && formHandler.errors.lastName ? (
                                            <div className='text-red-600' >{formHandler.errors.lastName}</div>
                                        ) : null}
                                    </div>
                                    {status === "add" ? <div className="py-3" >
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
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.email}
                                        />
                                        {formHandler.touched.email && formHandler.errors.email ? (
                                            <div className='text-red-600' >{formHandler.errors.email}</div>
                                        ) : null}
                                    </div>:"" }
                                    
                                    <div className="py-3" >
                                        <label htmlFor="password">Password</label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="password"
                                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{ className: "min-w-[100px]" }}
                                            onChange={formHandler.handleChange}
                                            onBlur={formHandler.handleBlur}
                                            value={formHandler.values.password}
                                        />
                                        {formHandler.touched.password && formHandler.errors.password ? (
                                            <div className='text-red-600' >{formHandler.errors.password}</div>
                                        ) : null}
                                    </div>

                                </div>
                                <div className="me-20" >
                                    {(apiError || apiErrorImg) ? <Alert text={apiError + apiErrorImg} /> : ""}

                                </div>
                            </div>
                            {/* Image Upload */}
                            <div className="w-full pt-5" >
                                <div className="mt-2 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 h-80">
                                    {file ? <h1>File Uploaded</h1>
                                        :
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                            </svg>
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                        onChange={
                                                            (e) => {
                                                                setFile(e.target.files[0])
                                                            }
                                                        } />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>
                        <DialogFooter>
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
                                    disabled={!(formHandler.isValid && formHandler.dirty)}
                                    className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#616CA8] ${!(formHandler.isValid && formHandler.dirty)
                                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                        : 'bg-[#616CA8] text-white hover:bg-[#616CA8]'
                                        }`}
                                >
                                    Confirm
                                </Button>

                                }
                            </div>
                        </DialogFooter>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    )
}