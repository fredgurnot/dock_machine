import React, {useState, useEffect} from 'react';
import Dock from './Dock';
import './DockDisplay.css'

const DockDisplay = ({cadenceArray}) => {

    const [meterThreshold, setMeterThreshold] = useState(10);
    const [meterArray, setMeterArray] = useState([]);

    useEffect(() => {
        const arr = [];
        console.log('meterArray:' + meterArray);
        for (let i = 1; i <= meterThreshold; i++) {
            arr[i-1] = (cadenceArray.indexOf(meterThreshold-i) > -1) ? 1 : 0;
        }
        console.log('arr:' + arr);
        setMeterArray(arr);
    },[meterThreshold, cadenceArray]);


    return (
        <div>
            <div className="meter-input">
                <label htmlFor="meterThreshold">
                    Meter Threshold
                    <input
                        id="meterThreshold"
                        value={meterThreshold}
                        placeholder="Meter Threshold"
                        onChange={(e) => (setMeterThreshold(e.target.value))}
                    />
                </label>

            </div>

            <div className="dock-display">
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