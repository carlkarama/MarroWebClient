import React from 'react';
import './App.css';
import { Homepage } from './pages/index';
import { NavBar, Feature, CTA } from './components'
import { Route } from 'react-router-dom';
import CalculateProfit from './pages/Profit/CalculateProfit';

function App() {
  return (
    <>
      <div className="App">
      </div>
      <Homepage route="/search"/>
      <Route path="/calculate-profit" element={<CalculateProfit />} />
    </> 
  );
}

export default App;
