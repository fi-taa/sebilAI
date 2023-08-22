import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import React, { useState } from 'react'; 
 
function App() { 
  return ( 
    <Router> 
      <div> 
        <nav> 
          <ul> 
            <li> 
              <Link to="/">Home</Link> 
            </li> 
            <li> 
              <Link to="about.js">About</Link> 
            </li> 
            <li> 
              <Link to="contact.js">Contact</Link> 
            </li> 
          </ul> 
        </nav> 
 
        <Route path="/" exact component={NumberForm} /> 
        <Route path="/about.js" component={About} /> 
        <Route path="/contact.js" component={Contact} /> 
      </div> 
    </Router> 
  ); 
} 
 
function About() { 
  return <h2>About</h2>; 
} 
 
function Contact() { 
  return <h2>Contact</h2>; 
} 
 
function NumberForm(props)
{ { 
  const [inputValues, setInputValues] = useState({ 
    temprature: '', 
    humidity: '', 
    rainfall: '', 
    ph: '', 
   
  }); 
 
  const handleInputChange = (event) => { 
    const { name, value } = event.target; 
    setInputValues({ 
      ...inputValues, 
      [name]: value 
    }); 
  } 
 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
 
     
    
    } 
 
   
    if (inputValues.temprature < -50 || inputValues.temprature > 50) { 
      alert('Please enter a valid temperature (-50 to 50)'); 
      return; 
    } 
 
    if (inputValues.humidity < 0 || inputValues.humidity > 100) { 
      alert('Please enter a valid humidity percentage (0 to 100)'); 
      return; 
    } 
 
    if (inputValues.rainfall < 0) { 
      alert('Please enter a valid rainfall amount (greater than or equal to 0)'); 
      return; 
    } 
 
    if (inputValues.ph < 0 || inputValues.ph > 14) { 
      alert('Please enter a valid pH level (0 to 14)'); 
      return; 
    } 
 
     
    console.log(inputValues); 
    alert('Form submitted successfully!'); 
  } 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      
      <label> 
        Temperature: 
        <input type="number" name="temprature" value={inputValues.temprature} onChange={handleInputChange} /> 
      </label> 
      <br /> 
      <label> 
        Humidity: 
        <input type="number" name="humidity" value={inputValues.humidity} onChange={handleInputChange} /> 
      </label> 
      <br /> 
      <label> 
        Rainfall: 
        <input type="number" name="rainfall" value={inputValues.rainfall} onChange={handleInputChange} /> 
      </label> 
      <br /> 
      <label> 
        pH: 
        <input type="number" name="ph" value={inputValues.ph} onChange={handleInputChange} /> 
      </label> 
      <br /> 
      <button type="submit">Recommend</button> 
    </form> 
  ); 
} 
 
export default App;
