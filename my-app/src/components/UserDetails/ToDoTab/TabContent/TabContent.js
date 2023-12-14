import React from 'react';

const TabContent = ({ label, active, onClick }) => {

    const handleClick = (event) => {
        event.preventDefault(); 
        onClick(event); 
      };
      
  return (
    <div
      className={`todotab__element ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <h3>{label}</h3>
    </div>
  );
};

export default TabContent;
