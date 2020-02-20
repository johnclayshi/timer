import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

class App extends React.PureComponent {
  addTimer = () => {
    var newDIV = document.createElement('div');
    var desktop = document.getElementById('timerContainer');
    desktop.appendChild(newDIV);
    ReactDOM.render(<Timer />, newDIV);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.addTimer}>Add a Timer</button>
          <div id="timerContainer"></div>
          <p className="App-logo">
            It's a timer!
          </p>
        
        </header>
      </div>
    );
  }
}

export default App;
