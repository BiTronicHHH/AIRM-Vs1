'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import { FaChevronRight } from 'react-icons/fa';
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { AlertState } from '@/components/utils/misc';
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
        <div className='relative min-w-screen min-h-screen text-[#ccc] flex flex-col py-6 items-center justify-center'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg6.jpg' />
            {/* <Image src="/logo.png" width={200} height={100} alt='logo' className='mb-10 z-10' /> */}
            <div className=' bg-gradient-to-b from-[#316a99ad] to-[#350429a4] rounded-lg  shadow-auth-box py-12 px-6 z-10'>
                <div className='text-3xl text-white font-semibold font-mono text-center pb-8'>Create a new account</div>
                <div className='flex items-center mb-4'>
                    <div className=' mr-5'>
                        <div className='font-bold mb-2'>First Name <span className='text-[red]'>*</span></div>
                        <input className="input-box bg-black rounded-lg px-4 py-2 border outline-black mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='First Name' value={firstName} onChange={handleFirstChange} />
                    </div>
                    <div className=''>
                        <div className='font-bold mb-2'>Last Name <span className='text-[red]'>*</span></div>
                        <input className="input-box bg-black rounded-lg px-4 py-2 border outline-black mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Last Name' value={lastName} onChange={handleLastChange} />
                    </div>
                </div>
                <div className=' mb-4'>
                    <div className='font-bold mb-2'>Email <span className='text-[red]'>*</span></div>
                    <input className="input-box w-full bg-black rounded-lg px-4 py-2 border outline-black mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Email' value={email} onChange={handleEmailChange} required />
                    {isNotValid && <div className='text-[red] mb-0 mt-1'>Enter a valid email address</div>}
                </div>
                <div className=' mb-4'>
                    <div className='font-bold mb-2'>Password <span className='text-[red]'>*</span></div>
                    <input type='password' className="input-box w-full bg-black rounded-lg px-4 py-2 border outline-black mr-0 text-xs md:text-sm lg:text-base placeholder:text-gray-300 text-gray-800 placeholder:font-base border-gray-200  border-none outline-none" placeholder='Password' value={password} onChange={handlePasswordChange} />
                </div>

                <div className="flex items-center mb-4 mt-4">
                    <input id="disabled-checkbox" type="checkbox" className="input-box w-4 h-4 focus:before:bg-black border-gray-300 text-orange rounded focus:ring-2 orange-check" checked={isTerms} onChange={() => setIsTerms(!isTerms)} />
                    <label htmlFor="disabled-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">I agree to the Swush <Link href="" className='font-medium text-white'>Terms of Use</Link></label>
                </div>

                <div className="flex items-center">
                    <input id="disabled-checked-checkbox" type="checkbox" value="" className="input-box w-4 h-4 text-orange bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2" checked={isPrivacy} onChange={() => setIsPrivacy(!isPrivacy)} />
                    <label htmlFor="disabled-checked-checkbox" className="ml-2 text-sm text-slight-text dark:text-gray-500">I agree to the Swush <Link href="" className='font-medium text-white'>Privacy policy</Link></label>
                </div>
                <button className='flex items-center justify-center bg-blue-button hover:bg-blue-button-hover rounded-lg w-full mt-7 py-3 font-bold' onClick={sign}>Join Now  &nbsp;<FaChevronRight className='text-xs' /></button>
                <div className='w-full text-center mt-10'>Already have an account? <Link href='/login' className='font-bold'>Log In</Link></div>
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
