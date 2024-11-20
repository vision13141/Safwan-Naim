import React from 'react'

const CommonSvgText = ({ text, className }) => {
    return (
        <p className={`${className} flex items-center text-[#E5745D] font-Vollkorn lg:text-[18px] text-[2vw] font-medium leading-normal tracking-[0.36px]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="6" viewBox="0 0 43 6" fill="none" className="mr-2">
                <path d="M42.8868 3L40 0.113249L37.1132 3L40 5.88675L42.8868 3ZM0 3.5H40V2.5H0V3.5Z" fill="#E5745D" />
            </svg>
            {text}
        </p>
    )
}

export default CommonSvgText