import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Creative } from '../../interfaces/Search/Creative';
import { fetchCreativeFields } from '../../services/Search/search';

interface SearchBoxProps {
    setResults: React.Dispatch<React.SetStateAction<Creative[]>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setResults }) => {
    const [input, setInput] = useState("");

    const handleChange = (value: string) => {
        setInput(value);
        fetchCreativeFields(value, setResults);
    }
    return (
            <div className="input-wrapper">
                <FaSearch id="search-icon"></FaSearch>
                <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)}/>
            </div>
    )
}

export default SearchBox;