import React, { useState } from 'react'
import './UserCrud.css'
import UserForm from './UserForm'
import UserList from './UserList'


export default function UserCrudWrapper() {

    const[usersList, setUsersList] = useState([
        {   
            id:1,
            firstName:"Rohit",
            lastName:"Sharma",
            email:"rohit.sharma@gmail.com",
            mobile: "8888888888"
        }
      
    ] )

    const onDelete = (id) =>{
        const users = usersList.filter(user => user.id !== id)
        setUsersList([...users])
    }

  return (
    <div className='user-crud-wrapper'>
        <UserForm onUserFormSubmit={(values)=>{
            console.log('User Created', values)
            values.id = usersList.length+1;
            usersList.push(values)
            setUsersList([...usersList])

        }}></UserForm>
        <UserList usersList={usersList} onUserDelete={(id)=>{
            //  alert("delete user "+ id)
        const bool = window.confirm("Do you want to delete?")
        //  console.log("Bool", bool)
         if(bool){
             onDelete(id)
         }
        }}></UserList>

    </div>
  )
}
