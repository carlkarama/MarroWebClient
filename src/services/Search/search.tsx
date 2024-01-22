import { Creative } from "../../interfaces/Search/Creative";

export const fetchCreativeFields = (value: string, setResults: React.Dispatch<React.SetStateAction<Creative[]>>) => {
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