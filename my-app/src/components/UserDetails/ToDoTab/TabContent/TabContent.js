import React from 'react';

const TabContent = ({label, active, onClick}) => (
    <div className={`todotab__element ${active ? 'active' : ''}`} onClick={onClick}>
        <h3>{label}</h3>
        </div>
)

export default TabContent;