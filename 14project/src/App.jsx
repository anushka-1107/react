import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EmployeeDetais from './pages/EmployeeDetais'
import './App.css'
import Employee from './pages/Employee'
import Nav from "./components/Nav"
import Addemployee from './pages/Addemployee'

function App() {
      return(
  <BrowserRouter>
<Nav/>


  <Routes>
    <Route path='/Home' element={<Home/>}/>
    
    <Route path='/Employee' element={<Employee/>}/>
    <Route path='/Employee/:id' element={<EmployeeDetais/>}/>
    <Route path='/Addemployee' element={<Addemployee/>}/>



    </Routes></BrowserRouter>
      )
}

export default App
