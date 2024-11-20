import React from 'react'

const Container = ({ className, children }) => {
    return (
        <div className={`${className} lg:w-[1180px] w-container mx-auto`}>
            {children}
        </div>
    )
}

export default Container