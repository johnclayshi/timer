import React from 'react';

function calculateTiming(timings) {
    let totalTiming = 0;
    for(let i=0; i<timings.length; i+=2) {
        const start = timings[i];
        const stop = timings[i+1] || new Date();
        totalTiming += (stop - start)/1000;
    }
    return totalTiming;
}

function Count (props) {
    return (
        <div className="Timer">
            Current Time: {calculateTiming(props.timingArray).toFixed(0)}
        </div>
    );
}

export default Count;
