import { useState } from "react"
import "./UserProfile.css"

export function UserProfile(user){

    // const [user, setuser]=useState({
    //         id:1,
    //         firstName:"Rohit",
    //         lastName: "Sharma",
    //         age:40,
    //         gender:"Male",
    //         isAdmin :true
    //     })

    // const user = {
    //     id:1,
    //     firstName:"Sumit",
    //     lastName: "Sharma",
    //     age:40,
    //     gender:"Male",
    //     isAdmin :false
    // }

    const [isLoading, setIsLoading]= useState(false);

    return !isLoading && <div className=" user-profile-container"> 
         <p>Name: {user.firstName} {user.lastName}</p>

         <p className="red-color">Age: {user.age}</p>
         {/* {<p style={{color:user.isAdmin?"green":"red"}}>Gender:{user.gender}</p>} */}
         {<p className={user.isAdmin?"admin-class":"non-admin-class"}>Gender:{user.gender}</p>}
         {user.isAdmin? <p>I am an Admin</p>: <p>I am not an Admin</p> }
         <button onClick={user.onDelete}>Delete</button>
    </div>
}