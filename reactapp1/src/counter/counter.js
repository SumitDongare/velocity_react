import { useState } from "react";

export function Counter(props){

    // const [variable, setter] = useState(initialvalue)
    let [count, setCount] = useState(0)

    // let count =0
    const increment = ()=>{
        // console.log("Current Count: ", count);
       const updatedCount = count +1;

        setCount( updatedCount)

        console.log("Updated Count", updatedCount);
        props.onCountChange(updatedCount)
    }

    const decrement = ()=>{
        // console.log("Current Count: ", count);
       const updatedCount = count -1;
       
        setCount( updatedCount)

        console.log("Updated Count", updatedCount);

        props.onCountChange(updatedCount)
    }


    return (
        <div id = "counter-component">
            <p>Counter component: {props.counterName}</p>
            Count : {count}
            <br></br> <br></br>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
    )
}