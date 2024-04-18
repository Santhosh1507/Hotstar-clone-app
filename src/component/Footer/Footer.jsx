import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>


            <footer className="bg-white dark:bg-zinc-950">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">View Website in</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium flex gap-3 items-center">
                                <FaCheck />
                                <li className="mb-1">
                                    <a href="#" className="hover:underline">English</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Need Help?</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Visit Help center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Share Feedback</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Connect with Us</h2>
                            <ul className="text-gray-200 dark:text-gray-400 font-medium flex gap-5 text-4xl">
                                <FaFacebook className="text-white hover:text-gray-400" />
                                <FaTwitter className="text-white hover:text-gray-400" />

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-950 dark:border-gray-600">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Star™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer >

        </div >
    )
}

export default Footer