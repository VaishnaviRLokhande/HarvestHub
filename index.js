// Get the search input element
const searchInput = document.getElementById('search-input');

// Add an event listener for the "Enter" key press
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value;
        // Perform search or any other action here
        console.log('Search term:', searchTerm);
        // You can replace the console.log statement with your desired functionality
    }
});