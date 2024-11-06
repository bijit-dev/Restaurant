import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import AboutImg from '../assets/AboutImg.png'
import MarketPlace from '../assets/MarketPlace.png'
import CallAlt from '../assets/call-alt.png'

const About = () => {
    return (
        <section className='py-[120px] bg-white'>
            <Container>
                <Flex className='gap-x-20'>
                    <div className='w-6/12 h-[460px] relative'>
                        <Image className='w-full' src={AboutImg} />
                        <Image className='absolute top-7 left-7' src={MarketPlace} />
                    </div>
                    <div className='w-6/12'>
                        <Flex className='gap-x-4 border-b border-r1'>
                            <h4 className='font-Inter font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1  hover:text-white'>About</h4>
                            <h4 className='font-Inter font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white'>Experience</h4>
                            <h4 className='font-Inter font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white'>Contact</h4>
                        </Flex>

                        <div className='py-8'>
                            <h1 className='font-Bebas uppercase font-bold text-34f pb-4'>Exceptional culinary experience and delicious food</h1>
                            <p className='font-Roboto font-normal text-base text-Gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        </div>

                        <Flex className='gap-x-8 items-center'>
                            <Button text='ABOUT MORE' />
                            <Flex className='gap-x-2 py-4 pr-6'>
                                <Image className='w-[24px] h-[24px]' src={CallAlt}/>
                                <p className='font-Roboto font-bold text-lg text-Black'>+88 3426 739 485</p>
                            </Flex>
                        </Flex>

                    </div>
                </Flex>

            </Container>
        </section>
    )
}

export default About