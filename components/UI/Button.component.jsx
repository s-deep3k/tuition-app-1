import React from 'react'

const Button = ({children,primary,secondary,bgCol,textCol,...buttonProps}) => {
    const btnPrimary = `bg-${bgCol || 'white'} transition duration-150 ease-in-out font-bold focus:outline-none hover:bg-gray-100 rounded-lg text-${textCol}-700 px-3 sm:px-8 py-2 sm:py-3 sm:text-sm md:text-md lg:text-xl`
    const btndefault = `bg-transparent transition duration-150 ease-in-out focus:outline-none text-${textCol} font-bold px-4 sm:px-8 py-1 sm:py-3 sm:text-sm md:text-md lg:text-xl`
    const btnSecondary = `bg-${bgCol || 'blue'}-100 transition duration-150 ease-in-out focus:outline-none text-${bgCol}-600 font-bold px-4 sm:px-8 py-1 sm:py-3 sm:text-sm md:text-md lg:text-xl`
    return <button
    {...buttonProps}
    className={primary ? btnPrimary : secondary ? btnSecondary : btndefault }
    >
        {children}
    </button>
}

export default Button
