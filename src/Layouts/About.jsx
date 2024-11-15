import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import AboutImg from '../assets/AboutImg.png'
import CallAlt from '../assets/call-alt.png'
import Package from '../assets/package.png'
import Medal from '../assets/medal.png'
import Bag from '../assets/bag.png'
import Design1 from '../assets/Design1.png'
import Border from '../assets/border.png'
import Border2 from '../assets/border2.png'

const About = () => {
    
    
    return (
        <section id='about' className='bg-white relative lg:py-120 px-30w lg:px-0 py-8 '>
            <div className='hidden lg:block absolute top-60 right-0 -z-20'><Image src={Design1}/></div>
            <Container>
                <Flex className='gap-x-20 pb-12 lg:pb-72w'>
                    <div className='lg:w-6/12 relative'>
                        <Image className='w-full' src={AboutImg} />

                        <div>
                            <Flex className='flex gap-x-2.5 justify-center items-center bg-white text-Black rounded-3xl p-[10px] lg:p-5 absolute top-4 lg:top-7 left-3 lg:left-7'>
                                <div className='p-4 lg:p-8 rounded-full relative'>
                                    <Image className='absolute top-0 left-0 w-full h-full ' src={Border}/>
                                    <Image className='w-3 lg:w-4 absolute top-1 lg:top-3 left-1 lg:left-2' src={Border2}/>
                                    <div className=' font-Open font-bold lg:text-26f text-[13.91px]'>50 +</div>
                                </div>

                                <div className='w-12 lg:w-93w font-Open font-semibold lg:text-base text-[8.5px] lg:leading-6 leading-[12.62px]'>Market Experiences</div>
                            </Flex>
                        </div>
                    </div>


                    <div className='lg:w-6/12 pt-8 lg:pt-0'>
                        <Flex className='flex gap-x-4 border-b border-r1'>
                            <button className='font-Roboto font-medium text-sm py-1.5 px-4 bg-r1  text-white cursor-pointer'>About</button>
                            <button className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white cursor-pointer'>Experience</button>
                            <button className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white cursor-pointer'>Contact</button>
                        </Flex>
                        

                        <div className='py-8'>
                            <h1 className='font-Bebas uppercase font-medium lg:text-62f text-41f leading-48L lg:leading-62L pb-18w'>Exceptional culinary experience and delicious food</h1>
                            <p className='font-Roboto font-normal text-base  lg:leading-26L text-Gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        </div>
                        
                        <Flex className='flex gap-x-4 lg:gap-x-8 items-center'>
                            <Button text='ABOUT MORE' />
                            <Flex className='flex gap-x-2 justify-center items-center lg:py-4'>
                                <Image className='w-5 h-5' src={CallAlt}/>
                                <p className='font-Roboto font-medium text-sm lg:text-lg text-Black'>+88 3426 739 485</p>
                            </Flex>
                        </Flex>

                    </div>
                </Flex>

                <Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4'>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Package} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-medium text-2xl lg:text-30f text-Black pb-0.5'>fast delivery</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Within 30 minutes</p>
                        </div>
                    </Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4 py-9 '>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Medal} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-medium text-2xl lg:text-30f text-Black pb-0.5'>absolute dining</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Best buffet restaurant</p>
                        </div>
                    </Flex>
                    <Flex className='flex lg:w-4/12 items-center gap-x-4'>
                        <div className='p-6 bg-white  rounded-full shadow-xl'><Image src={Bag} /></div>
                        <div>
                            <h2 className='uppercase font-Bebas font-medium text-2xl lg:text-30f text-Black pb-0.5'>pickup delivery</h2>
                            <p className='font-Roboto font-normal text-xl text-Black'>Grab your food order</p>
                        </div>
                    </Flex>
                </Flex>

            </Container>
        </section>
    )
}

export default About