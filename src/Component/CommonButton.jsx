import React from 'react'

const CommonButton = ({ text, className }) => {
    return (

        <button className={`${className}  bg-[#E5745D] flex-shrink-0 w-[180px] h-[50px] border-white border-[1px] text-white text-lg font-normal leading-[26px] px-4 py-2 rounded- outline outline-[#E5745D] outline-[7px]`}>
            {text}
        </button>
    )
}

export default CommonButton