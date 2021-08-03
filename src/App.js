import React, { useState } from 'react'
import { Tabs } from './tabs'
import { Tab } from './tab'
import './App.css'

const options = [
  { value: 1, label: "Tabs 1" },
  { value: 2, label: "Tabs 2" },
  { value: 3, label: "Tabs 3" }
];

const App = () => {
  const [value, onChange] = useState()

  const renderTub = (options, value, onChange) => {
    return (
        <ul className="tabs__nav">
              {options.map((item) => {
  
                return (    
                <li key={item.value} className="tabs__item">
                  <button 
                    className={`tabs__button ${(value === item) ? "active" : ''}`}
                    onClick={() => onChange(item)}
                  >
                    {item.label}
                  </button>
                </li>
              )
              })}
        </ul>
    )
  }

  return (
    <div className="container">
        <Tabs 
          options={options}
          value={value}
          onChange={onChange}
          renderTub={renderTub}
        />
        <Tab value={value}/>
    </div>

  );
}

export default App;
