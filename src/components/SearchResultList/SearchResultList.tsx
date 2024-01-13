import React from 'react';
import './SearchResultsList.css';
import  SearchResult from '../SearchResult/SearchResult';
import User from '../../interfaces/User';

interface SearchResultListProps {
    results: User[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results }) => {
    return (
        <div className="results-list">
            {
            results.map((result: User, id: number) => {
            return <SearchResult result={result} key={id} />;
            })}  
        </div>
    );
}

export default SearchResultList;