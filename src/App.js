import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Components/ToggleRenderProps';
import ToggleRenderProps from './Components/ToggleRenderProps';
import ToggleRPC from './Components/ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <ToggleRPC>
        {({on, toggle})=> (
          <div>
          <button onClick={toggle}>Show / Hide</button>
            {on && <h1>Show </h1>}
           </div>
        )}
       
      </ToggleRPC>
      </div>
    );
  }
}

export default App;
