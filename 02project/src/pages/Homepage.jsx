import React, { useState } from 'react'
import Agecal from "./Agecal";


function Homepage({user}) {
const [user1] = useState(user.dob);


const [age, setAge] = useState(null);

  return (
    <>
    <nav>
        <h1>WELCOME {user.fname} {user.lname}</h1>
    </nav>
    <mainh>
        <h3>Email : {user.ename}</h3>
        
        <br />
        <Agecal user={user} onAgeCalculated={setAge} />
        {age && (
        <div>
          <h3>Age : </h3>
          <p>Years: {age.years}</p>
          <p>or</p>
          <p>Months: {age.months}</p>
          <p>or</p>
          <p>Days: {age.days}</p>
          <p>or</p>
          <p>Weeks: {age.weeks}</p>
          <p>or</p>
          <p>Hours: {age.hours}</p>
          <p>or</p>
          <p>Minutes: {age.minutes}</p>
          <p>or</p>
          <p>Seconds: {age.seconds}</p>


          </div>
        )}
    </mainh>
    </>
  )
}

export default Homepage