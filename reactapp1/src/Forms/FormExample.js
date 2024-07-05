import React from 'react'
import "./FormExample.css"
import { useState } from 'react'


export default function FormExample() {
    const [formInput, setFormInput] = useState({
        textInput:'',
        numberInput:'',
        passwordInput:''
    })

    const [showPassword, setShowPassword] = useState(false);

     const onInputChange=(e) => {
        const {name, value} = e.target;  //destructing of e.target
        formInput[name] = value;
        console.log(formInput);
        setFormInput({...formInput})
        
         
    }

  return (
    <div>
        <h1>Form Example</h1>
        <div className='formContainer'>
        <label> 
            Text Input : 
        <input name="textInput" type='text' placeholder='Text Input' value={formInput.textInput} onChange={onInputChange}></input>
        </label>
        
        <label> 
             Number Input : 
        <input name="numberInput" type='number' placeholder='Number Input' value={formInput.numberInput} onChange={onInputChange}></input>
        </label>
        <label> 
             Password Input : 
        <input name="passwordInput" type={showPassword?"text":"password"} placeholder='Password Input' value={formInput.passwordInput} onChange={onInputChange}></input>
        {showPassword?  <button onClick={()=>setShowPassword(false)}>Hide Password</button>: <button onClick={()=>setShowPassword(true)}>Show Password</button>}
         
         
        </label>
 
        </div>
      
    </div>
  )
}

