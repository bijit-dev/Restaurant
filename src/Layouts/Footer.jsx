import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Foodcard from '../components/Foodcard'
import Image from '../components/Image'
import { LuClock, LuPhoneCall, LuMail } from 'react-icons/lu'
import { PiMapPinLight } from "react-icons/pi";
import {FaFacebook,FaSquareXTwitter,FaSquareInstagram,FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <section className='bg-FooterBg bg-no-repeat bg-cover brightness-80 lg:py-120 py-30w px-30 lg:px-0'>
            <Container>
                <h1 className='font-Bebas font-bold lg:text-62f text-5xl text-white text-center '>We ready to have you the best dining experiences</h1>
                <Flex className='flex lg:flex-row flex-col gap-6 pt-12 pb-60w lg:pb-120'>
                    <div className='lg:w-3/12'>
                        <LuClock className='text-Yello text-3xl mx-auto'/>
                        <h2 className='font-Bebas text-2xl text-white font-bold text-center pt-6 pb-3'>Opening hours</h2>
                        <p className='font-Roboto text-base text-White font-normal text-center pb-2'>Monday - Sunday</p>
                        <p className='font-Roboto text-base text-White font-normal text-center'>9:00 AM to 11:30 PM</p>
                    </div>
                    <div className='lg:w-3/12'>
                        <LuPhoneCall className='text-Yello text-3xl mx-auto'/>
                        <h2 className='font-Bebas text-2xl text-white font-bold text-center pt-6 pb-3'>LET'S TALK</h2>
                        <p className='font-Roboto text-base text-White font-normal text-center pb-2'>Phone: 1-800-222-4545</p>
                        <p className='font-Roboto text-base text-White font-normal text-center'>Fax: 1-800-222-4545</p>
                    </div>
                    <div className='lg:w-3/12'>
                        <LuMail className='text-Yello mx-auto text-3xl'/>
                        <h2 className='font-Bebas text-2xl text-white font-bold text-center pt-6 pb-3'>BOOK A TABLE</h2>
                        <p className='font-Roboto text-base text-White font-normal text-center pb-2'>Email: demo@website.com</p>
                        <p className='font-Roboto text-base text-White font-normal text-center'>Support: support@website.com</p>
                    </div>
                    <div className='lg:w-3/12'>
                        <PiMapPinLight  className='text-Yello mx-auto text-3xl'/>
                        <h2 className='font-Bebas text-2xl text-white font-bold text-center pt-6 pb-3'>Our Address</h2>
                        <p className='w-56 font-Roboto text-base text-White font-normal text-center mx-auto pb-2'>123 Stree New York City , United States Of America.</p>
                    </div>
                </Flex>

                <Flex className='flex items-center justify-center gap-x-4 lg:gap-x-6 pb-4'>
                    <div className='text-white text-base lg:text-2xl border-2 border-white rounded-full p-3'><FaFacebook /></div>

                    <div className='text-white text-base lg:text-2xl border-2 border-white rounded-full p-3'><FaSquareXTwitter /></div>

                    <div className='text-white text-base lg:text-2xl border-2 border-white rounded-full p-3'><FaSquareInstagram /></div>

                    <div className='text-white text-base lg:text-2xl border-2 border-white rounded-full p-3'><FaLinkedin /></div>
                    
                </Flex>
                <div className='w-48 lg:w-271w mx-auto text-white font-Montserrat font-normal text-base text-center lg:text-21f'>© 2023 All Rights Reserved</div>
            </Container>
        </section>
    )
    }

export default Footer