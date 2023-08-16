import React, { useState } from "react";
import img from "../images/img1.jpg";
import "../styles/home.css";
import Navbar from "./Navbar";

const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${img})`
    };
   

    const [inputs, setInputs] = useState({
        nitrogen: "",
        element1: "",
        element2: "",
        element3: "",
        element4: "",
        element5: "",
        element6: "",
        element7: ""
    });

    const [description, setDescription] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
       
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    
        const calculatedDescription = `Nitrogen: ${inputs.nitrogen}. Elements: ${inputs.element1}, ${inputs.element2}, ${inputs.element3}, ${inputs.element4}, ${inputs.element5}, ${inputs.element6}, ${inputs.element7}.`;

        setDescription(calculatedDescription);
    };

    return (
        <div>
            
            <div style={containerStyle} className="home-container"><Navbar />
                <p className="para">ue edhe defuei fef refieuf </p>
                <p>wekfhds snmnkjdwi eded ewiodew d</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nitrogen<input type="number" name="nitrogen" value={inputs.nitrogen} onChange={handleInputChange} /></label><br />
                    <label>Element 1<input type="text" name="element1" value={inputs.element1} onChange={handleInputChange} /></label><br />
                    <label>Element 2<input type="text" name="element2" value={inputs.element2} onChange={handleInputChange} /></label><br />
                    <label>Element 3<input type="text" name="element3" value={inputs.element3} onChange={handleInputChange} /></label><br />
                    <label>Element 4<input type="text" name="element4" value={inputs.element4} onChange={handleInputChange} /></label><br />
                    <label>Element 5<input type="text" name="element5" value={inputs.element5} onChange={handleInputChange} /></label><br />
                    <label>Element 6<input type="text" name="element6" value={inputs.element6} onChange={handleInputChange} /></label><br />
                    <label>Element 7<input type="text" name="element7" value={inputs.element7} onChange={handleInputChange} /></label><br />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <div>
                <h2>Output:</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Home;
