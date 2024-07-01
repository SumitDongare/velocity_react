import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([{taskId:1, name : "Task1"}, {taskId:2, name : "Task2"}, {taskId:3, name : "Task3"}, {taskId:4, name : "Task4"}]);
   
   const [text, setText] = useState("")

//   const getTodos = () => {
//     const todoElements = [];
//     todos.forEach((todo) => {
//       todoElements.push(<p>{todo}</p>);
//     });
//     return todoElements;
//   };


 const onInputChange = (e)=>{
    console.log("Input Change", e.target.value)
    setText(e.target.value)
 }

  return (
    <div>
      <p>Todo List </p>
      {/* <p>{todos[0]}</p>
        <p>{todos[1]}</p> */}
      {/* {getTodos()} */}

      <input placeholder="Enter Todo"  value={text}  onChange={onInputChange}></input>

      <button onClick={()=>{
        // const updatedTodos = [...todos];
        // updatedTodos.push({taskId:todos.length+1, name:text})
        // console.log(updatedTodos)
        // setTodos(updatedTodos)

        if(text.length>=1){
            
            console.log([...todos, {taskId:todos.length+1, name:text}])
    
            setTodos([...todos, {taskId:todos.length+1, name:text}])
        }


        setText("")

      }}>Add</button>



      {todos.map((todo) => {
        return <p key = {todo.taskId}>{todo.name}</p>;
      })}

    </div>
  );
}
