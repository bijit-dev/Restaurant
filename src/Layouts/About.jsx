import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import AboutImg from '../assets/AboutImg.png'
import MarketPlace from '../assets/MarketPlace.png'
import CallAlt from '../assets/call-alt.png'
import Package from '../assets/package.png'
import Medal from '../assets/medal.png'
import Bag from '../assets/bag.png'
import Design1 from '../assets/Design1.png'

const About = () => {
    return (
        <section className=' relative lg:py-120 px-30w lg:px-0 py-8 '>
            <div className='hidden lg:block absolute top-60 right-0 -z-20'><Image src={Design1}/></div>
            <Container>
                <Flex className='gap-x-20 pb-12 lg:pb-72w'>
                    <div className='lg:w-6/12 relative'>
                        <Image className='w-full' src={AboutImg} />
                        <Image className='w-[129px] h-[74px] lg:w-[242px] lg:h-[136px] absolute top-7 left-7' src={MarketPlace} />
                        {/* <div>
                            <Flex className='gap-x-2.5 justify-center items-center bg-white text-Black rounded-3xl p-5 absolute top-7 left-7'>
                                <div className='p-8 border-8 border-h border-Yello rounded-full'>
                                    <div className=' font-Open font-bold text-26f '>50 +</div>
                                </div>

                                <div className='w-93w font-Open font-semibold text-base leading-6'>Market Experiences</div>
                            </Flex>
                        </div> */}
                    </div>
                    <div className='lg:w-6/12 pt-8 lg:pt-0'>
                        <Flex className='flex gap-x-4 border-b border-r1'>
                            <h4 className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1  hover:text-white'>About</h4>
                            <h4 className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white'>Experience</h4>
                            <h4 className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white'>Contact</h4>
                        </Flex>

                        <div className='py-8'>
                            <h1 className='font-Bebas uppercase font-bold lg:text-62f text-41f leading-48L lg:leading-62L pb-18w'>Exceptional culinary experience and delicious food</h1>
                            <p className='font-Roboto font-normal text-base  lg:leading-26L text-Gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        </div>

                        <Flex className='flex gap-x-4 lg:gap-x-8 items-center'>
                            <Button text='ABOUT MORE' />
                            <Flex className='flex gap-x-2 justify-center items-center lg:py-4'>
                                <Image className='w-5 h-5' src={CallAlt}/>
                                <p className='font-Roboto font-bold text-sm lg:text-lg text-Black'>+88 3426 739 485</p>
                            </Flex>
                        </Flex>

                    </div>
                </Flex>

                <Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4'>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Package} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-bold text-2xl lg:text-30f text-Black pb-0.5'>fast delivery</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Within 30 minutes</p>
                        </div>
                    </Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4 py-9 '>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Medal} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-bold text-2xl lg:text-30f text-Black pb-0.5'>absolute dining</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Best buffet restaurant</p>
                        </div>
                    </Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4'>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Bag} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-bold text-2xl lg:text-30f text-Black pb-0.5'>pickup delivery</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Grab your food order</p>
                        </div>
                    </Flex>
                </Flex>

            </Container>
        </section>
    )
}

export default About