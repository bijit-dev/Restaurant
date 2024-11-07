import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
// import Image from '../components/Image'
import { FaSquareFull } from 'react-icons/fa'

const Booking = () => {
    return (
        <section className='py-120 bg-ContactBg bg-cover bg-no-repeat'>
            <Container>
                <div className='w-6/12'>
                    <p className='text-r1 flex items-center gap-1 font-Roboto font-bold text-xl'><FaSquareFull className='text-xs'/>Book Now </p>
                    <h1 className='font-Bebas font-bold text-62f text-white pt-4'>Book Your Table</h1>
                    <p className='w-522 font-Roboto  font-normal text-lg text-white pt-4 pb-10'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    <Flex className='gap-x-[30px] mb-6 '>
                        <input className='font-Roboto  font-normal text-white text-2xl w-[50%] py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-base placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Your Name *'/>
                        <input className='font-Roboto  font-normal text-white text-2xl w-[50%] py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-base placeholder:font-Roboto placeholder:font-normal' type="email" placeholder='Your Email'/>
                    </Flex>
                    <Flex className='gap-x-[30px] mb-6'>
                        <input className='font-Roboto  font-normal text-white text-2xl w-[50%] py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-base placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Reservation Date'/>
                        <input className='font-Roboto  font-normal text-white text-2xl w-[50%] py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-base placeholder:font-Roboto placeholder:font-normal' type="number" placeholder='Total People'/>
                    </Flex>
                    <textarea className='font-Roboto  font-normal text-white text-2xl w-full py-3 px-4 mb-6 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-base placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Message' rows="5" spellCheck="false" />
                    <Button text='Book Now'/>
                </div>
            </Container>
        </section>
    )
}

export default Booking