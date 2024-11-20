import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const SliderButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className='lg:px-[20px] lg:py-[16px] px-[1vw] py-[1vw] border-[1px] border-gray-200 text-[20px] hover:bg-[#E5745D] duration-75 hover:text-white text-[#00413D] absolute lg:-top-[55px]  -top-[40px] lg:right-[100px] right-[50px] z-10'>
            <FaArrowLeft />
        </button>
    )
}

export default SliderButton