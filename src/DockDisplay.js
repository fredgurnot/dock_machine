import React, {useState, useEffect} from 'react';
import Dock from './Dock';
import './DockDisplay.css'

const DockDisplay = ({cadenceArray}) => {

    const [meterThreshold, setMeterThreshold] = useState(10);
    const [meterArray, setMeterArray] = useState([]);

    useEffect(() => {
        const arr = [];
        for (let i = 1; i <= meterThreshold; i++) {
            arr[i-1] = (cadenceArray.indexOf(meterThreshold-i) > -1) ? 1 : 0;
        }
        setMeterArray(arr);
    },[meterThreshold, cadenceArray]);


    return (
        <div className="dock-display">
            <div className="meter-input">
                <h3> Meter Count </h3>
                <button
                    onClick={() => setMeterThreshold(meterThreshold-1)}
                    className="mc-button"
                >-</button>
                <div className="meter-count">{meterThreshold}</div>
                <button
                    className="mc-button"
                    onClick={ () => setMeterThreshold(meterThreshold +1)}
                >+</button>

            </div>

            <div className="docks-container">
                {
                    meterArray.map((dock, i) => {
                        return (
                            <Dock
                                key={i}
                                mc={i + 1}
                                isExpanded={dock}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default DockDisplay;