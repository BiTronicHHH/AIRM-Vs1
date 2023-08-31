import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { useRouter } from "next/router";
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { AlertState } from '@/components/utils/misc';
import Logo from '@/components/global/Logo';

// import signIn from "@/firebase/auth/signin";

export default function login() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isNotValid, setIsNotValid] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: '',
        severity: undefined,
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    function handleEmailChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setEmail(e.target.value);
    }

    const handleLogin = async () => {
        if (!email) {
            setAlertState({
                open: true,
                message: 'Please input the email.',
                severity: 'error',
            })
            return;
        }
        if (!password) {
            setAlertState({
                open: true,
                message: 'Please input the password.',
                severity: 'error',
            })
            return;
        }
        // regular expression pattern for validating email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            // email is valid, so redirect to new page
            //   const { result, error } = await signIn(email, password);

            //   if (error) {
            //     setAlertState({
            //       open: true,
            //       message: 'Please input the correct Email or Password!',
            //       severity: 'error',
            //     })
            //     return console.log(error)
            //   }

            //   // else successful
            //   console.log(result)
            router.push('/');
        } else {
            // email is invalid, so display an error message
            // alert("Please enter a valid email address.");
            setIsNotValid(true);
            setAlertState({
                open: true,
                message: 'Please input the valid email',
                severity: 'error',
            })
            return;
        }
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <div className=' font-header text-[#cccccc] min-w-screen min-h-screen flex flex-col py-6 items-center justify-center relative'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg6.jpg' />
            <div className='absolute top-0 left-0 h-full w-full bg-[#000000a1] z-[5]'>
            </div>
            <Logo clasLog={true}/>
            <div className='z-10 bg-gradient-to-b from-[#316a99ad] to-[#350429a4] rounded-lg  shadow-auth-box py-12 px-6'>
                <div className='text-3xl font-semibold font-mono text-center pb-8'>Log In</div>
                <div className='mb-6'>
                    <input className=" input-box w-full bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Email' value={email} name='email' onChange={handleEmailChange} />
                    {isNotValid && <div className='text-[red] mb-0 mt-1'>Enter a valid email address</div>}
                </div>
                <div className='mb-4'>
                    <input type='password' className="input-box w-full bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <button className='bg-blue-button text-lg  hover:bg-blue-button-hover rounded-md w-full py-2 px-5 font-bold mr-4'
                        onClick={handleLogin}
                    >
                        <div className='flex items-center rounded-lg hover:text-white'>Join Now&nbsp; <FaChevronRight className='text-xs' /></div>
                    </button>
                    <Link href='' className='text-slight-text hover:text-white font-bold whitespace-nowrap text-sm pr-12'>Forgot Password?</Link>
                </div>
                <button className='flex items-center justify-center border hover:text-white rounded-lg w-full mt-2 py-3 font-bold'><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='mr-2'><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg> <span>Join With Google</span> &nbsp;&nbsp;<FaChevronRight className='text-xs' /></button>
                <div className='w-full text-center mt-6'>Don&apos;t have an account? <Link href='/signup' className='font-bold hover:text-white'>Sign Up</Link></div>
            </div>
            <Snackbar
                open={alertState.open}
                autoHideDuration={6000}
                onClose={() => setAlertState({ ...alertState, open: false })}
            >
                <Alert
                    onClose={() => setAlertState({ ...alertState, open: false })}
                    severity={alertState.severity}
                    className='text-[red]'
                >
                    {alertState.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
