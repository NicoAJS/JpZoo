import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function Harmonika({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="harmonica-folder">
      <div className="harmonica-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {isOpen && <div className="harmonica-content">{children}</div>}
    </div>
  );
}

export default Harmonika;