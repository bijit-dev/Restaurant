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
                        {/* <Image className='w-[129px] h-[74px] lg:w-[242px] lg:h-[136px] absolute top-7 left-7' src={MarketPlace} /> */}

                        <div>
                            <Flex className='gap-x-2.5 justify-center items-center bg-white text-Black rounded-3xl p-5 absolute top-7 left-7'>
                                <div className='p-8 rounded-full relative'>
                                    <Image className='absolute top-0 left-0 w-full h-full ' src={Border}/>
                                    <Image className='absolute top-3 left-2' src={Border2}/>
                                    <div className=' font-Open font-bold text-26f '>50 +</div>
                                </div>

                                <div className='w-93w font-Open font-semibold text-base leading-6'>Market Experiences</div>
                            </Flex>
                        </div>
                    </div>
                    <div className='lg:w-6/12 pt-8 lg:pt-0'>
                        <Flex className='flex gap-x-4 border-b border-r1'>
                            <button id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="true"  className='font-Roboto font-medium text-sm py-1.5 px-4 bg-r1  text-white cursor-pointer'>About</button>
                            <button id="pills-experience-tab" data-bs-toggle="pill" data-bs-target="#pills-experience" type="button" role="tab" aria-controls="pills-experience" aria-selected="false"  className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white cursor-pointer'>Experience</button>
                            <button id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"  className='font-Roboto font-medium text-sm text-Gray py-1.5 px-4 hover:bg-r1 hover:text-white cursor-pointer'>Contact</button>
                        </Flex>
                        

                        <div  id="pills-experience"><div id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab" tabIndex="0" className='py-8'>
                            <h1 className='font-Bebas uppercase font-medium lg:text-62f text-41f leading-48L lg:leading-62L pb-18w'>Exceptional culinary experience and delicious food</h1>
                            <p className='font-Roboto font-normal text-base  lg:leading-26L text-Gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        </div></div>

                        <div  id="pills-tabContent"><div id="pills-experience"
                            role="tabpanel" aria-labelledby="pills-experience-tab" tabIndex="0" className='py-8'>
                            <h1 className='font-Bebas uppercase font-medium lg:text-62f text-41f leading-48L lg:leading-62L pb-18w'> and delicious food</h1>
                            <p className='font-Roboto font-normal text-base  lg:leading-26L text-Gray'>Lorem ipsum bendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        </div></div>

                        <div id="pills-contact"
                            role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0" className='py-8'>
                            <h1 className='font-Bebas uppercase font-medium lg:text-62f text-41f leading-48L lg:leading-62L pb-18w'>Exceptional culius food</h1>
                            <p className='font-Roboto font-normal text-base  lg:leading-26L text-Gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed etation.</p>
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