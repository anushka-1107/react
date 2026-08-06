import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Comp1 from './component/Comp1'


/*
function App() {
  return (
    <div>

    </div>
  )
}

export default App
*/


//controlled component
/*
function App() {
  const[data,setData]= useState({
    username : "",
    useremail : "",
    password : ""
  })

  const [toggle,setToggle]= useState(false)
  function handleClick(e){
    e.preventDefault()
    setToggle(true)
  }
  return (
    <div>
      <form>
        <label>Enter NAme : </label>
        <input type='text' value={data.username} onChange={(e)=>setData({...data,username:e.target.value})}/>
        <label>Enter email : </label>
        <input type='email' value={data.useremail} onChange={(e)=>setData({...data,useremail:e.target.value})}/>
        <label>Enter Password : </label>
        <input type='password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button onClick={(e)=>handleClick(e)}>submit</button>
      </form>
      {toggle && (
        <div>
          <h1>username : {data.username}</h1>
          <h1>useremail : {data.useremail}</h1>
        </div>  
      )}
      </div>
  )
}

export default App
*/


// controlled component
function App() {
  const[username,setUsername]=useState("")
  const[useremail,setUseremail]=useState("")
  const[toggle,setToggle] = useState(false)
  function handleClick(e){
    e.preventDefault()
    setToggle(true)
  }
  return (
    <div>
      <form>
        <label>Enter NAme : </label>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label>Enter email : </label>
        <input type='text' value={useremail} onChange={(e)=>setUseremail(e.target.value)}/>
        <button onClick={(e)=>handleClick(e)}>submit</button>
      </form>
      {toggle && (
        <div>
          <h1>username : {username}</h1>
          <h1>useremail : {useremail}</h1>
        </div>  
      )}
    </div>
  )
}

export default App



/*
function App() {
  
  const [bgcolor,setBgcolor]= useState('orange')
  const [toggle,setToggle] = useState(true)
  const [color1,setColor1]= useState('black')
  function handleToggle(){
    if(toggle){
      setBgcolor('black')
      setToggle(false)
      setColor1('white')
    } else {
      setBgcolor('white')
      setColor1('black')
      setToggle(true)
      
    }
  }
  return (
    <div style={{width:"300px", color: color1,border:"2px solid", background: bgcolor}}>
        <button onClick={handleToggle}>Toggle</button>
        <h1>color background</h1>
        <h1>color background</h1>
        <h1>color background</h1>
        <button onClick={()=>setBgcolor('red')}>Red</button>
        <button onClick={()=>setBgcolor('blue')}>Blue</button>
        <button onClick={()=>setBgcolor('green')}>Green</button>
        <button onClick={()=>setBgcolor('pink')}>Pink</button>
        <button onClick={()=>setBgcolor('yellow')}>Yellow</button>
        <button onClick={()=>setBgcolor('cyan')}>Cyan</button>
    </div>
  )
}

export default App
*/



/*
function App() {
  const [count,setCount] = useState(0)
  const[list,setList] = useState(["item1","item2","item3"])

  function handleIncrement() {
    setCount(p=>p+1)
    setCount(p=>p+1)
    setCount(p=>p+1)
    setCount(p=>p+1)

  }
  function handleAdd() {
   // list.push(item)   //direct mutation not allowed
   // or
   //setList(list.push(item4))
   setList([...list,'item4'])
   setList([...list,'item5'])
  }
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick = {handleIncrement}>Increment</button>
      <ul>
        {list.map((item)=>{
          return <li>{item}</li>
        })}
      </ul>
      <button onClick={handleAdd} >add item</button>
    </div>
  )
}

export default App
*/


/*function App() {
  const loggedIn = false
  if(loggedIn){
    return(
      <div>
        <button>log out</button>
      </div>
    )
  } else {
    return (
      <div>
        <button>log in </button>
      </div>
    )
  }

}

export default App
*/



/*function App() {

  const user = [
    {id:1, name:"a"},
    {id:2, name:"b"},
    {id:3, name:"c"}
  ]

  const user1 = [1,2,3,4,5,6]
  return (
    <div>
    {
      user.map((item)=>{
        return <h1 key={item.id}>{item.name}</h1>
      
        
      })
    }

    <ul>
      {user1.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
  )
}

export default App
*/


/*function App() {

 var age = 44
 
  return <>
    <h1>First !</h1>
    <p>center</p>
    <About/>
    <Contact/>
    <Comp1 age = {age}/>
    
  </>
}

 export default App  // default export

//export {App}    // named export



function About() { 
  return (
    <h1>I am about page</h1>
  )
}



import React from 'react'

function Contact() {
  return (
    <p>I am contact</p>
  )
}

*/