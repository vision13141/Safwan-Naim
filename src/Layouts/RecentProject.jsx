import React from 'react'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import RecentProjectC from '../Component/RecentProjectC';
import recent1 from '../assets/recent1.png'
import recent2 from '../assets/recent2.png'
import recent3 from '../assets/recent3.png'
import CommonButton from '../Component/CommonButton';
import Slider from "react-slick";
import SliderButton from '../Component/SliderButton';
import SliderRight from '../Component/SliderRight';



const RecentProject = () => {
    const settings = {
        // dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SliderButton />,
        nextArrow: <SliderRight />,
    };
    return (
        <div className='h-[100vh] w-[100%] pt-[50px] relative'>
            <CommonSvgText text={`Recent Projects`} />

            <div className="pt-[10px] flex justify-between items-center">
                <CommonTitle text={`My Recent Projects`} />
            </div>

            <Slider {...settings} className='pt-[30px]' >
                <RecentProjectC src={recent1} text={`Analytics, UI-Ux`} />
                <RecentProjectC src={recent2} text={`Mobile App`} />
                <RecentProjectC src={recent3} text={`Web Development`} />
                <RecentProjectC src={recent1} text={`Analytics, UI-Ux`} />
                <RecentProjectC src={recent2} text={`Mobile App`} />
                <RecentProjectC src={recent3} text={`Web Development`} />
                <RecentProjectC src={recent1} text={`Analytics, UI-Ux`} />
                <RecentProjectC src={recent2} text={`Mobile App`} />
                <RecentProjectC src={recent3} text={`Web Development`} />
            </Slider>

            <CommonButton text={`Explore More`} className={`mx-auto mt-[60px]`} />
        </div>
    )
}

export default RecentProject