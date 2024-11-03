import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const SliderButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className='px-[20px] py-[16px] border-[1px] border-gray-200 text-[20px] hover:bg-[#E5745D] duration-75 hover:text-white text-[#00413D] absolute top-[-55px] right-[100px] z-10'>
            <FaArrowLeft />
        </button>
    )
}

export default SliderButton