import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="homepage">
      <header className="homepage-header">
        <h1>🎮 AfriGameHub</h1>
        <p>
          AfriGameHub is a vibrant digital playground dedicated to showcasing Africa’s rich cultural
          narratives through indie gaming. We empower local developers by giving them a platform to
          share their creativity with the world. Whether you're a gamer seeking unique adventures or
          a creator with a bold vision, AfriGameHub is your launchpad. Explore stunning titles
          inspired by heritage, folklore, and futuristic African worlds. Join a growing community
          that celebrates innovation, storytelling, and the future of gaming from the heart of Africa.
        </p>

        <div className="homepage-buttons">
          <div className="button-row">
            <button aria-label="Explore all available games">
              🎮 <strong>Browse Games</strong>
            </button>
            <button aria-label="Submit your indie game to the hub">
              🚀 <strong>Submit Your Game</strong>
            </button>
          </div>
          <div className="button-row">
            <button className="join-button" aria-label="Join the vibrant dev community">
              🤝 <strong>Join the Community</strong>
            </button>
          </div>
        </div>
      </header>

      {/* New Image section */}
      <section className="homepage-images">
    
     
       
      </section>
    </main>
  );
};

export default HomePage;
