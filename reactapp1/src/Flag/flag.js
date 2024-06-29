import { useState } from "react";

export function Flag() {
  const [currentState, changeState] = useState("Online");

  const on = () => {
    changeState("Online");
  };
  const off = () => {
    changeState("Offline");
  };

  const getButton = (handler, buttonName)=>{
      return <button onClick={handler}>{buttonName} </button>
  }

   

  return (
    <div>
      I am {currentState}
      <br></br> <br></br>
      {/* <button onClick={on}>On</button>

      <button
        onClick={() => {
          changeState("Offline");
        }}
      >
        Off
      </button> */}

      {getButton(on, "On")}    {/* behind the seen this happen<button onClick={on}> On</button>*/}
      {getButton(off, "Off")}   {/* behind the seen this happen<button onClick={off}> Off</button>*/}

    </div>
  );
}
