
import './App.css';
import { Flag } from './Flag/flag';
import { UserProfile } from './UserProfile/UserProfile';
import { Counter } from './counter/counter';
import Greeting from './greeting';
import { TodoList } from './TodoList/TodoList';
import { UserList } from './UserProfile/UserList';
import FormExample from './Forms/FormExample';

function App() {

  const onCallback = (count) => {
    console.log(`Data from child`, count)
  }

  return (
    <div className="App">
     <p>
    This is react application
     </p>
     {/* <hr></hr> */}
    {/* <Greeting  name= "Sumit" greeting="Hello"></Greeting> */}
    <hr></hr>
     {/* <Counter counterName="Counter1" onCountChange= {onCallback}></Counter> */}
     <hr></hr>
     {/* <Counter counterName="Counter2"></Counter> */}
     <hr></hr>
     {/* <Flag></Flag>
     <hr></hr> */}
     {/* <UserProfile></UserProfile> */}
     <hr></hr>
     {/* <TodoList></TodoList> */}
     <hr></hr>
     {/* <UserList></UserList>  */}
     <hr></hr>
     <FormExample></FormExample>
   
    </div>
  );
}

export default App;
