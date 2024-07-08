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

    const [userToBeUpdated , setUserToBeUpdated] = useState(null)

    const onDelete = (id) =>{
        const users = usersList.filter(user => user.id !== id)
        setUsersList([...users])
    }

  return (
    <div className='user-crud-wrapper'>
        <UserForm userToBeUpdated={userToBeUpdated} onUserFormSubmit={(user, id )=>{
            console.log('User Created', user)
            if(id){
                const fUser = usersList.find(userItem=>userItem.id===id);
                fUser.firstName = user.firstName;
                fUser.lastName = user.lastName;
                fUser.email = user.email;
                fUser.mobile = user.mobile;
                setUserToBeUpdated(null)

            }else{
                
                user.id = usersList.length+1;
                usersList.push(user)
            }
            setUsersList([...usersList])

        }}></UserForm>

        <UserList usersList={usersList} onUserUpdate={(user)=>{
              console.log("Updating user", user)
             setUserToBeUpdated(user)
        }} onUserDelete={(id)=>{
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
