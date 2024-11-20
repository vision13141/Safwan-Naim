import React from 'react'
import CommonSvgText from '../Component/CommonSvgText'
import CommonTitle from '../Component/CommonTitle'
import ClientCard from '../Component/ClientCard'
import Slider from "react-slick";
import Container from '../Component/Container';
import coma1 from '../assets/coma1.png'
import coma2 from '../assets/coma2.png'


const Client = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
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
                    slidesToShow: 1,
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
        <div className='w-[100%] lg:h-[85vh] bg-[#F9F4F1] py-[10vw] lg:py-0 relative'>
            <img src={coma1} alt="" className='absolute top-[145px] left-[160px] opacity-[50%]' />
            <img src={coma2} alt="" className='absolute bottom-[145px] right-[160px] opacity-[50%]' />
            <Container>
                <CommonSvgText text={`Client Testimonial`} className={`justify-center lg:pt-[150px]`} />
                <CommonTitle text={`Feedback From Client`} className={`text-center pt-[20px]`} />

                <Slider {...settings} className='mt-[50px] lg:pb-[70px]'>
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                    <ClientCard />
                </Slider>
            </Container>
        </div>
    )
}

export default Client