import React, { useState } from "react";

export default function StudentInfo() {
  const studentInfo = [
    { id: 1, name: "Yashjeet", age: 23, course: "React.js" },
    { id: 2, name: "Saurabh", age: 28, course: "PHP" },
    { id: 3, name: "Pranay", age: 24, course: "JAVA" },
  ];
  const [info, setInfo] = useState(studentInfo);

  const [text, setText] = useState({
      id:'',
      name:'',
      age: '',
      course:''
  })

  const onInputChange = (e)=>{
    console.log("Input Change", e.target.value)
    text[e.target.name] = e.target.value;
    setText({...text})

 }

 const addStudents=()=>{
    info.push({
        "id":info.length+1,
        "name":text.name,
        "age":text.age,
        "course":text.course
       
       })
    
       setInfo([...info]);
    
       setText({
        name:'',
        age:'',
        course:''
      })

   

 }



  return <div>
    <p> Students Information</p>

    <input name="name" placeholder="Enter Name"  value={text.name}  onChange={onInputChange}></input>
    <input name="age" placeholder="Enter Age"  value={text.age}  onChange={onInputChange}></input>
    <input name="course" placeholder="Enter Course"  value={text.course}  onChange={onInputChange}></input>

    <button  onClick={addStudents} >Add User</button> 

{info.map((val) => {
    
        return <div key = {val.id}>
            <p>Student Id {val.id}</p>
            <p>Student Name:{val.name} </p>
            <p>Student Age: {val.age}</p>
            <p>Course: {val.course}</p>

        </div>
      })}

  </div>;
}
