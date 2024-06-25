import React from 'react';
import './SearchResult.css';
import { Creative } from '../../interfaces/Search/Creative';

interface SearchResultProps {
  result: Creative;
  addCreative: (creative: Creative) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ result, addCreative }) => {
  return (
    <div className="search-result" onClick={() => addCreative(result)}>
      {result.field}
    </div>
  );
};

export default SearchResult;
