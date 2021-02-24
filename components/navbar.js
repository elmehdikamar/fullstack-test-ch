import { Transition } from "@headlessui/react";
import { useState } from "react";
import NavItem from "./nav_item";
import ProfileContainer from "./profile_container";

export default function NavBar(props) {

    const menuItems = [
        <NavItem title="Profile" />,
        <NavItem title="Jobs" />,
        <NavItem title="Professional Network" />,
        <NavItem title="Lounge" />,
        <NavItem title="Salary" />
    ]


    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="col-span-5 flex flex-row py-5 px-4 bg-white items-center">
                <button onClick={() => setIsOpen(true)} type="button" className="text-gray-800 md:hidden hover:text-gray-400 mr-4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <span className="text-blue-400 text-md uppercase font-bold flex-1 lg:flex-none">Health Explore</span>
                <div className="hidden lg:flex flex-row space-x-10 flex-1 justify-center items-center">
                    {menuItems.map((item) => item)}
                </div>
                <div className="flex flex-row space-x-5 justify-center items-center">
                    <button className="hidden lg:block py-2 px-4 uppercase text-xs border border-blue-500 rounded-xl text-blue-500 hover:text-white hover:bg-blue-500 font-medium" type="button">Create Job</button>
                    <ProfileContainer initials='JO' notifCount={2} />
                    <NavItem className="hidden lg:block" title="Logout" />
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="pl-3 pr-5 pt-4 flex items-center justify-between">
                            <div>
                                <span className="text-blue-400 text-md uppercase font-bold">Health Explore</span>
                            </div>
                            <div className="-mr-2">
                                <button onClick={() => setIsOpen(false)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tbviolet">
                                    <span className="sr-only">Close main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="px-3 pt-2 pb-3 mt-2 space-y-5 flex flex-col text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="none">
                                {menuItems.map((item) => item)}
                            </div>
                        </div>
                        <div role="none">
                            <a href="/dashboard" className="block w-full px-5 py-3 text-center font-medium text-blue-500 bg-gray-50 hover:bg-gray-100" role="menuitem">Create Job</a>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    )
}