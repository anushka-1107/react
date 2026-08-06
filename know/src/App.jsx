import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  //logic
  let calBmi = (e) => {
    e.preventDefault()
    const w= Number(weight)
    const h= Number(height)

     if(w<=0 || h<=0) {
      alert("please enter a valid weight and height");
    } else {
      const Bmi= (w/ (h * h));
      setBmi(Bmi.toFixed(1));

      if (Bmi < 18.5) {
        setMessage("you are underweight");
      } else if (Bmi >= 18.5 && Bmi < 25) {
        setMessage("you are healthy");
      } else {
        setMessage("you are overweight");
      }
    }
  };



  // reload

  const reload = () =>{
    setWeight(0)
    setHeight(0)
    setBmi(0)
    setMessage("")
  }

  return (
    <div className="Container">
      <h2>BMI CALCULATOR</h2>
      <form onSubmit={calBmi}>
        <div className="content"> 
          <label>weight (kg)</label>
          <input
            type="number"
            placeholder="enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>height (m)</label>
          <input
            type="number"
            placeholder="enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={reload}>
            reload
          </button>
        </div>
        <div>
          <h4>your bmi : {bmi}</h4>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
