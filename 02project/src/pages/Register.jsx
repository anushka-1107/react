import { useState } from "react";




function Register({setUser}) {
  const [detail, setDetail] = useState({
    fname: "",
    lname: "",
    dob: "",
    ename: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(detail)
    alert('Registration successful');
  };

  return (
    <>
      
      <main>
        <form onSubmit={handleSubmit}>
          <label>First name : </label>
          <input
            required
            type="text"
            placeholder="enter name"
            value={detail.fname}
            onChange={(e) => setDetail({ ...detail, fname: e.target.value })}
          />
          <br />
          <br />
          <label>Last name : </label>
          <input
            required
            type="text"
            placeholder="enter last name"
            value={detail.lname}
            onChange={(e) => setDetail({ ...detail, lname: e.target.value })}
          />
          <br />
          <br />
          <label>Email : </label>
          <input
            required
            type="email"
            placeholder="enter email"
            value={detail.ename}
            onChange={(e) => setDetail({ ...detail, ename: e.target.value })}
          />
          <br />
          <br />
          <label>DOB : </label>
          <input
            required
            type="date"
            placeholder="enter DOB"
            value={detail.dob}
            onChange={(e) => setDetail({ ...detail, dob: e.target.value })}
          />
          <br />
          <br />
          
         
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="enter password"
            value={detail.password}
            onChange={(e) => setDetail({ ...detail, password: e.target.value })}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        
      </main>
    </>
  );
}

export default Register;