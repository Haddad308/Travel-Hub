import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; // For validation. 
import Alert from '../components/Alert';
import ButtonLoader from '../components/ButtonLoader';


export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    let navigate = useNavigate()

    async function signIn(values) {

        setIsLoading(true)
        setApiError("");

        let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).catch((error) => {
            setApiError(error.response.data.message);
            setIsLoading(false);
        });
        console.log(data.message);
        if (data.message === "success") {
            setIsLoading(false)
            navigate("/");
        }
    }

    const formHandler = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
        }),
        onSubmit: (values) => {
            signIn(values);
        }
    })


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={formHandler.handleSubmit}>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" required onChange={formHandler.handleChange} onBlur={formHandler.handleBlur} value={formHandler.values.email} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {formHandler.touched.email && formHandler.errors.email ? (
                                <div className='text-red-600' >{formHandler.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* Password */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required onChange={formHandler.handleChange} onBlur={formHandler.handleBlur} value={formHandler.values.password} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            {formHandler.touched.password && formHandler.errors.password ? (
                                <div className='text-red-600'>{formHandler.errors.password}</div>
                            ) : null}
                        </div>
                        {apiError ? <Alert/> : ""}
                    </div>
                    {/* Submit button */}
                    <div>
                        {isLoading ? <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <ButtonLoader/>
                        </button> : <button
                            type="submit"
                            disabled={!(formHandler.isValid && formHandler.dirty)}
                            className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!(formHandler.isValid && formHandler.dirty)
                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                                }`}
                        >
                            Sign in
                        </button>

                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
