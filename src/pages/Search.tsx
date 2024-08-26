import React, { useState } from 'react';
import { useFields } from '../hooks/context/FieldsContext';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/Search/SearchBox';
import SearchResultList from '../components/SearchResultList/SearchResultList';
import { Creative } from "../interfaces/Search/Creative";

import './Search.css'

const Search: React.FC = () => {
  const { fields, setFields } = useFields();
  const navigate = useNavigate();
  const [addedCreatives, setAddedCreatives] = useState<Creative[]>([]);
  const [searchResults, setSearchResults] = useState<Creative[]>([]);

  const handleAddCreative = (creative: Creative) => {
    if (!addedCreatives.some(c => c.field.toLowerCase() === creative.field.toLowerCase())) {
      setAddedCreatives([...addedCreatives, creative]);

      setFields([...fields, {
        fieldName: creative.field,
        pricingType: 'Per Hour',
        price: '0',
        hours: 0,
        total: 0
      }]);
    }
  };

  const handleRemoveCreative = (creativeId: number) => {
    const updatedCreatives = addedCreatives.filter(creative => creative.id !== creativeId);
    setAddedCreatives(updatedCreatives);

    setFields(updatedCreatives.map(creative => ({
      fieldName: creative.field,
      pricingType: 'Per Hour',
      price: '0',
      hours: 0,
      total: 0
    })));
  };

  const handleSave = () => {
    navigate('/pricing');
  };

  return (
    <div className="container">
      <div className="edit-skills">
        <p>Enter the creative fields you want to budget for.</p>

        <SearchBox setResults={setSearchResults} addCreative={handleAddCreative} />
        {searchResults.length > 0 && (
          <SearchResultList results={searchResults} addCreative={handleAddCreative} />
        )}

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
          <button onClick={handleSave}>Save</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
