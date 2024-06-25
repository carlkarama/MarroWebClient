import { Creative } from "../../interfaces/Search/Creative";

export const fetchCreativeFields = (value: string, setResults: React.Dispatch<React.SetStateAction<Creative[]>>) => {
    fetch("http://localhost:8080/api/v1/search")
        .then((response) => response.json())
        .then((json) => {
            const results = json
        .filter((creative: string) => {
          return value && creative.toLowerCase().includes(value.toLowerCase());
        })
        .map((creative: string, index: number) => ({
          id: index,
          field: creative,
        }));
        setResults(results)
            console.log(results);
        }).catch((error) => {
            // Handle errors if any
            console.error("Error fetching data:", error);
        });
}