import { UserProfile } from "./UserProfile"

export function UserList(){
    const users = [
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
    ]

    return <div>
         User List
         {/* <UserProfile firstName = "Priyanka" lastName="Pandya" age={40} gender="Female" isAdmin={true}></UserProfile>
         <hr></hr>
         <UserProfile firstName = "Hardik" lastName="Pandya" age={40} gender="Male" isAdmin={false}></UserProfile> */}

           {users.map(user =>{

            return  <div key={user.id}>
                <UserProfile firstName = {user.firstName} lastName={user.lastName} age={user.age} gender={user.gender} isAdmin={user.isAdmin}></UserProfile>
                <hr></hr>

            </div>

           })}
         </div>


}