import { useState } from "react"
import { UserProfile } from "./UserProfile"
import "./UserList.css"

export function UserList(){

    const [users, setUsers] = useState( [
        {
            id:1,
        firstName:"Rohit",
        lastName: "Sharma",
        age:30,
        gender:"Male",
        isAdmin : true
        },
        {
            id:2,
        firstName:"Hardik",
        lastName: "Pandya",
        age:35,
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

    const [formValues, setFormValues] = useState({
        firstName:'',
        lastName:'',    
        age:'',
       
    })

    const onInputChange = (e)=>{
        console.log(e.target.value, e.target.name)
        formValues[e.target.name] = e.target.value;
        setFormValues({...formValues})
    }

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    // const onFirstNameChange = (e)=>{
    //     console.log(e.target.value)
    //     setFirstName(e.target.value)
    // }
    
    //  const onLastNameChange = (e)=>{
    //     console.log(e.target.value)
    //     setLastName(e.target.value)
    //  }
   
      const addUser = ()=>{
        // console.log(firstName, lastName)
        // users.push({
        //     "id":users.length+1,
        //     "firstName":firstName,
        //     "lastName":lastName
        // })

        // setUsers([...users])
        //   setFirstName("")
        //   setLastName("")

         users.push({
                "id":users.length+1,
                "firstName":formValues.firstName,
                "lastName":formValues.lastName,
                "age":formValues.age,
               
            })

         setUsers([...users]);

        setFormValues({
            firstName:'',
            lastName: '',
            age:'',
           
        })

      }
      
       const onDelete = (id)=>{
        // alert(id)
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers([...filteredUsers])
       }
     

    return <div>
        
         {/* <UserProfile firstName = "Priyanka" lastName="Pandya" age={40} gender="Female" isAdmin={true}></UserProfile>
         <hr></hr>
         <UserProfile firstName = "Hardik" lastName="Pandya" age={40} gender="Male" isAdmin={false}></UserProfile> */}

         {/* <input placeholder="First Name" value={firstName} onChange={onFirstNameChange}></input>
         <input placeholder="Last Name" value={lastName} onChange={onLastNameChange}></input> */}

         <input name="firstName" placeholder="First Name" value={formValues.firstName} onChange={onInputChange}></input>
         <input name="lastName" placeholder="Last Name" value={formValues.lastName} onChange={onInputChange}></input>
         <input name="age" placeholder="Age" value={formValues.age} onChange={onInputChange}></input>
       
         <br></br>
         <button className="myButton" onClick={addUser} >Add User</button> 
          
           <div className="user-list-container">
           {users.map(user =>{

            return  <div key={user.id} style={{backgroundColor:'blue', color:'white', width:'200px'}}>

           <UserProfile onDelete={()=>{
            onDelete(user.id)
           }}  firstName = {user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile>
          
            {/* <button onClick={()=>{
                onDelete(user.id)
            }}>Delete</button> */}
          </div>

             })}

            </div>
         
         </div>


}