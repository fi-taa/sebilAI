import React from 'react'; 
import profilePicture from './Sebil.jpg'; 
 
const AboutPage = () => { 
  return ( 
    <div> 
      <h1>About Us</h1> 
      <p>Welcome to Sebil AI! We are a team of passionate individuals dedicated to revolutionizing crop selection practices in agriculture. Our goal is to provide intelligent decision-making tools that optimize crop choices, leading to improved yields, financial outcomes, and sustainable farming practices.</p> 
      <img src={sebil} alt="Profile Picture" /> 
      <p>Through our innovative solution, Sebil AI, we aim to analyze critical factors such as soil quality, nutrient levels, and local climate conditions to equip agricultural stakeholders with the information they need to make informed decisions.</p> 
      <p>Feel free to explore Sebil AI to learn more about our mission and the services we offer. If you have any questions or inquiries, please don't hesitate to contact us. We look forward to assisting you!</p> 
    </div> 
  ); 
}; 
 
export default AboutPage;
