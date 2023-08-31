'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaChevronRight } from 'react-icons/fa';
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { AlertState } from '@/components/utils/misc';
import Logo from '@/components/global/Logo';
// import signUp from "@/firebase/auth/signup";
// import addData from "@/firebase/firestore/addData";
export default function signup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isNotValid, setIsNotValid] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isTerms, setIsTerms] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPrivacy, setIsPrivacy] = useState<boolean>(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alertState, setAlertState] = useState<AlertState>({
        open: false,
        message: '',
        severity: undefined,
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [firstName, setFirstName] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [lastName, setLastName] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const handleFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const handleLastChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    function handleEmailChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setEmail(e.target.value);
    }

    const sign = async () => {
        if (!firstName) {
            setAlertState({
                open: true,
                message: 'Please input the first name.',
                severity: 'error',
            })
            return;
        }
        if (!lastName) {
            setAlertState({
                open: true,
                message: 'Please input the last name.',
                severity: 'error',
            })
            return;
        }
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
        if (!isTerms) {
            setAlertState({
                open: true,
                message: 'Please accept the Swush Terms of Use.',
                severity: 'error',
            })
            return;
        }
        if (!isPrivacy) {
            setAlertState({
                open: true,
                message: 'Please accept the Swush Privacy Policy.',
                severity: 'error',
            })
            return;
        }
        // regular expression pattern for validating email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            //   await signUp(email, password)
            //     .then((result) => {        
            //       const userData = {
            //         firstName: firstName,
            //         lastName: lastName,
            //         email: email
            //       }
            //       router.push('/login');

            //       // addData('users', 'user-id', userData)
            //       //   .then((result) => {
            //       //     console.log(result)

            //       //   })
            //       //   .catch((error) => {
            //       //     console.log(error);
            //       //   });
            //     })
            //     .catch((err) => {
            //       console.log(err)
            //     })
            console.log('dskfljas');

        } else {
            setAlertState({
                open: true,
                message: 'Please input the valid email',
                severity: 'error',
            })
            return;
        }
    }

    return (
        <div className=' font-header overflow-visible relative min-w-screen min-h-screen text-[#ccc] flex flex-col py-6 items-center justify-center'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg6.jpg' />
            <div className='absolute top-0 left-0 h-full w-full bg-[#000000a1] z-[5]'></div>
            <Logo clasLog={true}/>
            <div className=' bg-gradient-to-b from-[#316a99ad] to-[#350429a4] rounded-lg  shadow-auth-box py-12 px-6 z-10'>
                <div className='text-3xl text-white font-semibold font-mono text-center pb-8'>Create a new account</div>
                <div className='flex items-center mb-4'>
                    <div className=' mr-5'>
                        <div className='font-bold mb-2'>First Name <span className='text-[red]'>*</span></div>
                        <input className="input-box bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='First Name' value={firstName} onChange={handleFirstChange} />
                    </div>
                    <div className=''>
                        <div className='font-bold mb-2'>Last Name <span className='text-[red]'>*</span></div>
                        <input className="input-box bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Last Name' value={lastName} onChange={handleLastChange} />
                    </div>
                </div>
                <div className=' mb-4'>
                    <div className='font-bold mb-2'>Email <span className='text-[red]'>*</span></div>
                    <input className="input-box w-full bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Email' value={email} onChange={handleEmailChange} required />
                    {isNotValid && <div className='text-[red] mb-0 mt-1'>Enter a valid email address</div>}
                </div>
                <div className=' mb-4'>
                    <div className='font-bold mb-2'>Password <span className='text-[red]'>*</span></div>
                    <input type='password' className="input-box w-full bg-black rounded-lg px-4 py-2 border outline-[#aaaaaa33] mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200 focus:border-none focus:outline-none border-none outline-none" placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>

                <div className="flex items-center mb-4 mt-4">
                    <input id="disabled-checkbox" type="checkbox" className="w-4 h-4 text-gray-600 bg-[#4d495044] focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" checked={isTerms} onChange={() => setIsTerms(!isTerms)} />
                    <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">I agree to the Swush <Link href="/terms" className='font-medium text-white'>Terms of Use</Link></label>
                </div>

                <div className="flex items-center">
                    <input id="disabled-checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-[#4d495044] border-gray-300 rounded  focus:ring-2" checked={isPrivacy} onChange={() => setIsPrivacy(!isPrivacy)} />
                    <label htmlFor="disabled-checked-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">I agree to the Swush <Link href="/privacy" className='font-medium text-white'>Privacy policy</Link></label>
                </div>
                <button className='flex items-center justify-center border hover:text-white rounded-lg w-full mt-7 py-3 font-bold' onClick={sign}>Join Now  &nbsp;<FaChevronRight className='text-xs' /></button>
                <button className='flex items-center justify-center border hover:text-white rounded-lg w-full mt-3 py-3 font-bold'><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className='mr-2'><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg> <span>Join With Google</span> &nbsp;&nbsp;<FaChevronRight className='text-xs' /></button>
                <div className='w-full text-center mt-4'>Already have an account? <Link href='/login' className='font-bold hover:text-white'>Log In</Link></div>
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
