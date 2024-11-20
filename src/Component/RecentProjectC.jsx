import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const RecentProjectC = ({ src, text }) => {
    return (
        <div className="lg:w-[370px] lg:h-[520px] max-w-[100%] sm:w-[90%]">
            <img src={src} alt="" className='w-full' />

            <div className="ml-[15px]">
                <p className={`text-[#E5745D] pt-[15px] font-Vollkorn text-[18px] font-medium leading-normal tracking-[0.36px]`}>
                    {text}
                </p>

                <h3 className='text-[#00413D] text-[24px] pt-[10px] font-Vollkorn font-medium leading-[30px]'>Branding & Digital Video Campaign For George’s Cafe</h3>

                <p className='text-[#00413D] text-[16px] font-Jost font-normal leading-[24px] pt-[10px]'>Lorem Ipsum Is Simply Dummy Text Of The
                    Printing And Typesetting Industry.
                </p>

                <div className="flex items-center mt-[20px] text-[#00413D] hover:text-[#E5745D] duration-75 text-[18px] font-semibold font-Jost">
                    <a href="#">View Case Studies</a>
                    <FaArrowRightLong className='ml-[5px]' />
                </div>
            </div>
        </div>
    )
}

export default RecentProjectC