import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Removetodo from './components/Removetodo'

function App() {


  return (
    <>
    <Addtodo />
    <Removetodo/>
    </>
  )
}

export default App
