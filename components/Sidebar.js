'use client'

import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const menuContent = ['BMI', 'BMR', 'Calories', 'Macro' ];
    const menuIsOpen = () => {
        return (
            <div    className={`flex flex-col max-[1112px]:flex-row max-[1112px]:pt-1 w-full h-full justify-center items-start gap-y-4 mr-2 text-zinc-50 font-bold tracking-wide text-xl max-[1112px]:text-md transition-opacity 
                    ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out`}>
                {menuContent.map((item, index) => {
                    return (
                        <Link key={index} href={`/calculator/${item.toLowerCase()}`} className="flex w-full max-[1112px]:w-fit h-10 items-center max-[1112px]:justify-center px-6 max-[1112px]:px-3.5 rounded-r-lg max-[1112px]:hover:bg-transparent hover:bg-primaryAccent hover:text-[#F55959]">
                            <h1 className="text-left max-[1112px]:text-center">{item}</h1>
                        </Link>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="w-[160px]">
            <div className={`absolute flex ${isOpen ? 'w-[140px] fixed left-0 max-[1112px]:w-screen max-[1112px]:top-13 max-[1112px]:h-6' : 'w-12'} rounded-r-lg drop-shadow-md transition-all duration-300 ease-in-out`} style={{ height: 'calc(100vh - 64px)' }}>
                <div className="relative grid w-full h-full">
                    <div className="absolute top-0 right-0">
                        <button className="h-full pt-3 pr-3" onClick={handleToggle}>
                            {isOpen ? (
                                <IoChevronBack className='text-[#F55959] h-7 w-7' />
                            ) : (
                                <HiMenu className='text-secondaryAccent h-7 w-7' />
                            )}
                        </button>
                    </div>
                    {isOpen && (
                        <div className="flex w-full h-full">
                            {menuIsOpen()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
