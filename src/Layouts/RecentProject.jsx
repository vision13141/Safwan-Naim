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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='lg:h-[100vh] lg:w-[100%] lg:px-0 w-[80%] mx-auto pt-[50px] relative'>
            <CommonSvgText text={`Recent Projects`} />

            <div className="pt-[10px] flex items-center">
                <CommonTitle text={`My Recent Projects`} />
            </div>

            <Slider {...settings} className='pt-[30px] w-[100%]' >
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