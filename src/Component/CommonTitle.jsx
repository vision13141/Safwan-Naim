import React from 'react'

const CommonTitle = ({ className, text }) => {
    return (
        <h1 className={`${className} text-[#00413D]  font-Vollkorn text-[50px] font-medium leading-[40px]`}>
            {text}
        </h1>
    )
}

export default CommonTitle