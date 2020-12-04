import React from 'react'
import Input from '../UI/Input.component';
import { Email, Phone, User } from '../utils/Icons';

const Form = () => {
    const [form,setForm] = React.useState({
        name : {
            eletype : 'input',
            itemConfig : {
                name : 'Your full name',
                placeholder : 'Rohan Singh',
                type : 'text'
            },
            value : '',
            Icon : User
        },
        email : {
            eletype : 'input',
            itemConfig : {
                name : 'Your email',
                placeholder : 'rohanSingh@email.com',
                type : 'email'
            },
            value :'',
            Icon : Email
        },
        phone : {
            eletype : 'input',
            itemConfig : {
                name : 'Cellphone no.',
                placeholder : '91********',
                type : 'number'
            },
            value : '',
            Icon : Phone
        },
        query : {
            eletype : 'textarea',
            itemConfig : {
                name : 'Your query/message',
                placeholder : 'Write queries/message if you have any....!',
                rows : 5,
            },
            value : '',
        },  
        dropdown : {
            eletype : 'dropdown',
            itemConfig : {
                name : 'Your profession'
            },
            value : 'Your profession',
            options : [
                'student',
                'teacher',
                'parent'
            ]
        }
    })
    let FormArray = [];
    for(let i in form){
        FormArray.push({
            key : i,
            data : form[i]
        })
    }
    const inpHandler = (eve,id) => {
        console.log(eve.target)
        const updatedForm = { ...form };
        const updatedFormitem = { ...form[id]}
        if(id === 'dropdown') updatedFormitem.value = eve.target.innerHTML;
        else updatedFormitem.value = eve.target.value;
        updatedForm[id] = updatedFormitem;
        setForm(updatedForm);
        console.log(updatedFormitem);
    }
    const formSubmitHandler = event => {
        console.log(form);
        event.preventDefault();
    }
    return (
        <form 
        className="w-96 flex flex-col gap-3" 
        onSubmit={formSubmitHandler}>
            {
                FormArray.map(({key,data}) => (
                    <Input
                    key={key}
                    onChange={eve => inpHandler(eve,key)}
                    {...data}
                    />
                ) )
            }
        </form>
    )
}

export default Form
