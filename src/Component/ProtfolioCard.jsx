import React from 'react'

export const ProtfolioCard = ({ item }) => {

    const { title, name, image } = item

    return (
        <>
            <div className="lg:w-[570px] lg:h-[520px] max-sm:w-full max-sm:h-[100vw] w-[50vw] h-[60vw] border">
                <img src={image} alt="" className='lg:w-[570px] w-full h-[85%]' />
                <div className='w-[100%] h-[15%] bg-[#00413D] pl-[15px] flex flex-col justify-center'>
                    <h3 className='text-[24px] text-[#FFFFFF] font-semibold font-Vollkorn'>{title}</h3>
                    <p className='text-[16px] text-[#969595] font-normal font-Jost'>{name}</p>
                </div>
            </div>
        </>
    )
}
