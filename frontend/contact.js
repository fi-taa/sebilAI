import React, { useState } from 'react'; 
 
function ContactForm() { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    
    console.log('Form submitted:', { name, email, message }); 
  }; 
 
  return ( 
    <div> 
      <img src="SebilAI.jfif" alt="Sebil AI" /> 
      <h1>You can freely share your comment or any idea on Sebil AI</h1> 
      <form onSubmit={handleSubmit}> 
        <label> 
          Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
        </label> 
        <br /> 
        <label> 
          Email: 
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
        </label> 
        <br /> 
        <label> 
          Message: 
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} /> 
        </label> 
        <br /> 
        <button type="submit">Submit</button> 
      </form> 
    </div> 
  ); 
} 
 
export default ContactForm;
