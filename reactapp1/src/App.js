
import './App.css';
import { Flag } from './Flag/flag';
import { Counter } from './counter/counter';
import Greeting from './greeting';

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
     <Counter counterName="Counter1" onCountChange= {onCallback}></Counter>
     <hr></hr>
     {/* <Counter counterName="Counter2"></Counter> */}
     <hr></hr>
     <Flag></Flag>

   
    </div>
  );
}

export default App;
