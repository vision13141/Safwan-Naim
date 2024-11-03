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
        <div className='h-[100vh] w-[100%] '>
            <div className="flex">

                <div className="left-A w-[50%] h-[480px] flex">
                    <img src={About1} className='w-[370px] h-full' alt="" />
                    <div className="flex flex-col justify-between ml-[30px]">
                        <img src={About2} className='w-[170px] h-[230px]' alt="" />
                        <img src={About3} className='w-[170px] h-[230px]' alt="" />
                    </div>
                </div>

                <div className="right-A w-[50%] h-[480px] ">
                    <CommonSvgText text={`About Me`} />

                    <div className="pt-[15px]">
                        <CommonTitle text={`I Enjoy Solving Problems`} /> <br />
                        <CommonTitle text={` With Scalable Solutions`} /> <br />
                    </div>

                    <p className="text-[#00413D] font-Jost text-[16px] font-normal leading-[26px]">
                        Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                        aeci velit, sed quia non numquam eius modi tempora incidunt lao
                        magnam aliquam quaerat voluptatem reprehenderit.
                    </p>
                    <p className="text-[#00413D] font-Jost text-[16px] font-normal leading-[26px] mt-7">
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

            <div className="flex justify-between mt-[65px]">
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