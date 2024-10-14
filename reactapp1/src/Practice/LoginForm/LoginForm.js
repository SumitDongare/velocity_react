import React, { useState } from 'react'

export default function LoginForm() {

     const [userInput, setUserInput] = useState({
        userName:'',
        password:''
      })
 

       const onInputChange = (e)=>{
            setUserInput(e.target.value)
       }
        
      

  return (
    <div>
        <label> 
           UserName : 
        <input name="userName" type='text' placeholder='Enter UserName' value={userInput.userName} onChange={onInputChange}></input>
        </label>
        <label> 
           Password : 
        <input name="password" type='password' placeholder='Enter Password' value={userInput.password} onChange={onInputChange}></input>
        </label>
        <br></br>

        <button>Login</button>
        <button>Logout</button>

      



    </div>
  )
}
