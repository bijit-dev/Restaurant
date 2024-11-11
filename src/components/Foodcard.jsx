import React from 'react'
import Image from '../components/Image'


const Foodcard = ({src,title,text}) => {
    return (
        <div className='bg-white p-8 lg:w-3/12'>
            <Image className='mx-auto ' src={src} />
            <div className='w-14 mx-auto my-6 border-b-4 border-r1 '></div>
            <h3 className='font-Bebas font-bold text-2xl leading-8 text-Black text-center pb-2'>{title}</h3>
            <p className='font-Inter font-normal text-base leading-8 text-Black text-center'>{text}</p>
        </div>
    )
}

export default Foodcard