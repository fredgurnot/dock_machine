import React, {useState, useEffect} from 'react';
import DockDisplay from './DockDisplay';
import './DockCadenceApp.css';

const DockCadenceApp = () => {

    const [cadenceString, setCadenceString] = useState("0,1,2,5,9");
    const [cadenceArray, setCadenceArray] = useState([]);


    useEffect(() => {
        setCadenceArray(cadenceString.split(',').map(Number));

    },[cadenceString]);


    return (
        <div className="meter-machine">
            <h1 className="header">Dock Expansion Preview</h1>

            <h3>Audience:</h3>
            <label htmlFor="cadence">
                 Remaing articles &nbsp;
                <input
                    className="cadence-input"
                    id="cadence"
                    value={cadenceString}
                    placeholder="Meter Cadence"
                    onChange={ (e) => setCadenceString(e.target.value)}
                />
            </label>
            <br/>


            <DockDisplay cadenceArray={cadenceArray} />
            <DockDisplay cadenceArray={cadenceArray} />
            <DockDisplay cadenceArray={cadenceArray} />


        </div>
    )
};

export default DockCadenceApp;