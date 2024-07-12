
import {useState} from 'react';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import { Flag } from './Flag/flag';
import { UserProfile } from './UserProfile/UserProfile';
import { Counter } from './counter/counter';
import Greeting from './greeting';
import { TodoList } from './TodoList/TodoList';
import { UserList } from './UserProfile/UserList';
import FormExample from './Forms/FormExample';
import FormikExample from './Formik/FormikExample';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import ContextExample from './Context/ContextExample';
import UseEffectExample from './UseEffect/UseEffectExample';
import UserCrudWrapper from './UserCrud/UserCrudWrapper';
import TicTacToe from './TicTacToe/TicTacToe';


function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("Rohit");

  const onCallback = (count) => {
    console.log(`Data from child`, count)
  }

  return (


    <div className="App">
     <div className='header'>APP Component</div>
     <div className='container-body'>
      <div className='sidebar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/counter-path"}>Counter</Link>
        <Link to={"/users"}>Users</Link>
        {/* <Link to={"/greeting-path"}>Greeting</Link> */}
        <button onClick={()=>{
            navigate("/greeting-path")
        }}>Greeting</button>
      </div>
      

      <div className='content'>
       
        <Routes>
          <Route path="/" element={<div>Content Div</div>}>Content Div</Route>
          <Route path="/counter-path" element={<Counter></Counter>}></Route>
          <Route path="/greeting-path" element={<Greeting  name= "Sumit" greeting="Hello"></Greeting>}></Route>
          <Route path='/users/*' element={<UserCrudWrapper></UserCrudWrapper>}></Route>
          <Route path='*' element={<div>This url is not mapped</div>}></Route>
         
        </Routes>

      </div>
     </div>



     {/* <p>
    This is react application
     </p> */}
     {/* <hr></hr> */}
    {/* <Greeting  name= "Sumit" greeting="Hello"></Greeting> */}
    {/* <hr></hr> */}
     {/* <Counter counterName="Counter1" onCountChange= {onCallback}></Counter> */}
     {/* <hr></hr> */}
     {/* <Counter counterName="Counter2"></Counter> */}
     {/* <hr></hr> */}
     {/* <Flag></Flag>
     <hr></hr> */}
     {/* <UserProfile></UserProfile> */}
    
     {/* <TodoList></TodoList> */}
    
     {/* <UserList></UserList>  */}
     
     {/* <FormExample></FormExample> */}
     {/* <FormikExample></FormikExample> */}
     {/* <ImageCarousel></ImageCarousel> */}
     {/* <ContextExample></ContextExample> */}
     {/* <UseEffectExample name={name}></UseEffectExample> 
     <button onClick={()=>setName(name+Math.random()*10)} >Change Name Prop</button> */}
     {/* <UserCrudWrapper></UserCrudWrapper> */}
     {/* <TicTacToe></TicTacToe> */}


   
    </div>
  );
}

export default App;
