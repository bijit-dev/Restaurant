import React, { useState } from 'react'
import Container from '../components/Container'
import Image  from '../components/Image'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import { RxCross2 } from 'react-icons/rx'
import { HiBars4 } from 'react-icons/hi2'


const Navber = () => {
    let [show,setshow]=useState(false)

    let handleClick=()=>{
        setshow(!show)
    }
    let navlist = <div id='Navbg' className='bg-gradient-to-r from-r1 from-28% via-r2 via-60% to-r3 to-100% w-full absolute top-20 left-0 z-10'>
        <ul className='text-center text-lg text-white font-medium font-pop p-2'>
            <li className='p-2'>Home</li>
            <li className='p-2'>About</li>
            <li className='p-2'>Portfolio</li>
            <li className='p-2'>Clients</li>
            <li className='p-2'>Blog</li>
            <li className='p-2'>Contact</li>
        </ul>
        <div className="py-6 text-center"><Button className='!py-2.5' text='Book a table'/></div>
        </div>
    return (
        <section id='Navbg' className='lg:sticky top-0 z-50 bg-transparent px-7 lg:px-0' >
            {show && navlist}
            <Container className='relative'>
                <Flex className='items-center'>
                    <Flex className="lg:w-2/12 flex items-center py-5 lg:py-0">
                        <Image src={logo} />
                        <h1 className='text-white font-Poppins font-semibold text-28f pl-1.5'>Restaurant</h1>
                    </Flex>
                    <div className="hidden lg:block w-8/12 ">
                        <ul className='flex items-center text-white font-Raleway font-medium text-base gap-x-10 pl-14'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Clients</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="hidden lg:block w-2/12 text-end py-6"><Button className='!py-2.5' text='Book a table'/> </div>
                </Flex>
                <div onClick={handleClick} className='lg:hidden text-white text-3xl absolute top-[34px] right-[16px] z-20'>
                    {
                        show?<RxCross2  className='text-2xl'/>:<HiBars4  className='text-2xl'/>
                    }
                </div>
            </Container>
        </section>
    )
}

export default Navber