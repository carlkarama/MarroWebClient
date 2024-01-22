import React from 'react';
import './Rate.css';
import { fetchRateData } from '../services/Search/Rate/Rate'

const Rate = () => {

    fetchRateData();

    return (
        <div className="rate-header">
            <h1>Configure Rate</h1>
        </div>
    )
}

export default Rate;