import React from 'react';
// import './ControlPanel.css';

function ControlPanel(props) {
    const toggleBtn = props.timingArray && props.timingArray.length % 2 === 0;
    return (
        <div className="ControlPanel">
            <button id="startBtn" disabled={!toggleBtn} onClick={props.handleClick}>START</button>
            <button id="stopBtn" disabled={toggleBtn} onClick={props.handleClick}>STOP</button>
        </div>
    );   
}

export default ControlPanel;
