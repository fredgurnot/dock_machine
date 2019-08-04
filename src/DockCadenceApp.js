import React, {useState, useEffect} from 'react';
import DockDisplay from './DockDisplay';
import './DockCadenceApp.css';

const DockCadenceApp = () => {
    const [meterThreshold, setMeterThreshold] = useState(10);
    const [meterArray, setMeterArray] = useState([]);
    const [cadenceString, setCadenceString] = useState("1");
    const [cadenceArray, setCadenceArray] = useState([]);


    useEffect(() => {
        setCadenceArray(cadenceString.split(',').map(Number));
    },[cadenceString]);

    useEffect(() => {
        const arr = [];
        console.log('meterArray:' + meterArray);
        for (let i = 1; i <= meterThreshold; i++) {
            arr[i-1] = (cadenceArray.indexOf(meterThreshold-i) > -1) ? 1 : 0;
        }
        console.log('arr:' + arr);
        setMeterArray(arr);
    }, [meterThreshold]);

    return (
        <div>
            <div className="meter-imput">
                <label htmlFor="meterThreshold">
                    Meter Threshold
                    <input
                        id="meterThreshold"
                        value={meterThreshold}
                        placeholder="Meter Threshold"
                        onChange={ (e) => (setMeterThreshold(e.target.value))}
                    />
                </label>
                <br/>
                <label htmlFor="cadence">
                    Audience: Remaing articles
                    <input
                        id="cadence"
                        value={cadenceString}
                        placeholder="Meter Cadence"
                        onChange={ (e) => setCadenceString(e.target.value)}
                    />
                </label>
            </div>

            <DockDisplay
            meterArray={meterArray}
            />
        </div>
    )
};

export default DockCadenceApp;