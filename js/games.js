// Sample games data - you can add more games here
const games = [
    {
        name: "2048",
        thumbnail: "games/2048.png",
        url: "games/2048.html"
    },
    {
        name: "Cookie Clicker",
        thumbnail: "games/cookie_clicker.png",
        url: "games/cookie_clicker.html"
    },
    {
        name: "Game 3",
        thumbnail: "images/game3.jpg",
        url: "games/game3.html"
    }
    // Add more games here
];

// Function to create game cards
function createGameCard(game) {
    const gameCard = document.createElement('a');
    gameCard.href = game.url;
    gameCard.className = 'game-card';
    
    gameCard.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.name}">
        <h3>${game.name}</h3>
    `;
    
    return gameCard;
}

// Function to display games
function displayGames(gamesArray) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = ''; // Clear existing games
    
    gamesArray.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Function to filter games based on search
function filterGames(searchTerm) {
    return games.filter(game => 
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all games initially
    displayGames(games);
    
    // Set up search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const filteredGames = filterGames(searchTerm);
        displayGames(filteredGames);
    });
});