import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React from 'react'

function App() {
  const [counter,setOunter] = useState(0)
  const addvalue=()=>{
    console.log('hello')
    setOunter(counter+1)
  }
  const reducevalue=()=>{
    if(counter==0){
      alert('not applicable')
    }else{
    setOunter(counter-1)
    }
  }
  return (
    <>
    <h1>counter</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br />
    <button onClick={reducevalue}>remove value</button>
    </>
  )
  
}


export default App