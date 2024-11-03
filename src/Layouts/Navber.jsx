import React from 'react'
import logo from '../assets/logo.png'
import CommonButton from '../Component/CommonButton'

const Navber = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                </div>
                <ul className="flex space-x-6 font-medium">
                    <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg font-normal leading-[26px]">Home</a></li>
                    <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg font-normal leading-[26px]">Page</a></li>
                    <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg font-normal leading-[26px]">Services</a></li>
                    <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg font-normal leading-[26px]">Blog</a></li>
                    <li><a href="#" className="text-[#00413D] hover:text-[#E5745D] text-lg font-normal leading-[26px]">Contact</a></li>
                </ul>

                <CommonButton text={`Download`} />
            </nav>
        </div>
    )
}

export default Navber