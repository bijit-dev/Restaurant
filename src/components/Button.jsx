import React from 'react'

const Button = ({type,text,className}) => {
    return (
        <button type='{type}' className={` rounded-md font-Roboto text-lg leading-6 lg:hover:text-white font-bold text-black bg-Yello px-6 py-4 ${className}`}>{text}</button>
    
    )
}

export default Button