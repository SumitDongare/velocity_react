export function UserProfile(){

    const user = {
        firstName:"Rohit",
        lastName: "Sharma",
        age:40,
        gender:"Male",
        isAdmin : true
    }

    return <div> 
         <p>Name: {user.firstName} {user.lastName}</p>
         <p>Age: {user.age}</p>
         <p>Gender: {user.gender} </p>
         {user.isAdmin? <p>I am an Admin</p>: <p>I am not an Admin</p> }
    </div>
}