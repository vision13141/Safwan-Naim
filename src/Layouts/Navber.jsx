import React, { useState } from 'react'
import logo from '../assets/logo.png'
import CommonButton from '../Component/CommonButton'
import { IoMdClose } from "react-icons/io";
import { RiMenuUnfold4Line2 } from "react-icons/ri";

const Navber = () => {

    const [toggle, settoggle] = useState(false)
    return (
        <div className=''>
            <nav className="flex items-center justify-between px-6 lg:h-[100px] lg:py-0 py-3 bg-white shadow-md">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                </div>

                <div className={`lg:relative lg:left-0 flex lg:flex-row lg:w-[65%] lg:h-full lg:justify-between max-sm:w-[55vw]  max-sm:h-screen sm:w-[55vw] sm:h-screen items-center justify-center flex-col z-50 bg-white  fixed top-0 ${toggle ? "left-0 duration-500" : "left-[-50%] duration-500"}`}>

                    <ul className="flex lg:flex-row gap-6 flex-col font-medium">
                        <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg lg:font-normal font-semibold leading-[26px]">Home</a></li>
                        <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg lg:font-normal font-semibold leading-[26px]">Page</a></li>
                        <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg lg:font-normal font-semibold leading-[26px]">Services</a></li>
                        <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg lg:font-normal font-semibold leading-[26px]">Blog</a></li>
                        <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg lg:font-normal font-semibold leading-[26px]">Contact</a></li>
                    </ul>

                    <CommonButton text={`Download`} className={"lg:block lg:mt-0 mt-6"} />

                    <button className='font-semibold lg:hidden block absolute top-5 right-5' onClick={() => settoggle(false)}>
                        <IoMdClose className='text-[36px]' />

                    </button>
                </div>

                <button className='font-bold lg:hidden block cursor-pointer' onClick={() => settoggle(true)}>
                    <RiMenuUnfold4Line2 className='text-[24px]' />
                </button>
            </nav>
        </div>
    )
}

export default Navber