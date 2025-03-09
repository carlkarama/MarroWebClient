import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './pages/Search';
import Rate from './pages/Rate';
import PricingTable from './components/Table/PricingTable/PricingTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FieldsProvider } from './hooks/context/FieldsContext';
import CalculateProfit from './pages/Profit/CalculateProfit';
import Invoice from './pages/Invoice/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <FieldsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/rate' element={<Rate/>}></Route>
          <Route path="/pricing" element={<PricingTable/>} />
          <Route path="/profit" element={<CalculateProfit/>} />
          <Route path="/invoice" element={<Invoice/>} />
        </Routes>
      </BrowserRouter>
  </FieldsProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
