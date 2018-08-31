import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { Route } from 'react-router';

const Test1 = () => {
  return (
    <div>Test1</div>
  )
};

const Test2 = () => {
  return (
    <div>Test2</div>
  )
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's see how CICD works! So amazing~</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Route path="/test1" component={Test1} />
        <Route path="/test2" component={Test2} />
      </div>
    );
  }
}

export default App;
