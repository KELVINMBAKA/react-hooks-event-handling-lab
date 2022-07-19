// Code Keypad Component Here
import React from "react"
function Keypad() {

    function handleKey() {
      console.log("Entering password...")
    }
  
    return (
      <input type="password" onChange={handleKey} />
    )
  }
  
  export default Keypad