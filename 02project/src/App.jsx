import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Agecal from "./pages/Agecal";
import { useState } from "react";

function App() {

  const [user,setUser] = useState(null)

  return (
    <>
      <nav>
        <Link to="/register">
          <button>Registration</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login user={user}/>} />
        <Route path="/homepage" element={<Homepage user={user} />} />
        
      </Routes>

      
    </>
  );
}

export default App;