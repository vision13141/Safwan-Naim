import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const BlogCard = () => {
    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return (
        <div className="lg:w-[370px] h-[513px]">
            <div className="w-[100%] h-[260px] bg-gray-500"></div>

            <div className="pl-[20px]">
                <div className="flex justify-between pt-[15px]">
                    <p className='text-[#E5745D] font-Vollkorn text-[18px] font-medium leading-normal tracking-[0.36px]'>By David William</p>
                    <p className='font-Jost text-[#00413D] text-[14px]'>{new Date().toLocaleDateString(undefined, options)}</p>
                </div>
                <h2 className='text-[#00413D] text-[24px] py-[12px] font-medium font-Vollkorn leading-[30px]'>Quis autem vea eum iure reprehenderit.</h2>
                <p className='font-Jost text-[#00413D] text-[16px] leading-[26px]'>Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.</p>

                <div className="flex items-center mt-[20px] text-[#00413D] hover:text-[#E5745D] duration-75 text-[18px] font-semibold font-Jost">
                    <a href="#">Read More</a>
                    <FaArrowRightLong className='ml-[5px]' />
                </div>
            </div>

        </div>
    )
}

export default BlogCard