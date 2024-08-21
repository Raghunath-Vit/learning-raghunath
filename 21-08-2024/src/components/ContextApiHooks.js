import React from 'react'
import Display from './Display';
import NumberContext from "./NumberContext";
const ContextApiHooks = () => {
    return (
        <NumberContext.Provider value={42}>
          <div>
            <Display/>
          </div>
        </NumberContext.Provider>
      );
}

export default ContextApiHooks
