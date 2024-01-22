import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Creative } from '../../interfaces/Search/Creative';

interface SearchBoxProps {
    setResults: React.Dispatch<React.SetStateAction<Creative[]>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch("http://localhost:8080/api/search")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((creative: any) => {
                    return (
                        value && 
                        creative.toLowerCase().includes(value.toLowerCase())
                    );
                });
                console.log(results);
                setResults(results);
            }).catch((error) => {
                // Handle errors if any
                console.error("Error fetching data:", error);
            });
    }

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }
    return (
            <div className="input-wrapper">
                <FaSearch id="search-icon"></FaSearch>
                <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)}/>
            </div>
    )
}

export default SearchBox;