import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Draggable from 'react-draggable';
const api= `https://api.unsplash.com/photos/random/?client_id=QxUC2wrHAdiCDA46iPxdazUdKBm7ZHU-0ihW6Zdtu8g`; 
function App() {

  const [imageSrc, setImageSrc] = useState(""); 
  async function fetchData() {
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      setImageSrc(jsonData.urls.regular);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <div className="Image-container">
        <img className='Image' src={imageSrc} alt="It's an image" />
        <Draggable>
  <div className="Draggable-div">
    <div
      className="ResizableInput"
      contentEditable="true"
      data-placeholder="Click here to add text"
    ></div>
  </div>
</Draggable>

      </div>
    </div>
  );
}

export default App;
