import React from 'react';
import './Dock.css';

const Dock = ({isExpanded, mc}) => {
    return (
        <div className={`dock ${isExpanded ? "expanded" : ""}`}>{`mc= ${mc}`}</div>
    )
};

export default Dock;