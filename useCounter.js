

import React, { useState} from 'react';

export const useCounter = (initialState=10) => {
    const [state, setstate] = useState(initialState);
    const increment=(factor)=>{
        setstate(state+factor)
    }
    const decrement=(factor)=>{
        setstate(state-factor)
    }
    const reset=()=>{
        setstate(initialState);
    }
  return (
    {
        state,
        increment,
        decrement,
        reset
    }
    
  )
}
