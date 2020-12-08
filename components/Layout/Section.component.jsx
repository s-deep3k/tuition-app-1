import React from 'react'

const Section = ({header,children,color}) => {
    return (
       <section className="py-12 px-4 text-center">
          <div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-${color}-500 p-0`}>{header}</h2>
            <div className={`bg-${color}-200 w-14 h-1 mx-auto my-3 rounded-xl mb-8`}/>
          </div>
          {children}
       </section>
    )
}

export default Section
