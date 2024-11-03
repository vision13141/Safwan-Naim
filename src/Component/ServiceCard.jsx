import React from 'react'
import booking from '../assets/booking.png'
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = () => {
    return (
        <div>
            <div className="w-[370px] h-[360px] flex-shrink-0">
                <div className="ml-[30px] pt-[50px]">
                    <img src={booking} alt="" className='w-[68px] h-[68px]' />
                    <h2 className="text-[#00413D] font-Vollkorn text-[24px] pt-[26px] pb-[15px] font-extrabold leading-normal">Ui/Ux Design</h2>
                    <p className="text-[#00413D] font-Jost text-[16px] font-normal leading-[24px] pb-[30px]">
                        Dolor repellendus tempo ribus aue <br />
                        quibusdam offi ciis debitis rerum na <br />
                        aibus minima veniam.
                    </p>

                    <FaArrowRightLong className='text-[30px] text-[#00413D] hover:text-[#E5745D]' />
                </div>
            </div>
        </div>
    )
}

export default ServiceCard