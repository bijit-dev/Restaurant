import React, { useState } from 'react'
import Flex from './Flex'
import Image from './Image'
import { FaPause, FaPlay } from 'react-icons/fa'
import Design5 from '../assets/Design5.png'
import Men from '../assets/Men.png'
import Food from '../assets/Food.mp4'

const Blogcard = () => {
    let [show,setshow]=useState(false)

    let handleClick=()=>{
        setshow(!show)
    }

    return (
        <>
            <Flex className='lg:flex-row-reverse'>
                    <div onClick={handleClick} className='lg:w-7/12 h-60 bg-black lg:h-auto relative'>
                    <video className='w-full h-full' autoplay controls src={Food}></video>
                    
                        
                        
                        <div onClick={handleClick} className='cursor-pointer text-3xl absolute top-1/2 left-1/2 ta z-20 -translate-x-1/2 -translate-y-1/2 '>
                        {
                            show?<div className='p-4 bg-Yello rounded-full opacity-0 delay-100 after:opacity-80 '><FaPause  className='text-xl'/></div>:<div className='p-4 bg-Yello rounded-full'><FaPlay  className='text-xl' /></div>
                        }
                        </div>
                    </div>
                    <div
                        className='lg:w-5/12 p-6 bg-Yello lg:py-85 lg:pl-110 lg:pr-85 relative'
                    >
                        <div className='absolute -bottom-1 w-6 lg:w-10 lg:bottom-12 left-0'><Image src={Design5} /></div>
                        <div className=' absolute top-6 lg:top-16 lg:left-20 left-4 font-[Cotorismedium] font-normal text-6xl'>“</div>
                        {/* <div className='absolute top-18 left-20'>
                            <Image src={Design} />
                        </div> */}
                        <p className=' lg:max-w-360w font-Roboto font-normal text-lg lg:text-xl !leading-34L text-Black pl-[19px] lg:pl-0 pt-5 lg:pt-0 mb-10 lg:mb-40'>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                        <Flex className='flex justify-between border-b border-Black'>
                            <div>
                                <h3 className='font-Bebas font-medium text-lg text-Black'>KHALID AL DAWSRY</h3>
                                <p className='font-Roboto font-normal text-sm text-Gray'>Jeddah, Saudi</p>
                            </div>
                            <div className='border-b-4 border-r1'>
                                <Image src={Men} />
                            </div>
                        </Flex>

                    </div>
                </Flex>
        </>
    )
}

export default Blogcard