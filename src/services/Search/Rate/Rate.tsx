export const fetchRateData = () => {
    fetch('http://localhost:8080/api/pricing/rate')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
}