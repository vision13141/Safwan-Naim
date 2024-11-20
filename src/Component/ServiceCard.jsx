import React from 'react'
import booking from '../assets/booking.png'
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = () => {
    return (
        <div className=''>
            <div className="lg:w-[370px] lg:h-[360px] max-sm:w-[40vw] w-[40vw] flex-shrink-0">
                <div className="lg:ml-[30px] lg:px-0 px-[3vw] lg:pt-[50px] pt-[3vw]">

                    <img src={booking} alt="" className='lg:w-[68px] lg:h-[68px] w-[40px] h-[40px] object-cover' />

                    <h2 className="text-[#00413D] font-Vollkorn lg:text-[24px] lg:pt-[26px] lg:pb-[15px] pt-[2.5vw] pb-[1.5vw] text-[3vw] font-extrabold leading-normal">Ui/Ux Design</h2>

                    <p className="text-[#00413D] font-Jost lg:text-[16px] font-normal lg:leading-[24px] lg:pb-[30px] text-[2vw]">
                        Dolor repellendus tempo ribus aue <br />
                        quibusdam offi ciis debitis rerum na <br />
                        aibus minima veniam.
                    </p>

                    <FaArrowRightLong className='lg:text-[30px] text-[3vw] lg:mt-0 mt-1 text-[#00413D] hover:text-[#E5745D]' />

                </div>
            </div>
        </div>
    )
}

export default ServiceCard