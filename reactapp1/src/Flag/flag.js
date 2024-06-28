import { useState } from "react";

export function Flag() {
  const [currentState, changeState] = useState("Online");

  const on = () => {
    changeState("Online");
  };
//   const off = () => {
//     changeState("Offline");
//   };

  return (
    <div>
      I an {currentState}
      <br></br> <br></br>
      <button onClick={on}>On</button>
      <button
        onClick={() => {
          changeState("Offline");
        }}
      >
        Off
      </button>
    </div>
  );
}
