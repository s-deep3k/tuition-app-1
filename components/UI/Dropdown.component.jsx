import React from 'react'

const dropdownState = false;

const TOGGLE = 'TOGGLE';
const CLOSE = 'CLOSE'

const reducer = (state = dropdownState,action) => {
    switch (action){
        case TOGGLE : 
            return !state;
        case CLOSE : 
            return false
        default : state
    }
}

const Dropdown = ({options,name,onChange,state}) => {
    const [dropDown,setDropdown] = React.useReducer(reducer,dropdownState);
    const ToggleHandler = eve => {
        eve.preventDefault();
        setDropdown(TOGGLE);
    }
    //const closeHandler = _ => { setDropdown(CLOSE),onChange} ;
    return (
        <div className="relative inline-block text-left ml-40">
        <div>
          <button onClick={ToggleHandler} 
          className="bg-gray-100 inline-flex justify-center w-full rounded-xl px-5 py-4 text-sm text-blue-600 font-bold focus:outline-none focus:ring-blue-500" 
          id="options-menu" 
          aria-haspopup="true">
            {name || state}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
       { dropDown && <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow bg-white capitalize font-bold transition duration-500 ease-in-out">
          <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                options.map((option,id) => {
                    return <li 
                    key={id}
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100" 
                    onClick={onChange}>{option}</li>
                })
            }
          </ul>
        </div> }
      </div>
      
    )
}

export default Dropdown


//(eve) => setVal(eve.target.firstElementChild.textContent)
