import React from 'react';
import { useNavigate } from 'react-router-dom';
import pape from '../assets/papegøje.png';

function TextImageWithButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/infopage'); 
  };

  return (
    <div className="text-image-with-button">
      <p>
        Dyrepasserne er i øjeblikket på et spændende eventyr med vores livlige aber, hvor de lærer om deres adfærd og levesteder. De sørger for, at aberne er sunde, glade og får berigende aktiviteter.
      </p>
      
      <button className='fejlButton' onClick={handleClick}>Til forsiden</button>
      
      <img className='fejlImg' src={pape} alt="Jyllands Park Zoo Kort" />
    </div>
  );
}

export default TextImageWithButton;


