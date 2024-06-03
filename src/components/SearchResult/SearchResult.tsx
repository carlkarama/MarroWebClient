import React from 'react';
import './SearchResult.css';
import { Creative } from '../../interfaces/Search/Creative';

interface SearchResultProps {
    result: Creative;
    addSkill: (skill: string) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, addSkill }) => {
    const handleAddSkill = () => {
        addSkill(result.field);
    };

    return (
        <div className="search-result">
            <span>{result.field}</span>
            <button onClick={handleAddSkill}>+</button>
        </div>
    );
}

export default SearchResult;
