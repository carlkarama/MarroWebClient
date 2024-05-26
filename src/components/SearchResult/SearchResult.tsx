import React from 'react';
import './SearchResult.css';
import AddButton from '../Button/AddButton/AddSkillButton';

const SearchResult = ({ result }) => {

    // Callback for handling "Add" button click
    const handleAddButtonClick = () => {
            // Implement your logic for what should happen when the "Add" button is clicked
            console.log('Add button clicked!');
    };
    
    return (
        <>
            <div className="search-result">{result} <AddButton onClick={handleAddButtonClick} disabled={false}></AddButton></div>
        </>
    );
}

export default SearchResult;