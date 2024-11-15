import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { FaPlay, FaPause, FaSquareFull } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Design3 from '../assets/Design3.png'
import Design4 from '../assets/Design4.png'
import Blogcard from '../components/Blogcard'
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/nextArrow'


const CustomersSay = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        
    };
    return (
        <section id='CustomersSay' className='bg-white px-30w lg:px-0 py-8 lg:py-120  relative'>
            <div className='hidden lg:block absolute top-40 -left-48'><Image src={Design3}/></div>
            <div className='hidden lg:block absolute bottom-10 right-0 -z-20'><Image src={Design4}/></div>
            
            <Container className='relative'>
                {/* heading code  */}
                <div className='justify-between items-center pb-6 lg:pb-14'>
                    <p className='text-r1 flex items-center gap-1 font-Roboto font-medium lg:text-xl text-base'><FaSquareFull className='text-xs'/> Crispy, Every Bite Taste</p>
                    <h1 className='font-Bebas font-medium text-40f lg:text-62f text-Black pt-2 lg:pt-4'>What Some of my Customers Say</h1>
                </div>

                {/* contain add  */}
                <Slider {...settings}>
                    <Blogcard />
                    <Blogcard />

                </Slider>

                {/* button add */}
                <Flex className='lg:absolute top-0 right-0 flex justify-center gap-x-8 pt-6'>
                    <div className='cursor-pointer bg-white p-4 lg:p-6 rounded-full shadow-xl hover:text-r1'>
                        <FaChevronLeft />
                    </div>
                    
                    <div  className='cursor-pointer bg-white p-4 lg:p-6 rounded-full shadow-xl hover:text-r1'>
                        <FaChevronRight />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default CustomersSay