import React, { useState } from 'react';
import SearchResultList from '../components/SearchResultList/SearchResultList';
import SearchBox from '../components/Search/SearchBox';
import '../components/Search/SearchBox.css'

const Search = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="search-bar-container">
            <SearchBox setResults={setResults}/>
            <SearchResultList results={results}/>
        </div>
    )
}

export default Search;