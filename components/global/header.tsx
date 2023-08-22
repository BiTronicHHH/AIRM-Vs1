import Image from 'next/image'
import { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { arrayToTree, classNames, getLinkProps, useOnce } from "../../utils/misc";
import { FaLayerGroup, FaTimes, FaSearch, FaSearchengin } from 'react-icons/fa';

const themeColors = {
    blue: {
        mobileMenu: {
            divide: "divide-white",
            close: "text-white",
            bg: "from-blue-very-dark to-blue-dark",
            iconsBg: "",
            item: {
                normal: "text-[#555] hover:text-[black]",
                active: "text-[black]",
            },
        },
        desktopMenu: {
            item: {
                normal: "text-[#555] hover:text-[black]",
                active: "text-[black]",
            },
        },
    },
};
const DesktopMenu = () => {
    // const theme = useContext(ThemeContext)
    const buttonClass = "p-2 text-xl font-semibold font-header transition-colors";
    return (
        <Popover.Group className="max-xl:hidden flex items-center space-x-5 sm:space-x-10 bg-[white]">
            <div className="flex space-x-0 sm:space-x-6">
                <Link
                    href=""
                    className={classNames(
                        buttonClass,
                        themeColors["blue"].desktopMenu.item["normal"]
                    )}
                >
                    Model
                </Link>
                <Link
                    href=""
                    className={classNames(
                        buttonClass,
                        themeColors["blue"].desktopMenu.item["normal"]
                    )}
                >
                    Pricing
                </Link>
                <Link
                    href=""
                    className={classNames(
                        buttonClass,
                        themeColors["blue"].desktopMenu.item["normal"]
                    )}
                >
                    Sell
                </Link>
                <Link
                    href=""
                    className={classNames(
                        buttonClass,
                        themeColors["blue"].desktopMenu.item["normal"]
                    )}
                >
                    Sign In
                </Link>
                <div className="flex space-x-2">
                </div>
            </div>
        </Popover.Group>
    );
};

const mobileNavItemClass = "block px-2 py-3 text-xl font-header";

const MobileMenu = () => {
    // const theme = useContext(ThemeContext)
    return (
        <Popover>
            <Popover.Button className="block xl:hidden font-medium focus-[white]">
                <span className="sr-only">Open main menu</span>
                <FaLayerGroup className="h-8 w-8 mr-6 text-[#555] hover:text-[black]" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden bg-[white]"
                >
                    <div
                        className={classNames(
                            "relative rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden bg-gradient-to-bl",
                            themeColors["blue"].mobileMenu.bg
                        )}
                    >
                        <Popover.Button
                            className={classNames(
                                "absolute z-10 op-0 right-0 box-content p-3 inline-flex items-center justify-center focus-white",
                                themeColors["blue"].mobileMenu.close
                            )}
                        >
                            <span className="sr-only">Close main menu</span>
                            <FaTimes className="h-8 w-8 text-[#555] hover:text-[black]" aria-hidden="true" />
                        </Popover.Button>

                        <div className="relative pt-10">
                            <div
                                className={classNames(
                                    "px-5 divide-y",
                                    themeColors["blue"].mobileMenu.divide
                                )}
                            >
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Model
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Pricing
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Sell
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Sign In
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Blog
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={`${classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}, 'text-center'`}
                                    >
                                        <div>AI News</div>
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={`${classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}`}
                                    >
                                        Free Chat GPT Prompts
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        FAQ
                                    </Link>
                                </Fragment>
                                <Fragment>
                                    <Link
                                        href=""
                                        className={classNames(
                                            mobileNavItemClass,
                                            themeColors["blue"].mobileMenu.item["normal"]
                                        )}
                                    >
                                        Contact
                                    </Link>
                                </Fragment>
                            </div>
                            <div
                                className={classNames(
                                    "py-4 px-5 flex space-x-3",
                                    themeColors["blue"].mobileMenu.iconsBg
                                )}
                            >
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default function Header() {
    const Component = useOnce("Header") ? motion.div : "div";

    return (
        <div className='pt-5 pb-5 sm:pt-12 px-0 sm:px-6 flex flex-col w-full shadow-card-upload-black border-b border-b-[#3c91c2] mb-3'>
            <div className='flex w-full justify-between items-center'>
                <Link
                    href=""
                    target="_blank"
                    className="flex shrink-0  w-[50px] md:w-[200px] overflow-hidden"
                >
                    <div className=" shrink-0">
                        <Image src='/logoTemp.svg' alt='' className="shrink-0" style={{ width: "200px" }} width={200} height={100} />
                    </div>
                </Link>
                <div className="py-2 border rounded-md w-full relative text-[black] font-Urbansit ml-4 mr-4 md:ml-6 md:mr-10 lg:ml-10 lg:mr-16">
                    <input className="flex w-full  input-box bg-[transparent] text-white h-10 px-5 rounded-lg focus:outline-none text-2xl"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-4 mr-4 text-dark-grey">
                        <FaSearchengin className='text-2xl text-[#bbb]' />
                    </button>
                </div>
                <div className="ml-auto whitespace-nowrap">
                    <DesktopMenu />
                    <MobileMenu />
                </div>
            </div>
            <div className='md:flex font-semibold w-full hidden md:px-10 lg:px-20 justify-between mt-3 items-center'>
                <Link
                    href=""
                    className={classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )}
                >
                    Blog
                </Link>
                <Link
                    href=""
                    className={classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )}
                >
                    AI News
                </Link>
                <Link
                    href=""
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} text-center`}
                >
                    Free Chat GPT<br /> Prompts
                </Link>
                <Link
                    href=""
                    className={classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )}
                >
                    FAQ
                </Link>
                <Link
                    href=""
                    className={classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )}
                >
                    Contact
                </Link>
            </div>
        </div>
    )
}