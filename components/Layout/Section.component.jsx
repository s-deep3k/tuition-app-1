import React from 'react'

const Section = ({header,children}) => {
    return (
       <section className="py-12 px-4 text-center">
          <div>
            <h2 className={`text-4xl font-semibold font-heading text-${color}-600 p-0`}>{header}</h2>
            <div className={`bg-${color}-200 w-14 h-1 mx-auto my-3 rounded-xl mb-8`}/>
          </div>
          {children}
       </section>
    )
}

export default Section