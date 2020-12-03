import React from 'react'
import Dropdown from './Dropdown.component'

const Input = ({eletype,itemConfig,value,onChange,Icon,options,...otherInpProps}) => {
    const itemStyles = 'font-body font-semibold block sm:text-sm border-2 border-transparent border-opacity-100 outline-none focus:outline-none bg-gray-100 w-full text-gray-600'
    const labelStyles = 'block text-2xl text-blue-600 capitalize font-bold'
    const wrapperStyles = 'flex gap-2 rounded-xl bg-gray-100 px-5 py-3'
    let inpEle = null;
    switch(eletype){
        case 'input':
            inpEle = <>
            <label htmlFor="price" className={labelStyles}>{itemConfig.name}</label>
            <div className={wrapperStyles}>
                <Icon size='1.3rem' className="text-gray-600"/>
                <input 
                {...itemConfig}
                value={value}
                onChange={onChange}
                className={itemStyles} 
                />
            </div>
            </> 
            break;
        case 'textarea' : 
            inpEle = <>
              <label htmlFor="price" className={labelStyles}>{itemConfig.name}</label>
                <textarea 
                {...itemConfig}
                value={value}
                onChange={onChange}
                className={`${itemStyles} rounded-xl resize-none px-5 py-4`} 
                />
            </>
            break;
        case 'dropdown' : 
            inpEle = <>
                <Dropdown
                state={value}
                name={itemConfig.name}
                options={options}
                onChange={onChange}
                />
            </>
            break;
        default: 
            inpEle = <input
            {...otherInpProps}
            value={value}
            onChange={onChange}
            className={itemStyles}
            />
    }
    return (
        <div className="flex flex-col gap-2">
            {inpEle}
        </div>
    )
}

export default Input
