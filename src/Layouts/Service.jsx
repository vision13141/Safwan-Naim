import React from 'react'
import ServiceCard from '../Component/ServiceCard';
import CommonSvgText from '../Component/CommonSvgText';
import CommonTitle from '../Component/CommonTitle';


const Service = () => {
    return (
        <div className='lg:h-[100vh] sm:min-h-[80vh] w-[100%]'>

            <CommonSvgText text={`MY SERVICES`} className={`justify-center lg:pt-[200px] pt-[15vw]`} />

            <div className='lg:pt-[30px] pt-[2vw]'>
                <CommonTitle text={`Provide Wide Range of`} className={`text-center lg:leading-[60px]`} />
                <CommonTitle text={`Digital Services`} className={`text-center lg:leading-[60px]`} />
            </div>

            <div className="flex flex-row flex-wrap lg:justify-between items-center lg:mt-[50px] my-[10vw] gap-[2vw] justify-center sm:gap-[3vw] lg:gap-0">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

        </div>
    )
}

export default Service