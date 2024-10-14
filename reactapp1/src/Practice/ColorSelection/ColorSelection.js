import React, { useState } from 'react'

export default function ColorSelection() {

    let [color, setColor] = useState("blue")


     const handleOnChangeColor= (e)=>{
          setColor(e.target.value)

     }

 

  return (
    <div>

        <div style={{backgroundColor:color, border: '1px solid black', height: "200px", width:"200px"}} >  </div>
        <button onClick={handleOnChangeColor} value={"red"}>Red</button>
        <button onClick={handleOnChangeColor} value={"green"}>Green</button>
        <button onClick={handleOnChangeColor} value={"orange"}>Orange</button>
      
    </div>
  )
}
