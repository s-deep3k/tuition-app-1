import React from 'react'

const Button = ({children,...buttonProps}) => {
   return <button
   {...buttonProps}
   className={``}
   >
       {children}
   </button>
}

export default Button
