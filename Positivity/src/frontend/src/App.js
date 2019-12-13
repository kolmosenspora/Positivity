import React from 'react';
import './App.css';
import Messagelist from "./MessageList";
import SkillChart from "./SkillChart";
import InputForm from "./InputForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SkillChart/>
        <InputForm/>
        <h1>Miko jee</h1>
      </header>
    </div>
  );
}

export default App;
