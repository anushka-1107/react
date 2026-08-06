import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";






function AppRoutes() {

  const [user,setUser] = useState(null)

  return (
    <>
      <nav>
        <Link to="/Dashbord"/>
        <Link to="/EditStu"/>
        <Link to="/NotFound"/>
        <Link to="/Students"/>
        <Link to="/StuDetails"/>
        <Link to="/AddStu"/>
      </nav>

      <Routes>
        <Route path="/Dashboard" element={<Register setUser={setUser} />} />
        <Route path="/EditStu" element={<Login user={user}/>} />
        <Route path="/NotFound" element={<Homepage user={user} />} />
        <Route path="/Students" element={<Homepage user={user} />} />
        <Route path="/StuDetails" element={<Homepage user={user} />} />
        <Route path="/AddStu" element={<Homepage user={user} />} />

        
      </Routes>

      
    </>
  );
}

export default AppRoutes;