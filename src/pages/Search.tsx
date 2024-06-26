import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../components/Search/SearchBox';
import SearchResultList from '../components/SearchResultList/SearchResultList';
import '../components/Search/EditSkills/EditSkills';
import { Creative } from "../interfaces/Search/Creative";


const Search: React.FC = () => {
  const [suggestedCreatives, setSuggestedCreatives] = useState<Creative[]>([]);
  const [addedCreatives, setAddedCreatives] = useState<Creative[]>([]);
  const [searchResults, setSearchResults] = useState<Creative[]>([]);

  useEffect(() => {
    // Fetch suggested creatives from the API
    axios.get('http://localhost:8080/api/v1/search')
      .then(response => {
        setSuggestedCreatives(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the suggested creatives!', error);
      });
  }, []);

  const handleAddCreative = (creative: Creative) => {
    if (!addedCreatives.some(c => c.field.toLowerCase() === creative.field.toLowerCase())) {
      setAddedCreatives([...addedCreatives, creative]);
    }
  };

  const handleRemoveCreative = (creativeId: number) => {
    setAddedCreatives(addedCreatives.filter(creative => creative.id !== creativeId));
  };

  return (
    <div className="edit-skills">
      <h2>Edit skills</h2>
      <p>Enter the creative fields you want to budget for.</p>

      <SearchBox setResults={setSearchResults} addCreative={handleAddCreative} />
      {searchResults.length > 0 && (
        <SearchResultList results={searchResults} addCreative={handleAddCreative} />
      )}

      {/* <div className="suggested-skills">
        <h3>Suggested skills based on your career history</h3>
        <div className="skills-container">
          {searchResults.map(creative => (
            <button key={creative.id} onClick={() => handleAddCreative(creative)}>
              {creative.field} +
            </button>
          ))}
        </div>
      </div> */}

      <div className="added-skills">
        <h3>Added skills</h3>
        <div className="skills-container">
          {addedCreatives.map(creative => (
            <span key={creative.id}>
              {creative.field} <button onClick={() => handleRemoveCreative(creative.id)}>x</button>
            </span>
          ))}
        </div>
      </div>

      <div className="actions">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Search;
