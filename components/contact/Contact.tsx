import Link from 'next/link';
import React, { useState } from 'react'
import { FaAngleUp, FaAngleRight } from 'react-icons/fa'

export default function ContactUs() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        return 0;
    }
    const [open, setOpen] = React.useState(false);
    return (
        <div className='flex flex-col md:flex-row shadow-card-upload-black w-full relative lg:pt-[144px]'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg3.jpg' />
            <div className='flex flex-col items-center md:w-[50%] md:pt-40 py-16 z-10'>
                <div className='font-header text-glow lg:text-6xl md:text-4xl text-center text-3xl px-2 lg:mb-8 md:mb-4 font-bold z-10 text-[white] tracking-wider'>
                    Contact Us
                </div>
                <div className='w-[60%] text-[#ddd] text-2xl font-body text-justify'>
                    Fill the form and send in your queries. We will respond as soon as we can. Alternatively, You can reach out to us at our email address.
                </div>
                <div className='text-[#ddd] mt-3 text-2xl font-body'>
                    or Check our Our <Link href='/faq' className='text-white font-body text-3xl'>FAQ</Link>
                </div>
            </div>
            <div className='md:w-[50%] px-4 py-16 md:pr-20 z-10'>
                <form
                    onSubmit={handleSubmit}
                    className=" rounded-lg w-full flex flex-col px-8 py-8 bg-gradient-to-t from-[#241030aa] to-[#042831f6] dark:bg-blue-500  shadow-card-upload-black"
                >
                    <h1 className="text-2xl font-bold text-gray-200 font-header">
                        Send a message
                    </h1>

                    <div className='flex w-full items-center mt-4 text-gray-500'>
                        <div className='w-full mr-5'>
                            <div className='mb-2  font-light'>First Name <span className='text-red-500'>*</span></div>
                            <input className="bg-transparent border border-gray-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-100 focus:border-none font-light text-white w-full" placeholder='First Name' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <div className=' font-light mb-2'>
                                Last Name
                                <span className='text-red-500'>*</span>
                            </div>
                            <input className="bg-transparent border border-gray-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-100 focus:border-none font-light text-white w-full" placeholder='Last Name' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>
                    <div className='w-full mt-4 text-gray-500'>
                        <div className='mb-2  font-light'>E-mail <span className='text-red-500'>*</span></div>
                        <input
                            type="email"
                            className="bg-transparent border border-gray-500 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-100 focus:border-none font-light text-white w-full"
                            placeholder='you@yourcompany.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>

                    <div className='my-6 flex flex-col items-center w-full relative'>
                        <div className='cursor-pointer font-light border border-gray-500 flex items-center justify-between text-gray-500 w-full px-4 bg-transparent py-2' onClick={() => setOpen(!open)}>
                            Select a Purpose
                            {open ? <FaAngleUp /> : <FaAngleRight />}
                        </div>
                        <div className={` font-body w-full text-[white] bg-[transparent] border-t-0 border border-gray-500 px-8  md:py-8 py-4  ${open ? 'flex' : 'hidden'}`}>
                            <div>
                            </div>
                        </div>
                    </div>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        placeholder='Subject'
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-100 focus:border-none font-light text-gray-500"
                    />
                    <label
                        htmlFor="message"
                        className="text-gray-500 font-light dark:text-gray-50 mt-6 mb-3"
                    >
                        Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-100 focus:border-none font-light text-gray-500"
                    ></textarea>

                    <div className="flex flex-row items-center justify-start">
                        <button
                            type="submit"
                            className="px-10 mt-4 py-2 hover:shadow-card-upload bg-gradient-b from-main-bg to-bg-purple shadow-card-upload-black text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                        >
                            Submit
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="text-cyan-500 ml-2"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}