import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [searchitem,setSearchitem] = useState("")
  const item = ["apple 🍎", "mango 🥭","watermelon 🍉", "grapes 🍇","oranges 🍊"]


  function handlechange(e) {
    setSearchitem(e.target.value)
  }
  const itemfilter = useMemo(()=>{
    return item.filter((item)=>(
      item.toLowerCase().includes(searchitem.toLowerCase())
    ))
  },[searchitem])



  return (
    <>
    <div className = "Container">
      <div className='Content'>
        <h1>🥭 🍎 🍉 FILTER FRUITS</h1>
        <input type="text" placeholder='search' value={searchitem} onChange={handlechange} />
        <ul>
          
             {
              itemfilter.map((item,index)=>
          <li key={index}>{item}</li>
        )}
          
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
