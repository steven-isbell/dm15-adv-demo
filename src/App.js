import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import MouseComp from './components/MouseComp/MouseComp';
import SwapiContainer from './components/SwapiContainer/SwapiContainer';
import Mouse from './components/Mouse/Mouse';
import TextInput from './components/TextInput/TextInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*<Button
          handleClick={() => alert('Hello')}
          style={{ borderRadius: '5px', color: 'salmon', background: 'fuscia' }}
        >
          Hello
        </Button> */}
        {/*<MouseComp /> */}
        {/*<SwapiContainer
          render={({ people }) => (
            <Button
              people={people}
              style={{ color: 'salmon' }}
              handleClick={() => alert('Hello')}
            />
          )}
        />
        <SwapiContainer
          render={({ people }) => (
            <div>
              {people.map(val => <p style={{ color: 'orange' }}>{val.name}</p>)}
            </div>
          )}
        /> */}
        <Mouse>
          {({ x, y }) => (
            <div style={{ height: '10vh', width: '10vw' }}>
              Your position is {x} & {y}
            </div>
          )}
        </Mouse>
        <TextInput>
          {({ ...state, handleChange }) =>
             <div><input name="username" onChange={handleChange} type="text" />
            <input name="password" onChange={handleChange} type="password" /></div>
          }
        </TextInput>
      </div>
    );
  }
}

export default App;

// <Route
//   path="/"
//   render={props => (
//     <div>
//       <Home {...props} />
//     </div>
//   )}
// />;
