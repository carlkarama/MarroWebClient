import React from 'react';
import './Rate.css';

const Rate = () => {

    const fetchRateData = () => {
        fetch('http://localhost:8080/api/pricing/rate')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    }   

    fetchRateData();

    const fetchCreativeCategoriesData = () => {
        fetch('http://localhost:8080/api/search')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error:', error));
    }   

    fetchCreativeCategoriesData();

    return (
        <div className="rate-header">
            <h1>Configure Rate</h1>
        </div>
    )
}

export default Rate;