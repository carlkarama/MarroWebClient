import React, { useState } from 'react';
import SearchResultList from '../components/SearchResultList/SearchResultList';
import SearchBox from '../components/Search/SearchBox';
import EditSkills from '../components/Search/EditSkills/EditSkills';
import '../components/Search/SearchBox.css';

const Search = () => {
    const [results, setResults] = useState([]);
    
    const addSkill = (skill) => {
        if (!results.includes(skill)) {
            setResults([...results, skill]);
        }
    };

    const removeSkill = (skill) => {
        setResults(results.filter((s) => s !== skill));
    };

    return (
        <div className="search-bar-container">
            <SearchBox setResults={setResults} />
            {results.length > 0 && (
                <SearchResultList results={results} addSkill={addSkill} />
            )}
            <EditSkills skills={results} removeSkill={removeSkill} />
        </div>
    );
};

export default Search;
