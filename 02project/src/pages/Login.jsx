import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({user}) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    if (login.email === user.ename && login.password === user.password){
    console.log(login);
    alert("Login Successful!");
    navigate('/homepage')
    } else {
      alert('wrong information')
    }
  };

  return (
    <main>
    <form onSubmit={handleLogin}>
      <label>Email</label>
      <input
        type="email"
        value={login.email}
        onChange={(e) =>
          setLogin({ ...login, email: e.target.value })
        }
      />


      <br /><br />

      <label>Password</label>
      <input
        type="password"
        value={login.password}
        onChange={(e) =>
          setLogin({ ...login, password: e.target.value })
        }
      />

      <br /><br />

      <button type="submit">Log In</button>
    </form>
    </main>
  );
}

export default Login;