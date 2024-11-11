import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import bannerImg from '../assets/bannerImg.png'
import Vector from '../assets/Vector.png'
import BannerBg from '../assets/bannerBg.png'

const Banner = () => {
    return (
        <section className='bg-gradient-to-r from-r1 from-28% via-r2 via-60% to-r3 to-100% px-30w lg:px-0 py-8 lg:py-0 relative'>
            <Image className='w-full h-full absolute top-0 left-0 z-0' src={BannerBg} />
            
            <Container className='relative'>
                <h1 className='lg:w-830 font-Bebas font-bold uppercase text-white text-5xl leading-56L lg:text-[120px] lg:leading-130L lg:bg-gradient-to-r from-r1/0 to-r1/70 lg:absolute lg:top-254 lg:left-0 lg:z-20'>Taste the authentic Saudi cuisine</h1>

                <p className='lg:w-559 font-Roboto font-normal text-white text-xl lg:text-2xl lg:pt-522 pt-4 pb-38'>Among the best Saudi chefs in the world, serving you something beyond flavor.</p>

                <Button className='lg:mb-259w' text='Explore Menu' />
                
                <div className='pt-12 lg:pt-0 lg:absolute lg:top-130w lg:right-0'>
                    <Image className='w-full h-full' src={bannerImg} />


                    <Image className='absolute top-80 right-0 lg:-top-9 lg:-right-8' src={Vector} />

                    <div className='lg:w-120 w-72w h-72w lg:h-120 rounded-full flex items-center justify-center bg-Yello absolute bottom-3 right-4 lg:bottom-1.5 lg:-right-14'>
                        <div className='bg-Yello border-dashed border-2 border-r1 lg:w-105w w-16 h-16 lg:h-105w rounded-full flex items-center justify-center '>
                            <h2 className='lg:max-w-69w max-w-11 text-Black font-Bebas font-bold text-21f lg:text-4xl leading-5 lg:leading-9 uppercase text-center'>Today Offer</h2>
                        </div>
                    </div>
                </div>
                
            </Container>
        </section>
    )
}

export default Banner