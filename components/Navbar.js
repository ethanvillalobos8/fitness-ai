'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="grid w-screen h-16 bg-secondary border-b-4 border-primary">
            <div className="grid grid-cols-2 w-full h-full content-center">
                <div className="flex h-full w-full">
                    <Link href='/' className="text-2xl font-bold text-white tracking-wider ml-8">FitnessAi</Link>
                </div>
                <div className="flex justify-self-end items-center justify-center mr-8">
                    <button onClick={toggleDarkMode}>
                        {darkMode ? (
                            <MdDarkMode className="text-[#F55959] h-6 w-6" />
                        ) : (
                            <MdOutlineDarkMode className="text-white h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;