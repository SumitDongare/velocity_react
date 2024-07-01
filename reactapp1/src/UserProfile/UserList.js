import { useState } from "react"
import { UserProfile } from "./UserProfile"

export function UserList(){

    const [users, setUsers] = useState( [
        {
            id:1,
        firstName:"Rohit",
        lastName: "Sharma",
        age:40,
        gender:"Male",
        isAdmin : true
        },
        {
            id:2,
        firstName:"Hardik",
        lastName: "Pandya",
        age:40,
        gender:"Male",
        isAdmin : false
        },
        {
            id:3,
        firstName:"Priyanka",
        lastName: "Pandya",
        age:40,
        gender:"Female",
        isAdmin : true
        },
    ])

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onFirstNameChange = (e)=>{
        console.log(e.target.value)
        setFirstName(e.target.value)
    }
    
     const onLastNameChange = (e)=>{
        console.log(e.target.value)
        setLastName(e.target.value)
     }
   
      const addUser = ()=>{
        console.log(firstName, lastName)
        users.push({
            "id":users.length+1,
            "firstName":firstName,
            "lastName":lastName
        })
       
         setUsers([...users])
          setFirstName("")
          setLastName("")
      }

    return <div>
        
         {/* <UserProfile firstName = "Priyanka" lastName="Pandya" age={40} gender="Female" isAdmin={true}></UserProfile>
         <hr></hr>
         <UserProfile firstName = "Hardik" lastName="Pandya" age={40} gender="Male" isAdmin={false}></UserProfile> */}

         <input placeholder="First Name" value={firstName} onChange={onFirstNameChange}></input>
         <input placeholder="Last Name" value={lastName} onChange={onLastNameChange}></input>
         <br></br>
         <button onClick={addUser} >Add User</button> 

           {users.map(user =>{

            return  <div key={user.id}>
                <UserProfile firstName  = {user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile>
                <hr></hr>

            </div>

           })}
         </div>


}