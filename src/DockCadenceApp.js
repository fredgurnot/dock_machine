import React, {useState, useEffect} from 'react';
import DockDisplay from './DockDisplay';
import './DockCadenceApp.css';

const DockCadenceApp = () => {

    const [cadenceString, setCadenceString] = useState("1");
    const [cadenceArray, setCadenceArray] = useState([]);


    useEffect(() => {
        setCadenceArray(cadenceString.split(',').map(Number));

    },[cadenceString]);


    return (
        <div>
            <label htmlFor="cadence">
                Audience: Remaing articles
                <input
                    id="cadence"
                    value={cadenceString}
                    placeholder="Meter Cadence"
                    onChange={ (e) => setCadenceString(e.target.value)}
                />
            </label>
            <br/>


            <DockDisplay
                cadenceArray={cadenceArray}
            />
        </div>
    )
};

export default DockCadenceApp;