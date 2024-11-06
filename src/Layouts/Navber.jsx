import React from 'react'
import Container from '../components/Container'
import Image  from '../components/Image'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Button from '../components/Button'

const Navber = () => {
    return (
        <section className='sticky top-0 z-50 bg-gradient-to-r from-r1 from-28% via-r2 via-60% to-r3 to-100%'>
            <Container>
                <Flex className='items-center'>
                    <Flex className="w-2/12 items-center">
                        <Image src={logo} />
                        <h1 className='text-white font-Poppins font-semibold text-28f pl-1.5'>Restaurant</h1>
                    </Flex>
                    <div className="w-8/12 ">
                        <ul className='flex items-center text-white font-Raleway font-medium text-base gap-x-10'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Clients</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-2/12 text-end py-6"><Button className='!py-2.5' text='Book a table'/> </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Navber