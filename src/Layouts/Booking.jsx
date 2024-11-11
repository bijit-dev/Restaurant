import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
// import Image from '../components/Image'
import { FaSquareFull } from 'react-icons/fa'

const Booking = () => {
    return (
        <section className='px-30w lg:px-0 py-8 lg:py-120 bg-ContactBg bg-cover bg-center bg-no-repeat'>
            <Container>
                <div className='lg:w-6/12'>
                    <p className='text-r1 flex items-center gap-1 font-Roboto font-bold lg:text-xl text-base'><FaSquareFull className='text-xs'/>Book Now </p>
                    <h1 className='font-Bebas font-bold text-40f lg:text-62f text-white pt-2 lg:pt-4'>Book Your Table</h1>
                    <p className='lg:w-545 font-Roboto  font-normal lg:text-lg text-base text-white pt-2 lg:pt-4 pb-10'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    <Flex className='gap-x-30w mb-6 '>
                        <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 mb-6 lg:mb-0 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Your Name *'/>
                        <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="email" placeholder='Your Email'/>
                    </Flex>
                    <Flex className='gap-x-30w mb-6'>
                        <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 mb-6 lg:mb-0 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Reservation Date'/>
                        <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="number" placeholder='Total People'/>
                    </Flex>
                    <textarea className='font-Roboto  font-normal text-white text-sm w-full py-3 px-4 mb-6 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Message' rows="5" spellCheck="false" />
                    <Button text='Book Now'/>
                </div>
            </Container>
        </section>
    )
}

export default Booking