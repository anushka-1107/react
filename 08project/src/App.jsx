import { useState } from 'react'
import Startpage from './components/Startpage'
import './App.css'
import Page2 from './components/Page2'


function App() {
  const [startplay, setStartplay] = useState(false)

  const toggleplay = () => {
    setStartplay((prev) => !prev)
  }

  return (
    <>
      {startplay ? <Page2 /> : <Startpage toggle={toggleplay} />}

    </>
  )
}

export default App
