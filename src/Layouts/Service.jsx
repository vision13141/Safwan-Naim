import React from 'react'
import ServiceCard from '../Component/ServiceCard';
import CommonSvgText from '../Component/CommonSvgText';
import CommonTitle from '../Component/CommonTitle';


const Service = () => {
    return (
        <div className='h-[100vh] w-[100%]'>

            <CommonSvgText text={`MY SERVICES`} className={`justify-center pt-[200px]`} />

            <div className='pt-[30px]'>
                <CommonTitle text={`Provide Wide Range of`} className={`text-center`} /> <br />
                <CommonTitle text={`Digital Services`} className={`text-center`} />
            </div>

            <div className="flex justify-between pt-[50px]">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

        </div>
    )
}

export default Service