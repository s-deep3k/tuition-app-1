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

const Dropdown = ({options,onChange,state}) => {
    const [dropDown,setDropdown] = React.useReducer(reducer,dropdownState);
    const ToggleHandler = eve => {
        eve.preventDefault();
        setDropdown(TOGGLE);
    }
    //const closeHandler = _ => { setDropdown(CLOSE),onChange} ;
    return (
        <div className="relative inline-block text-left w-3/5 self-end">
        <div>
          <button onClick={ToggleHandler} 
          className="bg-gray-100 inline-flex text-xl capitalize justify-between items-center rounded-xl px-3 py-2 w-full text-blue-600 font-bold focus:outline-none focus:ring-blue-500" 
          id="options-menu" 
          aria-haspopup="true">
            {state}
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
       { dropDown && <div className="origin-top-right absolute right-0 mt-2 w-full rounded-xl shadow bg-white capitalize font-bold transition duration-500 ease-in-out">
          <ul className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {
                options.map((option,id) => {
                    return <li 
                    key={id}
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 cursor-pointer capitalize" 
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
