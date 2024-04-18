import React, { useState } from 'react'
import image from "../../../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMovie } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { PiChalkboardSimpleFill } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";

const Navbar = () => {
    const [open, setOpen] = useState(0);
    const menuClick = () =>{
        setOpen(!open)
    }
    return (
        <div className="bg-gray-750 shadow-2xl shadow-slate-800 ">
            <nav className="flex items-center justify-between flex-wrap  p-3 mx-5 lg:mx-10 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={image} alt="logo.png" className="w-24" />
                </div>
                <div className="block md:hidden">
                    <button onClick={menuClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full md:block md:w-auto md:order-1 text-center ${open ? "block" : "hidden"}`}>
                    <ul className="flex md:flex-row md:gap-10 flex-col">
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <AiFillHome className=" text-white " />
                            <a href="#" className="block py-2  text-white " aria-current="page">Home</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <HiSearch className=" text-white " />
                            <a href="#" className="block py-2  text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Search</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <CgProfile className=" text-white" />
                            <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">My Space</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <PiChalkboardSimpleFill className=" text-white" />
                            <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Tv</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <MdOutlineMovie className=" text-white" />
                            <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Movies</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <MdOutlineSportsBaseball className=" text-white" />
                            <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Sports</a>
                        </li>
                        <li className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded">
                            <CiGrid42 className=" text-white" />
                            <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Categories</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar