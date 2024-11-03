import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const SliderRight = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className='px-[20px] py-[16px] border-[1px] border-gray-200 text-[20px] hover:bg-[#E5745D] duration-75 hover:text-white text-[#00413D] absolute right-0 top-[-55px]'>
            <FaArrowRight />
        </button>
    )
}

export default SliderRight