import React from 'react'
import Section from '../Layout/Section.component'
import { Address, Call, Mail } from '../utils/Icons'
const ContactUs = () => {
    const Utils = [
        {
            name : '27 Milan Park, Garia, Kolkata',
            Svg : Address
        },
        {
            name : '079081-55493',
            Svg : Call
        },
        {
            name : 'wisdomtutelage@yahoo.com',
            Svg : Mail
        }
    ]
    return (
     <Section header="Contact the Tutelage team" color="green">
         <div className="w-full max-w-2xl mx-auto mb-12">
          <form>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input className="appearance-none block w-full py-3 px-4 font-semibold text-gray-700 leading-none bg-gray-100 rounded-xl outline-none" type="text" name="field-name" placeholder="Full name" />
              </div>
              <div className="w-1/2 px-2">
                <input className="appearance-none block w-full py-3 px-4 font-semibold text-gray-700 leading-none bg-gray-100 rounded-xl outline-none" type="email" name="field-name" placeholder="Email" />
              </div>
            </div>
            <div className="mb-4">
                <textarea className="appearance-none block w-full py-3 px-4 leading-tight font-semibold resize-none text-gray-700 bg-gray-100 rounded-xl focus:outline-none" placeholder="Write something..." rows={5} defaultValue={""} /></div>
            <div>
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-md shadow">Submit</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center -mx-4 place-items-center">
        {
              Utils.map((util,id) => (
                  <Contactutils
                  key={id}
                  {...util}
                  />
              ))
          }
        </div>
     </Section>
      
    )
}

export default ContactUs


const Contactutils = ({Svg,name}) => {
    return(
        <div className="px-4 flex items-center">
            <Svg />
            <span>{name}</span>
      </div>
    )
}


/*<svg className="inline-block w-6 h-6 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>*/