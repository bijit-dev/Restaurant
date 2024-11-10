import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { FaPlay, FaSquareFull } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight, FaPause } from "react-icons/fa6";
import Men from '../assets/Men.png'
import Design from '../assets/Design.png'
import Design3 from '../assets/Design3.png'
import Design4 from '../assets/Design4.png'
import Design5 from '../assets/Design5.png'

const Testimonial = () => {
    let [show,setshow]=useState(true)

    let handleClick=()=>{
        setshow(!show)
    }
    return (
        <section className='py-120 relative'>
            <div className='hidden lg:block absolute top-40 -left-48'><Image src={Design3}/></div>
            <div className='hidden lg:block absolute bottom-10 left-[73%] -z-20'><Image src={Design4}/></div>
            
            <Container>
                <Flex className='justify-between items-center pb-14'>
                    <div>
                        <p className='text-r1 flex items-center gap-1 font-Roboto font-bold text-xl
                        '><FaSquareFull className='text-xs'/> Crispy, Every Bite Taste</p>
                        <h1 className='font-Bebas font-bold text-62f text-Black pt-4'>What Some of my Customers Say</h1>
                    </div>
                    <Flex className='gap-x-8 '>
                        <div className='bg-white p-6 rounded-full shadow-xl hover:text-r1'>
                        <FaChevronLeft />
                        </div>
                        <div className='bg-white p-6 rounded-full shadow-xl hover:text-r1'>
                        <FaChevronRight />
                        </div>
                    </Flex>
                </Flex>
                <Flex className='lg:flex-row-reverse'>
                    <div className='lg:w-7/12 relative'>
                        {/* <video width="100%" height="120%" autoplay controls src={FoodVideo}></video> */}
                        {/* <video src="https://youtu.be/kRCH8kD1GD0?si=9SJIb5UxrzLvKdWD"></video> */}

                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/kRCH8kD1GD0?si=kXY4wVXDWDj2Cy_I&amp;start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        {/* <Image src={Video} /> */}
                        
                        <div onClick={handleClick} className='text-3xl absolute top-1/2 left-1/2 ta z-20 -translate-x-1/2 -translate-y-1/2'>
                        {
                            show?<div className='p-4 bg-Yello rounded-full'><FaPlay  className='text-xl'/></div>:<div className='p-4 bg-Yello rounded-full'><FaPause  className='text-xl'/></div>
                        }
                        </div>
                    </div>
                    <div className='lg:w-5/12 bg-Yello py-85 pl-110 pr-85 relative'>
                        <div className='absolute bottom-12 left-0'><Image src={Design5}/></div>
                        <div className='absolute top-18 left-20'>
                            <Image src={Design} />
                        </div>
                        <p className='  font-Roboto font-normal text-xl text-Black text-justify pb-40'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                        <Flex className='justify-between border-b border-Black'>
                            <div>
                                <h3 className='font-Bebas font-bold text-lg text-Black'>KHALID AL DAWSRY</h3>
                                <p className='font-Roboto font-normal text-sm text-Gray'>Jeddah, Saudi</p>
                            </div>
                            <div className='border-b-4 border-r1'>
                                <Image src={Men} />
                            </div>
                        </Flex>

                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Testimonial