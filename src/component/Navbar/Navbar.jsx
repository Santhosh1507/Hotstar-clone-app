import React, { useState } from 'react'
import image from "../../../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMovie } from "react-icons/md";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { PiChalkboardSimpleFill } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(0);
    const menuClick = () => {
        setOpen(!open)
    }

    const menuitemClick = () => {
        setOpen(0)

    }
    return (
        <div className="shadow-slate-800 fixed w-full z-10 top-0 bg-white dark:bg-stone-950">
            <nav className="flex items-center justify-between flex-wrap  p-3 mx-5 lg:mx-10 ">
                <div className="flex items-center flex-shrink-0 text-white">
                    <img src={image} alt="logo.png" className="w-24" />
                </div>
                <div className="block md:hidden">
                    <button onClick={menuClick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full md:block md:w-auto md:order-1 text-center ${open ? "block" : "hidden"}`}>
                    <ul className="flex md:flex-row md:gap-10 flex-col">
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/' className="flex items-center gap-1" > <AiFillHome className=" text-white " />
                                <a href="#" className="block py-2  text-white " aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/search' className="flex items-center gap-1" > <HiSearch className=" text-white " />
                                <a href="#" className="block py-2  text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Search</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/tvmovies' className="flex items-center gap-1" ><PiChalkboardSimpleFill className=" text-white" />
                                <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Tv</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/movies' className="flex items-center gap-1" > <MdOutlineMovie className=" text-white" />
                                <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Movies</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/sports' className="flex items-center gap-1" > <MdOutlineSportsBaseball className=" text-white" />
                                <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Sports</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link to='/categories' className="flex items-center gap-1" > <CiGrid42 className=" text-white" />
                                <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Categories</a>
                            </Link>
                        </li>
                        <li onClick={menuitemClick} className="flex items-center gap-2 hover:bg-blue-700 md:px-4 rounded hover:scale-110 duration-200">
                            <Link  className="flex items-center gap-1" > <CgProfile className=" text-white" />
                                <a href="#" className="block py-2  text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Logout</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar