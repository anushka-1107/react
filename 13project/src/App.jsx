import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import Product from './component/Product'
import { useDispatch } from 'react-redux'
import { clearCart } from './Reduxstorage/slice'

function App() {
  const dispatch = useDispatch()

  return (

    <>
    <Header/> 
              <button onClick={()=>dispatch(clearCart())} className='btn1'> Clear Cart </button>{" "}
    
    
    <Product/>
    </>
  )
  
}

export default App
