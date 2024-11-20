import React, { useEffect, useRef, useState } from 'react'
import About1 from '../assets/About1.png'
import About2 from '../assets/About2.png'
import About3 from '../assets/About3.png'
import Prog from '../Layouts/Prog'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import Templet from '../../Templet.json'

const About = () => {

    return (
        <div className='lg:h-[100vh] w-[100%] lg:pt-[6vw]'>
            <div className="flex lg:flex-row lg:gap-0 flex-col items-center gap-10">

                <div className="left-A lg:w-[50%] w-full lg:h-[480px] h-[70vw] flex lg:justify-normal justify-between">
                    <img src={About1} className='lg:w-[370px] w-[67%] h-full object-cover' alt="" />
                    <div className="flex flex-col justify-between lg:ml-[30px] w-[30%]">
                        <img src={About2} className='lg:w-[170px] lg:h-[230px] w-full h-[49%] object-cover' alt="" />
                        <img src={About3} className='lg:w-[170px] lg:h-[230px] w-full h-[49%] object-cover' alt="" />
                    </div>
                </div>

                <div className="right-A lg:w-[50%] max-sm:w-[85vw] sm:w-[75vw] lg:h-[480px] lg:block flex flex-col items-center">
                    <CommonSvgText text={`About Me`} />

                    <div className="lg:pt-[15px] lg:py-0 py-[2vw]">
                        <CommonTitle text={`I Enjoy Solving Problems`} className={"lg:leading-[4vw] lg:text-[3.5vw]"} />
                        <CommonTitle text={` With Scalable Solutions`} className={"lg:leading-[4vw] lg:text-[3.5vw]"} />
                    </div>

                    <p
                        className="text-[#00413D] font-Jost text-[16px] lg:text-start text-center font-normal lg:leading-[26px]">
                        Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                        aeci velit, sed quia non numquam eius modi tempora incidunt lao
                        magnam aliquam quaerat voluptatem reprehenderit.
                    </p>

                    <p className="text-[#00413D] font-Jost text-[16px] lg:text-start text-center font-normal leading-[26px] mt-7">
                        Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                        reprehenderit non numquam eius.
                    </p>
                    <div className="bg-[#E5745D] mt-[55px] flex-shrink-0 w-[190px] h-[60px] flex items-center justify-center rounded-md">
                        <button className=" bg-[#E5745D] flex-shrink-0 w-[180px] h-[50px] border-white border-[1px] text-white text-lg font-normal leading-[26px] px-4 py-2 rounded-md">
                            Download
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:justify-between lg:gap-0 grid grid-cols-2 gap-5 mt-[65px]">
                {
                    Templet.map((el, idx) => {
                        return (
                            <Prog key={idx} stp={el.stp} text={el.text} />
                        )
                    })
                }
            </div>

            {/* <div className="flex justify-between">
                <Prog num={470 - 470 * 0.70} per={progState} text={`Graphic Design`} />
                <Prog num={470 - 470 * 0.85} per={85} text={`Web Designing`} />
                <Prog num={470 - 470 * 0.60} per={60} text={`Brand Design`} />
                <Prog num={470 - 470 * 0.40} per={40} text={`Web Development`} />
            </div> */}
        </div>
    )
}

export default About