import React from 'react';
// import './Timer.css';

import Count from './Count';
import ControlPanel from './ControlPanel';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timingArray: [],
            step: 0,
            toggleTimer: true
        }
      };
    toggleTimer = () => {
        this.setState({
            toggleTimer: !this.state.toggleTimer
        });
    }
    tick = () => {
        this.setState(prevState =>  ({
            step: prevState.step + 1
        }));
    }
    addTimeEvent = () => {
        this.setState({
            timingArray: [
                ...this.state.timingArray,
                new Date()
            ]
        });
    }
    componentDidMount() {
        this.poll = setInterval(this.tick, 1000);;
    }
    render() {
        return (
            <div className="Timer" style={{ display: this.state.toggleTimer ? "block" : "none"}}>
                <button onClick={this.toggleTimer}>Delete Timer</button>
                <Count timingArray={this.state.timingArray} />
                <ControlPanel timingArray={this.state.timingArray} handleClick={this.addTimeEvent} />
            </div>
        );
    }
    
}

export default Timer;
