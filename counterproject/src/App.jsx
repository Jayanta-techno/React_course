import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter,setCounter]=useState(0);
const addvalue=()=>{
  if(counter<20){  //can't count beyond 20
  counter=counter+1;
  setCounter(counter);
  console.log(counter)
  }
}
const decvalue=()=>{
  if(counter>0){    //can't count less than 0
     counter=counter-1;
    setCounter(counter);
    console.log(counter)
  }

}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={decvalue}>Remove value</button>
    </>
  )
}

export default App
