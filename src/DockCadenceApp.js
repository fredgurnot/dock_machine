import React, {useState, useEffect} from 'react';
import DockDisplay from './DockDisplay';
import './DockCadenceApp.css';

const DockCadenceApp = () => {

    const [cadenceString, setCadenceString] = useState("0,1,2,5,9");
    const [cadenceArray, setCadenceArray] = useState([]);
    const [dockDisplay, setDockDisplay] = useState([1]);

    useEffect(() => {
        setCadenceArray(cadenceString.split(',').filter(e => e !== "").map(Number));

    }, [cadenceString]);


    return (
        <div className="meter-machine">
            <h1 className="header">Dock Expansion Preview</h1>

            <div className="controls">
                <div className="audience-input">
                    <h3>Audience as remaining articles</h3>
                    <label htmlFor="cadence">

                        <input
                            className="cadence-input"
                            id="cadence"
                            value={cadenceString}
                            placeholder="Meter Cadence"
                            onChange={(e) => setCadenceString(e.target.value)}
                        />
                    </label>

                </div>
                <div className="views-input">
                    <h3> Dock Views </h3>
                    <button
                        onClick={() => setDockDisplay(dockDisplay.slice(0, dockDisplay.length - 1))}
                        className="mc-button"
                    >-
                    </button>
                    <div className="meter-count">{dockDisplay.length}</div>
                    <button
                        className="mc-button"
                        onClick={() => setDockDisplay(dockDisplay.concat([1]))}
                    >+
                    </button>
                </div>
            </div>

            {
                dockDisplay.map((dock, i) => {
                    return (
                        <DockDisplay
                            cadenceArray={cadenceArray}
                            key={i}
                        />
                    )
                })
            }


        </div>
    )
};

export default DockCadenceApp;