import React from 'react';
import './SearchResultsList.css';
import SearchResult from '../SearchResult/SearchResult';
import { Creative } from '../../interfaces/Search/Creative';

interface SearchResultListProps {
    results: Creative[];
    addSkill: (skill: string) => void;
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results, addSkill }) => {
    return (
        <div className="results-list">
            {results.map((result: Creative, id: number) => (
                <SearchResult result={result} key={id} addSkill={addSkill} />
            ))}
        </div>
    );
}

export default SearchResultList;