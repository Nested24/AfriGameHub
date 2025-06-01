import React, { useState, useEffect } from 'react';
import './BrowseGames.css'; // Create a CSS file for styles
import AnimatedBackground from './AnimatedBackground';

const BrowseGames = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch games from your server or a static list
    const fetchGames = async () => {
      // Replace with your API endpoint
      const response = await fetch('/api/games'); // Adjust this URL to your actual API
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-games-container">
      <AnimatedBackground />
      <h1>Browse Games</h1>
      <input
        type="text"
        placeholder="Search for a game..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="games-list">
        {filteredGames.length === 0 ? (
          <p>No games found.</p>
        ) : (
          filteredGames.map(game => (
            <div key={game.id} className="game-card">
              <h3>{game.name}</h3>
              <p>Genre: {game.genre}</p>
              <p>Region: {game.region}</p>
              <a href={game.downloadLink} className="download-button">Download</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseGames;
