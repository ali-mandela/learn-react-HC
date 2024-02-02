import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setcounter] = useState(15)

  // let counter =15;

  function addValue(){
   
   if(counter < 20)
   setcounter(counter + 1);
  }

  
  function removeValue(){
   
    if(counter >0)
    setcounter(counter - 1);
   }
  

  return (
   <>
      <h2>Ali learning react</h2>
      <h3>counter values :{counter}</h3>
      <button onClick={addValue}> Add Value </button>
      <br/>
      <button onClick={removeValue}> Remove Value </button>

   </>
  )
}

export default App
