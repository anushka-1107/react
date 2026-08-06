import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.css'

function App() {
  const[searchname,setSearchname]= useState("")
  const student = ["Aarav", "Aanya", "Aditya", "Ananya", "Arjun",
  "Priya", "Rohan", "Neha", "Karan", "Sneha",
  "Rahul", "Pooja", "Vikram", "Kavya", "Aman",
  "Nisha", "Yash", "Simran", "Raj", "Meera",
  "Dev", "Riya", "Aryan", "Diya", "Mohit",
  "Anjali", "Vivek", "Isha", "Akash", "Aditi",
  "Siddharth", "Shreya", "Manish", "Tanvi", "Harsh",
  "Muskan", "Varun", "Nikita", "Abhishek", "Sonam",
  "Saurabh", "Palak", "Nikhil", "Khushi", "Rohit",
  "Sakshi", "Chirag", "Payal", "Krishna", "Bhavna"]

    function handlechange(e){
      setSearchname(e.target.value)
    }

    const result = useMemo(()=>{
      return student.filter((student)=>(
        student.toLowerCase().includes(searchname.toLowerCase())
      ))},[searchname])
        
      
    

    return (
    <>
  
    <h1>Search Student</h1>
    <input type="text" placeholder='student name' value={searchname} onChange={handlechange} />
    <ul>
      {
        result.map((student,index)=>
        <li key={index}>{student}</li>)
      }
    </ul>
  
  </>
    )
}

export default App
