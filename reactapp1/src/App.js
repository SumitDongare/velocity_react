
import './App.css';
import { Counter } from './counter/counter';
import Greeting from './greeting';

function App() {
  return (
    <div className="App">
     <p>
    This is react application
     </p>
     {/* <hr></hr> */}
    {/* <Greeting  name= "Sumit" greeting="Hello"></Greeting> */}
    <hr></hr>
     <Counter counterName="Counter1"></Counter>
   
    </div>
  );
}

export default App;
