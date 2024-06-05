import React, { useState } from 'react';

function PopupButton({ buttonText, popupMessage }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>{buttonText}</button>
      {showPopup && (
        <div>
          <p>{popupMessage}</p>
          <button className="popup" onClick={togglePopup}>X</button>
        </div>
      )}
    </div>
  );
}

export default PopupButton;
