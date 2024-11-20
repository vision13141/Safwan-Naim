import React from 'react'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import CommonButton from '../Component/CommonButton'

const Contact = () => {
    return (
        <div className='flex lg:flex-wrap flex-col justify-between w-[100%] h-[78vh]'>

            <div className="lg:w-[470px] lg:h-[580px] h-[40vw]">

                <iframe
                    className='h-full w-full'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1727628601996!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="lg:w-[670px] w-[90vw] mx-auto h-[580px] flex justify-center flex-col">
                <CommonSvgText text={`Get In Touch`} />
                <CommonTitle text={`Feel Free to Contact`} className={`pt-[25px] pb-[35px]`} />

                <form className='grid grid-cols-2 gap-[30px]'>
                    <input placeholder='Enter Name' type='text' className='shadowINput pl-2  inline-block text-[#00413D] placeholder:text-[#00413D] placeholder:font-Jost placeholder:font-normal lg:w-[300px] h-[40px] outline-none' />

                    <input placeholder='Enter Email' type='email' className='shadowINput pl-2  inline-block text-[#00413D] placeholder:text-[#00413D] placeholder:font-Jost placeholder:font-normal lg:w-[300px] h-[40px] outline-none' />

                    <input placeholder='Phone' type='text' className='shadowINput pl-2  inline-block text-[#00413D] placeholder:text-[#00413D] placeholder:font-Jost placeholder:font-normal lg:w-[300px] h-[40px] outline-none' />

                    <input placeholder='Subject' type='text' className='shadowINput pl-2  inline-block text-[#00413D] placeholder:text-[#00413D] placeholder:font-Jost placeholder:font-normal lg:w-[300px] h-[40px] outline-none' />

                    <input placeholder='Subject' type='text' className='shadowINput pl-2 inline-block text-[#00413D] placeholder:text-[#00413D] placeholder:font-Jost placeholder:font-normal w-[100%] h-[40px] outline-none ' />
                </form>


                <CommonButton text={`Contact Us`} className={`mt-[50px]`} />
            </div>

        </div>
    )
}

export default Contact