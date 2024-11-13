import React from 'react'
import Marquee from "react-fast-marquee";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Foodcard from '../components/Foodcard'
import Image from '../components/Image'
import { FaSquareFull } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Burger from '../assets/Burger.png'
import Pizza from '../assets/Pizza.png'
import FrenchFries from '../assets/FrenchFries.png'
import Fried from '../assets/Fried.png'
import Design2 from '../assets/Design2.png'

const FoodItems = () => {
    return (
        <section id='fooditems' className='relative bg-[#FBF7F2] px-30w lg:px-0 py-8 lg:py-120'>
            <div className='hidden lg:block absolute top-60 -left-36'><Image src={Design2}/></div>
            <Container className='relative'>
                {/* heading code  */}
                <div className='justify-between items-center pb-30w lg:pb-14'>
                    <p className='text-r1 flex items-center gap-1 font-Roboto font-medium lg:text-xl text-base'><FaSquareFull className='text-xs'/> Crispy, Every Bite Taste</p>
                    <h1 className='font-Bebas font-medium text-40f lg:text-62f text-Black pt-2 lg:pt-4'>What Some of my Customers Say</h1>
                </div>


                <Marquee play='false' pauseOnHover="true" speed="70" className='grid '>
                    <Foodcard src={Burger} title='vegetables burger' text='Barbecue Italian cuisine pizza'/>
                    <Foodcard src={Pizza} title='Spacial Pizza' text='Barbecue Italian cuisine pizza'/>
                    <Foodcard src={FrenchFries} title='Spacial French fries' text='Barbecue Italian cuisine'/>
                    <Foodcard src={Fried} title='Cuisine Chicken' text='Japanese Cuisine Chicken'/>
                    
                </Marquee>

                {/* button add */}
                <Flex className='lg:absolute top-0 right-0 flex justify-center gap-x-8 pt-6'>
                        <div className='cursor-pointer bg-white p-4 lg:p-6 rounded-full shadow-xl hover:text-r1'>
                        <FaChevronLeft />
                        </div>
                        <div className='cursor-pointer bg-white p-4 lg:p-6 rounded-full shadow-xl hover:text-r1'>
                            <FaChevronRight />
                        </div>
                </Flex>
            </Container>
        </section>
    )
}

export default FoodItems