import React, {useState} from 'react';
import Dock from './Dock';
import  './DockDisplay.css'

const DockDisplay = ({meterArray}) => {

    return (
        <div className="dock-display">
            {
                meterArray.map((dock,i) => {
                    return (
                        <Dock
                            key={i}
                            mc={i+1}
                            isExpanded={dock}
                        />
                    )
                })
            }
        </div>
    )
};

export default DockDisplay;