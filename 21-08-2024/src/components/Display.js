import React,{useContext} from 'react'
import NumberContext from "./NumberContext";

const Display = () => {
    const valuewithoutConsumer = useContext(NumberContext);
    return (
        <>
        <NumberContext.Consumer>
          {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
        <div>The answer is {valuewithoutConsumer}.</div>
        </>
      );
}

export default Display
