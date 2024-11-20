import React from 'react'

const CommonTitle = ({ className, text }) => {
    return (
        <h1 className={`${className} text-[#00413D] font-Vollkorn xl:text-[50px] lg:leading-[40px] text-[5vw] leading-[7vw] font-medium `}>
            {text}
        </h1>
    )
}

export default CommonTitle