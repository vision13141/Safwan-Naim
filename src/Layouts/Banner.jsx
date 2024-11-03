import React from 'react'
import Group from '../assets/Group.png'
import bennarImg from '../assets/bennarImg.png'
import CommonButton from '../Component/CommonButton'

const Banner = () => {
    return (
        <div className='w-full h-[850px] flex relative'>
            <div className="left-b bg-[#00413D] w-[60%] h-full">
                <div className="">
                    <img src={Group} alt="" className='absolute top-[50%] translate-y-[-50%] opacity-10' />
                    <div className="absolute top-[50%] translate-y-[-50%] left-[19%] flex flex-col">
                        <h1 className="text-white font-['Vollkorn'] text-[104px] font-bold leading-[110px]">
                            Hello! <br /> I'm Zarror Nibors
                        </h1>
                        <p className="text-[rgba(255,255,255,0.50)] font-Jost pt-[16px] text-[20px] font-normal leading-[30px]">
                            I’am freelance UI/UX Desogner based in Indonesia who loves to craft attractive <br /> design experiences for the web.
                        </p>


                        <CommonButton text={`Download`} className={`mt-[3vw]`} />
                    </div>

                </div>
            </div>
            <div className="right-b w-[40%] h-full">
                <img src={bennarImg} className='h-[100%] w-[100%]' alt="" />
            </div>
        </div>
    )
}

export default Banner