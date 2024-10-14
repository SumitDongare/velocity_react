import { useCallback, useState } from "react"


const MemoizedCounter = ()=>{
    const [count, setCount] = useState(0);

    // //Memoized increment function
    const increment = useCallback(()=>{
        setCount((prevCount) => prevCount +1)
    }, []);  // No dependancy, so always the same function refere


//    const increment = () =>{
//     setCount((prevCount)=>prevCount +1)

//    }

    return(
        <div>
        <p>Count :{count} </p>
        <button onClick={increment}> Increment </button>
        </div>
    );
};

export default MemoizedCounter