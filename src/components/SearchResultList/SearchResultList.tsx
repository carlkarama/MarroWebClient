import React from 'react';
import './SearchResultsList.css';
import SearchResult from '../SearchResult/SearchResult';
import { Creative } from '../../interfaces/Search/Creative';


interface SearchResultListProps {
    results: Creative[];
    addCreative: (creative: Creative) => void;
  }
  
  const SearchResultList: React.FC<SearchResultListProps> = ({ results, addCreative }) => {
    return (
      <div className="results-list">
        {results.map((result: Creative, id: number) => (
          <SearchResult result={result} key={id} addCreative={addCreative} />
        ))}
      </div>
    );
  };
  
  export default SearchResultList;