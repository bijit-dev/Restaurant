import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { FaSquareFull } from 'react-icons/fa'

const BookTable = () => {
    const PostFormData = () => {
        event.preventDefault();
        alert('Booking done!');
    }

    return (
        <section id='BookTable' className='px-30w lg:px-0 py-8 lg:py-120 bg-transparent'>
            <Container>
                <div className='lg:w-6/12'>
                    <p className='text-r1 flex items-center gap-1 font-Roboto font-medium lg:text-xl text-base'><FaSquareFull className='text-xs'/>Book Now </p>
                    <h1 className='font-Bebas font-medium text-40f lg:text-62f text-white pt-2 lg:pt-4'>Book Your Table</h1>
                    <p className='lg:w-545 font-Roboto  font-normal lg:text-lg text-base text-white pt-2 lg:pt-4 pb-10'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        event.preventDefault();
                    <form onSubmit={PostFormData} action="">
                        <Flex className='gap-x-30w mb-6 '>
                            <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 mb-6 lg:mb-0 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Your Name *'/>
                            <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="email" placeholder='Your Email'/>
                        </Flex>
                        <Flex className='gap-x-30w mb-6 '>
                            <input className='font-Roboto font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 mb-6 lg:mb-0 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="date" placeholder='Reservation Date' />
                            <input className='font-Roboto  font-normal text-white text-sm w-full lg:w-1/2 py-3 px-4 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="number" placeholder='Total People'/>
                        </Flex>
                        <textarea className='font-Roboto  font-normal text-white text-sm w-full py-3 px-4 mb-6 bg-transparent border-2 border-Wb placeholder:text-white placeholder:text-sm placeholder:font-Roboto placeholder:font-normal' type="text" placeholder='Message' rows="5" spellCheck="false" />
                        <Button type="submit" text='Book Now' />
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default BookTable