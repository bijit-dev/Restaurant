import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import Image from '../components/Image'
import bannerImg from '../assets/bannerImg.png'
import Vector from '../assets/Vector.png'

const Banner = () => {
    return (
        <section className='bg-gradient-to-r from-r1 from-28% via-r2 via-60% to-r3 to-100%'>
            <Container className='relative'>
                <h1 className='w-840 font-Bebas font-bold uppercase text-white text-68f bg-gradient-to-r from-r1/0 to-r1/70 absolute top-19 left-0 z-20'>Taste the authentic Saudi cuisine</h1>
                <p className='w-480 font-Roboto font-normal text-white text-2xl pt-522 pb-9'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                <Button className='mb-259' text='Explore Menu' />
                
                <div className='lg:absolute lg:top-[130px] lg:right-0'>
                    <Image className='w-full h-full' src={bannerImg} />
                    <Image className='absolute -top-9 -right-8' src={Vector} />

                    <div className='w-32 h-32 rounded-full flex items-center justify-center bg-Yello absolute bottom-1.5 -right-14'>
                        <div className='bg-Yello border-dashed border-2 border-r1 w-28 h-28 rounded-full flex items-center justify-center '>
                            <h2 className='max-w-18 text-Black font-Bebas font-bold text-2xl uppercase text-center'>Today Offer</h2>
                        </div>
                    </div>
                </div>
                
            </Container>
        </section>
    )
}

export default Banner