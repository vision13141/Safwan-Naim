import React from 'react'

const CommonButton = ({ text, className }) => {
    return (
        <button className={`${className}  bg-[#E5745D] flex-shrink-0 lg:w-[180px] lg:h-[50px] border-white border-[1px] text-white lg:text-lg text-[3vw] font-normal lg:leading-[26px] lg:px-4 lg:py-2 !px-2 rounded- outline outline-[#E5745D] lg:outline-[7px] outline-[1vw]`}>
            {text}
        </button>
    )
}

export default CommonButton