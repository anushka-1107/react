import Navbar from './components/navigation/Navbar'
import './App.css'
import Contact from './components/contact/Contact'
import Contactform from './components/contactform/Contactform'

function App() {
  

  return (
    <div>
      <Navbar/>
      <main className='main_container'>
        <Contact/>
      <Contactform/>
      </main>
   </div>
  )
}

export default App
