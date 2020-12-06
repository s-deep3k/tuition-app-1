import React from 'react'
import Section from '../Layout/Section.component'
import Button from '../UI/Button.component'
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
    let fetchLocal = null;
    if(typeof window !== 'undefined'){
        fetchLocal = sessionStorage.getItem('valueInSessionStorage')
    }
    const form = {
        name : '',
        email: '', 
        query: ''
    }
    const [formState,setForm] = React.useState(fetchLocal ? JSON.parse(fetchLocal) : form) 
    const { name,email,query } = formState;
    React.useEffect(() => {
        return _ => window.onunload = () => {
            window.MyStorage.clear();
        }
    },[])

    const changeHandler = eve => {
        const { name,value } = eve.target;
        setForm({
            ...formState,
            [name] : value
        })
        sessionStorage.setItem('valueInSessionStorage', JSON.stringify(formState))
    }
    
    const formSubmit = async (eve) => {
        eve.preventDefault();
        setForm({
            name : '',
            email : '',
            query :''
        })
        sessionStorage.clear();
    }
    return (
     <Section header="Contact the Tutelage team" color="green">
         <div className="w-full max-w-2xl mx-auto mb-12">
          <form onSubmit={(eve) => formSubmit(eve)}>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input 
                className="appearance-none block w-full py-3 px-4 font-semibold text-gray-700 leading-none bg-gray-100 rounded-xl outline-none" 
                type="text" 
                name="name" 
                placeholder="Full name" 
                onChange={eve => changeHandler(eve)}
                value={name}/>
              </div>
              <div className="w-1/2 px-2">
                <input 
                className="appearance-none block w-full py-3 px-4 font-semibold text-gray-700 leading-none bg-gray-100 rounded-xl outline-none" 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={eve => changeHandler(eve)}
                value={email}/>
              </div>
            </div>
            <div className="mb-4">
                <textarea 
                className="appearance-none block w-full py-3 px-4 leading-tight font-semibold resize-none text-gray-700 bg-gray-100 rounded-xl focus:outline-none" 
                placeholder="Write something..." 
                name="query" 
                rows={5} 
                onChange={eve => changeHandler(eve)}
                value={query}/></div>
            <div>
              <Button 
              adderclass="w-full"
              primary 
              bgCol="blue-600" 
              textCol="white">Submit</Button>
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

