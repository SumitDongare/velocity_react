import React from 'react'

export default function UserList({usersList}) {
  return (
    <table>
    <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Actions</th>
    </thead>
    <tbody>
        {usersList.map((user)=>{
            return  <tr key={user.id}>
            <td>{user.firstName +' '+ user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>
                <button>Update</button>
                <button>Delete</button>
            </td>
        </tr>

        })}
        
        {/* <tr>
            <td>Hardik Pandya</td>
            <td>hardik.pandya@gmail.com</td>
            <td>8888888888</td>
        </tr>
        <tr>
            <td>Virat Kohli</td>
            <td>virat.kohli@gmail.com</td>
            <td>8888888888</td>
        </tr> */}
    </tbody>
  </table>
  )
}
