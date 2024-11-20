import React from 'react'
import Avatar from '../assets/Avatar.png'
import Star from '../assets/Star.png'
import Vector from '../assets/Vector.png'


const ClientCard = () => {
    return (
        <div className="lg:w-[570px] lg:h-[260px] relative">
            <div className="h-[10px] bg-[#E5745D]"></div>

            <div className="h-[140px] flex items-center pl-[35px] shadowName">
                <p className='font-Jost font-normal text-[16px] text-[#00413D] leading-[26px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry.Lorem Ipsum is simply dummy text of the printing and this <br />
                    typesetting industry.
                </p>
                <img src={Vector} alt="" className='absolute top-[142px] left-[70px]' />
            </div>

            <div className="flex mt-[35px] ml-[50px] items-center gap-[20px]">
                <img src={Avatar} alt="" />

                <div className="">
                    <h3 className='text-[20px] text-[#00413D] font-semibold font-Vollkorn'>Michale Doie</h3>
                    <p className='text-[14px] text-[#00413D] font-normal font-Jost'>Product Designer</p>
                    <img src={Star} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClientCard