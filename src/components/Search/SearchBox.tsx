import React, { useState } from 'react';
import { Creative } from '../../interfaces/Search/Creative';
import { fetchCreativeFields } from '../../services/Search/search';

interface SearchBoxProps {
    setResults: React.Dispatch<React.SetStateAction<Creative[]>>;
    addCreative: (creative: Creative) => void;
  }
  
  const SearchBox: React.FC<SearchBoxProps> = ({ setResults, addCreative }) => {
    const [newSkill, setNewSkill] = useState<string>("");
  
    const handleNewSkillChange = (value: string) => {
      setNewSkill(value);
      fetchCreativeFields(value, setResults);
    };
  
    const handleNewSkillAdd = () => {
      if (newSkill.trim() === '') return;
      const creative: Creative = { id: Date.now(), field: newSkill };
      addCreative(creative);
      setNewSkill("");
    };
  
    return (
      <div>
        <div className="add-skill">
          <input
            type="text"
            placeholder="e.g. Film Director"
            value={newSkill}
            onChange={(e) => handleNewSkillChange(e.target.value)}
          />
          <button onClick={handleNewSkillAdd}>Add</button>
        </div>
      </div>
    );
  };
  
  export default SearchBox;