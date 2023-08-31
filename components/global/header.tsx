import Image from 'next/image'
import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { arrayToTree, classNames, getLinkProps, useOnce } from "../../utils/misc";
import { FaLayerGroup, FaTimes, FaSearch, FaSearchengin, FaBlog, FaMicroblog, FaNewspaper, FaNapster, FaGofore, FaQuestion, FaPhoneAlt, FaLocationArrow, FaChessKing } from 'react-icons/fa';
import Menu from './Menu';
import Logo from './Logo';
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
    const buttonClass = "p-2 text-xl font-semibold font-header transition-colors cursor-pointer";
    const [show, setShow] = useState(false);
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
                <div
                    className={classNames(
                        buttonClass,
                        themeColors["blue"].desktopMenu.item["normal"],
                        'relative'
                    )}
                    onClick={() => setShow(!show)}
                >
                    Sign In
                    <Menu buttonClicked={show} />
                </div>
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
        <Popover className='z-50'>
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
                                        Prompt Marketplace
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
        <div className='py-3 sm:pt-12 px-0 sm:px-6 flex flex-col w-full shadow-card-upload-black z-50'>
            <div className='flex w-full justify-between items-center'>
                <Link
                    href="/"
                    className="flex shrink-0 overflow-visible"
                >
                    <Logo />
                </Link>
                <div className="py-2 border border-[#555] rounded-md w-full relative text-[black] font-header ml-4 mr-4 md:ml-6 md:mr-10 lg:ml-10 lg:mr-16">
                    <input className="outline-none border-none focus:border-none active:outline-none flex input-box bg-[transparent] text-black h-10 pl-5 rounded-lg focus:outline-none focus:bg-[transparent] text-lg md:text-2xl"
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
            <div className='lg:flex font-semibold w-full hidden md:px-10 lg:px-20 justify-between mt-3 items-center'>
                <Link
                    href=""
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center`}
                >
                    <FaChessKing className='mr-3 text-2xl' />
                    <div className='text-center leading-tight'>Prompt<br /> Marketplace</div>
                </Link>
                <Link
                    href="/blog"
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center`}
                >
                    <FaMicroblog className='mr-2 text-3xl' />
                    <div>Blog</div>
                </Link>
                <Link
                    href=""
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center`}
                >
                    <FaNewspaper className='mr-2 text-3xl' />
                    <div>AI News</div>
                </Link>
                <Link
                    href=""
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center flex-nowrap`}
                >
                    <FaGofore className='mr-3 text-3xl' />
                    <div className=' text-center leading-tight'>Free Chat GPT<br /> Prompts</div>
                </Link>
                <Link
                    href="/faq"
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center`}
                >
                    <FaQuestion className='mr-2 text-2xl' />
                    <div>FAQ</div>
                </Link>
                <Link
                    href=""
                    className={`${classNames(
                        mobileNavItemClass,
                        themeColors["blue"].mobileMenu.item["normal"]
                    )} flex items-center`}
                >
                    <FaPhoneAlt className='mr-2 text-2xl' />
                    <div>Contact</div>
                </Link>
            </div>
        </div>
    )
}