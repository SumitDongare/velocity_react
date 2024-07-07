import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //Syntax
  // useEffect(()=>{}, [])

  //Example 1 : Without dependency array : This effect is executed on every component render.
  useEffect(() => {
    console.log(" 1. This is executed on every render");
  });

  //Example 2 : With empty dependency array : 
   useEffect(()=>{
    console.log(" 2. This is executed only once when component is renderd.")
   }, [])

  //Example 3 : With dependency array : 
   useEffect(()=>{
    console.log(" 3. This is executed when counter is updated.")
   }, [counter])

  //Example 4 : With dependency array : 
   useEffect(()=>{
    console.log(" 4. This is executed when counter or counter2 is updated.")
   }, [counter, counter2])

  return <div>
    Use Effect Example
    {counter}
    <button onClick={()=>setCounter(counter+1)}>Increment</button>
    {counter2}
    <button onClick={()=>setCounter2(counter2+1)}>Increment2</button>
    </div>;
}
