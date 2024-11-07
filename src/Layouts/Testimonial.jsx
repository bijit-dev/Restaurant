import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { FaSquareFull } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Men from '../assets/Men.png'
import Video from '../assets/Video.png'
import Design from '../assets/Design.png'
import Design3 from '../assets/Design3.png'
import Design4 from '../assets/Design4.png'
import Design5 from '../assets/Design5.png'

const Testimonial = () => {
    return (
        <section className='py-120 relative'>
            <div className='absolute top-40 -left-48 -z-20 hidden lg:block'><Image src={Design3}/></div>
            <div className='absolute bottom-1 -right-48 -z-20 hidden lg:block'><Image src={Design4}/></div>
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
                <Flex>
                    <div className='w-5/12 bg-Yello py-85 pl-110 pr-85 relative'>
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
                    <div className='w-7/12'>
                        <Image className='w-full' src={Video}/>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Testimonial