import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from '../../components/FromComponants/Alert';
import { tokenContext } from '../../contexts/AuthContext';
import LoginVector from "../../assets/Icons/LoginVector.svg";
import { EyeSlashFilledIcon } from '../../components/Icons/EyeSlashFilledIcon';
import { EyeFilledIcon } from '../../components/Icons/EyeFilledIcon';
import { Input } from '@nextui-org/input';
import LockIcon from "../../assets/Icons/lock.svg"
import EmailIcon from "../../assets/Icons/Email.svg"
import { Button } from '@nextui-org/button';
import ForgetPasswordModal from '../../components/General/ForgetPasswordModal';

export default function Login() {

    const [, SetToken] = useContext(tokenContext);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    let navigate = useNavigate();

    // ! Still Need To add refresh token. 
    async function signIn(values) {
        setIsLoading(true);
        setApiError('');

        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/email/login', values);
            if (response.status === 200) {
                const { token } = response.data;
                setIsLoading(false);
                navigate('/');
                SetToken(token);
                localStorage.setItem('userToken', token);
            }
        } catch (error) {
            console.error('Login error:', error);
            setApiError(error.message || 'Login failed');
            setIsLoading(false);
        }
    }

    const formHandler = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            signIn(values);
        },
    });

    return (
        <form onSubmit={formHandler.handleSubmit}>
            <div className={`flex py-10 items-center px-20  ${(formHandler.touched.email && formHandler.errors.email) ? "mt-5" : "mt-10"} `}    >
                <div className='w-1/2  ' >
                    <img className='w-[500px]' src={LoginVector} alt="loginVector" />
                </div>
                <div className={`border-2 rounded-lg  p-10   w-1/2 flex flex-col gap-2   ${apiError ? "py-14" : "py-20"}`}>
                    <h2 className="text-2xl font-semibold">
                        Welcome Back!
                    </h2>
                    <h1 className="text-[32px] font-bold">
                        Sign In
                    </h1>
                    <div className='flex flex-col  mt-5 items-center' >
                        <Input
                            id="email"
                            name="email"
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            value={formHandler.values.email.trim()}
                            className='mb-5'
                            isClearable
                            type="email"
                            label="Email"
                            placeholder="you@example.com"
                            labelPlacement="outside"
                            startContent={
                                <img src={EmailIcon} />}
                            onClear={() => formHandler.setFieldValue("email", "")
                            }
                            isInvalid={formHandler.touched.email && formHandler.errors.email}
                            errorMessage={formHandler.touched.email && formHandler.errors.email}
                        />
                        <Input
                            required
                            onChange={formHandler.handleChange}
                            onBlur={formHandler.handleBlur}
                            value={formHandler.values.password.trim()}
                            id="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            labelPlacement="outside"
                            startContent={
                                <img src={LockIcon} />}
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                            isInvalid={formHandler.touched.password && formHandler.errors.password}
                            errorMessage={formHandler.touched.password &&formHandler.errors.password}
                        />
                        <ForgetPasswordModal/>

                        {isLoading ? <Button
                            className='bg-[#616CA8] mt-10 text-white w-2/3'
                            isLoading
                            color="secondary"
                            spinner={
                                <svg
                                    className="animate-spin h-5 w-5 text-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        fill="currentColor"
                                    />
                                </svg>
                            }
                        >
                            Loading
                        </Button> : <Button type='submit' className='bg-[#616CA8] mt-10 text-white w-2/3'>
                            Sign In
                        </Button>}
                        {apiError ? <Alert text={'Wrong Email or Password.'} /> : ''}
                    </div>
                </div>
            </div>
        </form>
    );
}


