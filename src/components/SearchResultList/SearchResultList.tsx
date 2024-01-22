import React from 'react';
import './SearchResultsList.css';
import  SearchResult from '../SearchResult/SearchResult';
import { Creative } from '../../interfaces/Search/Creative';

interface SearchResultListProps {
    results: Creative[];
}

const SearchResultList: React.FC<SearchResultListProps> = ({ results }) => {
    return (
        <div className="results-list">
            {
                results.map((result: Creative, id: number) => {
                return <SearchResult result={result} key={id} />;        
            })}  
        </div>
    );
}

export default SearchResultList;