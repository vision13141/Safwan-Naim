import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const SliderRight = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className='lg:px-[20px] lg:py-[16px] px-[1vw] py-[1vw] border-[1px] border-gray-200 text-[20px] hover:bg-[#E5745D] duration-75 hover:text-white text-[#00413D] absolute right-0 lg:top-[-55px] -top-[40px]'>
            <FaArrowRight />
        </button>
    )
}

export default SliderRight