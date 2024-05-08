import React, {useState} from 'react'
import './App.css';

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')


  let calcBmi = (event)=>{
    event.preventDefault() //prevent submmmiting to the server


    if(weight===0|| height===0){
      alert("please enter the valid weight and height")
    } else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('you are underweight')
      } else if (bmi>=25 && bmi<30){
        setMessage ('healthy, fit')

      }else{
        setMessage('you are overweight')
      }
    }
  }


  let reload = ()=>{
    window.location.reload()
  }
  return (
   <div className="app">
   <div className="container">
    <h2 className="center">Bmi Calculator</h2>
    <form onSubmit={calcBmi}>
      <div>
        <label>Weight (lbs)</label>
        <input value={weight} onChange = {(e)=> setWeight(e.target.value)} />
      </div>

      <div>
          <label>Height (in)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>

        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>


    </form>
    <div className="center">
      <h3>Your BMI is: {bmi}</h3>
      <p>{message}</p>
    </div>
   </div>
   </div>
  );
}

export default App;
