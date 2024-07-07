import React from 'react'
import './UserCrud.css'
import UserForm from './UserForm'
import UserList from './UserList'


export default function UserCrudWrapper() {
    const usersList = [
        {   
            id:1,
            firstName:"Rohit",
            lastName:"Sharma",
            email:"rohit.sharma@gmail.com",
            mobile: "8888888888"

        },
        {
            id:2,
            firstName:"Hardik",
            lastName:"Pandya",
            email:"hardik.pandya@gmail.com",
            mobile: "8888888888"

        },
        {
            id:3,
            firstName:"Virat",
            lastName:"Kohli",
            email:"virat.kohli@gmail.com",
            mobile: "8888888888"

        }
    ]
  return (
    <div className='user-crud-wrapper'>
        <UserForm></UserForm>
        <UserList usersList={usersList}></UserList>

       

    


      
    </div>
  )
}
