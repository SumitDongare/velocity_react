import React, { useState } from 'react'

export default function UserForm() {

    const[userInfo, setUserInfo] = useState([])

    const [user , setUser] =useState({ firstName:"", lastName: "" , email : ""})

    

    const handleInputChange= (e)=>{
     
        const {name, value} = e.target
        
         user[name] = value

         console.log(user)
       
        setUser({...user})  

    }

  const handleSubmit = (e)=>{

     e.preventDefault()

         userInfo.push({...user}) 

         setUserInfo([...userInfo])

         console.log(userInfo)

         setUser({firstName: "", lastName:"", email:""})
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>

        
        <label>
            FirstName:
            <input name='firstName' type="text" placeholder='First Name' value={user.firstName} onChange={handleInputChange} ></input>
        </label>
        <label>
            LastName
            <input name='lastName' tupe="text" placeholder='Last Name' value={user.lastName} onChange={handleInputChange}></input>
        </label>
        <label>
            Email:
            <input name='email' tupe="email" placeholder='email'  value={user.email}  onChange={handleInputChange}></input>
        </label>
        <button  >Add User</button>

       </form>

         <div>
            {userInfo.map(user =><div>

                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.email}</p>
                  </div>
            )

            }
          
         </div>

      
    </div>
  )
}
