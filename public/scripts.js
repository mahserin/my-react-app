function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './sth.json', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                callback(null, data);
            } else {
                callback(new Error('Failed to fetch data'));
            }
        }
    };
    xhr.send();
}

// Usage:
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched data:', data);
        // Process and display data
    }
});