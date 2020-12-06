import { motion } from 'framer-motion'
import React from 'react'

const Button = ({children,primary,secondary,bgCol,textCol,adderclass,...buttonProps}) => {
    const btnPrimary = `shadow bg-${bgCol || 'white'} transition duration-150 ease-in-out font-bold focus:outline-none rounded-md text-${textCol} px-3 sm:px-8 py-2 sm:py-3 sm:text-sm md:text-md lg:text-xl ${adderclass}`
    const btndefault = `bg-transparent transition duration-150 ease-in-out focus:outline-none text-${textCol} font-bold px-4 sm:px-8 py-1 sm:py-3 sm:text-sm md:text-md lg:text-xl ${adderclass}`
    const btnSecondary = `shadow bg-${bgCol || 'blue'}-100 transition duration-150 rounded-md ease-in-out focus:outline-none text-${bgCol}-600 font-bold px-4 sm:px-8 py-1 sm:py-3 sm:text-sm md:text-md lg:text-xl ${adderclass}`
    return <motion.button
    whileTap={{ scale : 0.9 }}
    whileHover={{ scale : 1.02 }}
    {...buttonProps}
    className={primary ? btnPrimary : secondary ? btnSecondary : btndefault }
    >
        {children}
    </motion.button>
}

export default Button
