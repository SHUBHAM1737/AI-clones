import React, { useState } from "react";

function Colorchanger() {
  const [color, setColor] = useState("olive");

  let change = () => {
    setColor("red");
    console.log("dsfdf");
  };

  let changetogreen = () =>{
     setColor("green")
  }

  let yellow = () => {
    setColor("yellow")
  }
  let pinkC = () =>{
    setColor("pink")
  }
  return (
    <>
      
      <div>Colorchanger</div>
      <button style={{ backgroundColor: color }} onClick={change}>
        red
      </button>


      <button  style={{backgroundColor: color}}
      onClick={changetogreen}
      
      >green</button>

      <button style={{backgroundColor: color}} onClick={yellow}>yellow</button>

      <button 
      style={{backgroundColor: color}} onClick={ pinkC}> pink</button>
    </>
  );
}

export default Colorchanger;
