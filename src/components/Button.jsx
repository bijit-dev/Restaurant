import React from 'react'

const Button = ({text,className}) => {
    return (
        <button className={`font-Roboto text-base leading-6 font-bold text-black bg-Yello px-6 py-4 ${className}`}>{text}</button>
    
    )
}

export default Button