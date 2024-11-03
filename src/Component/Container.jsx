import React from 'react'

const Container = ({ className, children }) => {
    return (
        <div className={`${className} w-[1180px] mx-auto`}>
            {children}
        </div>
    )
}

export default Container