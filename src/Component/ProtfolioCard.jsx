import React from 'react'

export const ProtfolioCard = ({ item }) => {

    const { title, name, image } = item

    return (
        <>
            <div className="w-[570px] h-[520px] border">
                <img src={image} alt="" className='w-[570px] h-[85%]' />
                <div className='w-[100%] h-[15%] bg-[#00413D] pl-[15px] flex flex-col justify-center'>
                    <h3 className='text-[24px] text-[#FFFFFF] font-semibold font-Vollkorn'>{title}</h3>
                    <p className='text-[16px] text-[#969595] font-normal font-Jost'>{name}</p>
                </div>
            </div>
        </>
    )
}
