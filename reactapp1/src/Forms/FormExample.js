import React from 'react'
import "./FormExample.css"
import { useState } from 'react'


export default function FormExample() {
    const [formInput, setFormInput] = useState({
        textInput:'',
        numberInput:'',
        passwordInput:'',
        textAreaInput:'',
        selectBoxInput:'',
        checkBoxInput:true,
        radioButtonInput:'',
        selectedDate:''
    })

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0])

    }

    const [showPassword, setShowPassword] = useState(false);

     const onInputChange=(e) => {
        const {name, value, checked, type} = e.target;  //destructing of e.target
        console.log(name, value, checked, type)
        formInput[name] = type==="checkBox"?checked : value;
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
        {showPassword?  <button onClick={()=>setShowPassword(false)}>Hide</button>: <button onClick={()=>setShowPassword(true)}>Show</button>}
        </label>

        <label> 
             Textarea Input : 
        <textarea name="textAreaInput" cols={20} rows={3} type='text' placeholder='Description' value={formInput.textAreaInput} onChange={onInputChange}></textarea>
        </label>
       
        <label> 
            Select Box : 
            <select value={formInput.selectBoxInput} name="selectBoxInput" onChange={onInputChange}>
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </label>

         <label>
             CheckBox Input:
             <input name='checkBoxInput' type='checkbox' checked={formInput.checkBoxInput} onChange={onInputChange}></input> I Agree

         </label>

         <label>
            Radio Input:
            <input checked={formInput.radioButtonInput === 'male'} name="radioButtonInput" type='radio' value="male" onChange={onInputChange}/> Male     
            <input checked={formInput.radioButtonInput === 'female'} name="radioButtonInput" type='radio' value="female" onChange={onInputChange}/> Female     
            </label>

            
          <label>
          Date Input:
          <input type="date" name="selectedDate" value={formInput.selectedDate} onChange={onInputChange} ></input>
          </label>
          
          <label>
              <p> File Input: </p>
             <input type='file' onChange={handleFileChange}></input>
             <p>Selected File : {selectedFile?.name}</p> 
             {/* ?. is optional chaining same as { selectedFile ? selectedFile.name : undefine} */}
          </label>
                 
        </div>

      
    </div>
  )
}

