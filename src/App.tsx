import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterWithLocalStore, CounterWithOutStore } from './Component/counter';
import { Sum2Number, Todo } from './Component';





function App() {
  return (
    <div className="App">
    <div>
        <h3>Count Component with two ways use store</h3>
      <CounterWithLocalStore/>
      <CounterWithOutStore/>
      </div>
      <hr />
      <div>
        <h3>Sum two number, use WHEN and AUTORUN function</h3>
      <Sum2Number/>
      </div>
      <hr />
      <div>
        <h3>Todo component use REACTION</h3>
        <Todo/>
      </div>
    </div>
  );
}

export default App;
