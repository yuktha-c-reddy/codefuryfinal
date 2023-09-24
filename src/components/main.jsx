import React from "react";
import { Link } from "react-router-dom";
import './main.css';

function Main(){
  const quote = "It's okay not to be okay.";
  const features = [
    {
      title: "WellBeing Score",
      className: "feature feature1",
      route: "/WellBeingScore",
      imageSrc: "https://i.pinimg.com/564x/e7/1d/bb/e71dbbeceaa5d80af3406dd40824ef24.jpg", 
    
    },
    {
      title: "Cheer Up!",
      className: "feature feature3",
      route: "/CheerUp",
      imageSrc: "https://img.freepik.com/free-vector/cheer-up-concept-illustration_114360-7563.jpg?w=740&t=st=1695492227~exp=1695492827~hmac=044562650c088adccd13855f36b1865da943c74d55e14c35a7a577455781a5d1", // Replace with the actual image source
    },
   
    {
      
      title: "Chatbot",
      className: "feature feature4",
      route: "/Chatbot",
      imageSrc: "https://img.freepik.com/free-vector/mental-health-understanding-brain-vector_53876-79082.jpg?w=740&t=st=1695492302~exp=1695492902~hmac=83896abec057bd732eb7e87913f700eeb0e6e487382c41252a3cfca93782faf6", // Replace with the actual image source
    }, 
  ];

  return (
    <div>
    <div className="app-container">
    
    {features.map((feature, index) => (
      <Link key={index} to={feature.route} className={feature.className}>
        <img src={feature.imageSrc} alt={feature.title} />
        <h2>{feature.title}</h2>
      </Link>
    ))}
    </div>
    <div className="quote-container">
        <p className="quote-text">{quote}</p>
    </div>
    </div>

  );
}

export default Main;



  