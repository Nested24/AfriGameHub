import React, { useState, useEffect } from 'react';
import './HomePage.css';
import GameSubmissionForm from './GameSubmissionForm';
import AnimatedBackground from './AnimatedBackground';

const initialGamesData = [
  { id: 1, name: 'Savanna Quest', genre: 'Adventure', region: 'East Africa' },
  { id: 2, name: 'Desert Racers', genre: 'Racing', region: 'North Africa' },
  { id: 3, name: 'City of Pharaohs', genre: 'Strategy', region: 'North Africa' },
  { id: 4, name: 'Jungle Beats', genre: 'Rhythm', region: 'West Africa' },
  { id: 5, name: 'Safari Shooter', genre: 'Shooter', region: 'East Africa' },
  { id: 6, name: 'Nile Mysteries', genre: 'Puzzle', region: 'North Africa' },
  { id: 7, name: 'Festival Frenzy', genre: 'Party', region: 'West Africa' },
  { id: 8, name: 'Coastline Clash', genre: 'Action', region: 'South Africa' },
];

const genres = ['All', ...Array.from(new Set(initialGamesData.map(game => game.genre)))];
const regions = ['All', ...Array.from(new Set(initialGamesData.map(game => game.region)))];

const Homepage = () => {
  const [games, setGames] = useState(initialGamesData);
  const [scrollY, setScrollY] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGameSubmit = async (newGameData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append('title', newGameData.title);
      formData.append('genre', newGameData.genre);
      formData.append('developerName', newGameData.developerName);
      formData.append('address', newGameData.address);
      formData.append('country', newGameData.country);
      formData.append('region', newGameData.region);
      formData.append('paidGame', newGameData.paidGame);
      formData.append('contactEmail', newGameData.contactEmail);
      formData.append('contactPhone', newGameData.contactPhone);
      formData.append('paymentInfo', newGameData.paymentInfo);
      formData.append('uploadDate', newGameData.uploadDate);
      formData.append('gameFile', newGameData.gameFile);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setGames(prevGames => [
        ...prevGames,
        {
          id: prevGames.length ? Math.max(...prevGames.map(g => g.id)) + 1 : 1,
          name: newGameData.title,
          genre: newGameData.genre,
          region: newGameData.region,
        },
      ]);
      setIsFormVisible(false);
    } catch {
      setSubmitError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredGames = games.filter((game) => {
    return (
      (selectedGenre === 'All' || game.genre === selectedGenre) &&
      (selectedRegion === 'All' || game.region === selectedRegion)
    );
  });

  return (
    <>
      <div className="homepage-container">
        <AnimatedBackground />

        {/* Left Sidebar */}
        <aside className="sidebar left-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="sidebar-icon" aria-hidden="true">🌍</div>
              <h2>Our Vision</h2>
            </div>
            <p>
              To become Africa's premier gaming platform, where every story from our diverse continent finds its digital voice. We envision a future where African narratives, traditions, and innovations lead the global gaming revolution, inspiring millions worldwide.
            </p>
            <div className="gaming-image">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&crop=center"
                alt="Gaming Setup"
                className="sidebar-img"
              />
            </div>
          </div>
        </aside>

        {/* Right Sidebar */}
        <aside className="sidebar right-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="sidebar-icon" aria-hidden="true">🚀</div>
              <h2>Our Mission</h2>
            </div>
            <p>
              Empowering African game developers by providing cutting-edge tools, global exposure, and a thriving community ecosystem. Bridging gaps and fostering innovation while preserving authenticity.
            </p>
            <div className="gaming-image">
              <img
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center"
                alt="Gaming Controller"
                className="sidebar-img"
              />
            </div>
          </div>
        </aside>

        <main className="homepage">

          {/* Secondary Controller */}
          <div className="floating-controller floating-controller-2">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=150&fit=crop&crop=center"
              alt="Gaming Controller"
              className="controller-img"
              aria-hidden="true"
              draggable="false"
            />
          </div>

          <header className="homepage-header">
            <h1>🎮 AfriGameHub</h1>
            <p>
              AfriGameHub is a vibrant digital playground dedicated to showcasing Africa's rich cultural narratives through indie gaming. We empower local developers by giving them a platform to share their creativity with the world.
            </p>

            <div className="homepage-buttons">
              <div className="button-row">
                <button
                  className="primary-button"
                  onClick={() => window.location.href = '/browse-games'}
                >
                  🎮 <strong>Browse Games</strong>
                </button>
                <button
                  className="primary-button"
                  aria-expanded={isFormVisible}
                  aria-controls="game-submission-form"
                  onClick={() => setIsFormVisible(!isFormVisible)}
                >
                  🚀 <strong>Submit Your Game</strong>
                </button>
              </div>
              <div className="button-row">
                <button
                  className="join-button"
                  onClick={() => console.log('Join Community clicked')}
                >
                  🤝 <strong>Join the Community</strong>
                </button>
              </div>
            </div>
          </header>

          {/* Conditionally render Game Submission Form */}
          {isFormVisible && (
            <GameSubmissionForm
              id="game-submission-form"
              onGameSubmit={handleGameSubmit}
              genres={genres.filter(g => g !== 'All')}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
          )}

          {/* Genre Tabs */}
          <section className="tabs-section" aria-label="Game genre filters">
            <h3 className="tabs-label">Filter by Genre:</h3>
            <div role="tablist" aria-label="Game Genre Tabs" className="tabs-container">
              {genres.map((genre) => (
                <button
                  key={genre}
                  role="tab"
                  aria-selected={selectedGenre === genre}
                  tabIndex={selectedGenre === genre ? 0 : -1}
                  className={`tab-button${selectedGenre === genre ? ' active-tab' : ''}`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </section>

          {/* Region Tabs */}
          <section className="tabs-section" aria-label="Game region filters">
            <h3 className="tabs-label">Filter by Region:</h3>
            <div role="tablist" aria-label="Game Region Tabs" className="tabs-container">
              {regions.map((region) => (
                <button
                  key={region}
                  role="tab"
                  aria-selected={selectedRegion === region}
                  tabIndex={selectedRegion === region ? 0 : -1}
                  className={`tab-button${selectedRegion === region ? ' active-tab' : ''}`}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </section>

          {/* Filtered Games List */}
          <section className="games-list" aria-live="polite" aria-atomic="true" tabIndex={-1}>
            {filteredGames.length === 0 ? (
              <p className="no-games-msg">No games match your selected filters.</p>
            ) : (
              filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="game-card"
                  tabIndex="0"
                  aria-label={game.name + ', Genre: ' + game.genre + ', Region: ' + game.region}
                >
                  <h3 className="game-name">{game.name}</h3>
                  <p className="game-details">
                    Genre: <strong>{game.genre}</strong>
                  </p>
                  <p className="game-details">
                    Region: <strong>{game.region}</strong>
                  </p>
                </div>
              ))
            )}
          </section>

          {/* Project Aim Section */}
          <section className="project-aim-section">
            <h2>🎯 Project Aim</h2>
            <p>
              At AfriGameHub, our overarching aim is to revolutionize the gaming landscape by shining a spotlight on the vibrant stories and talent emerging from Africa. We aim to create a dynamic and inclusive platform that nurtures creativity, innovation, and cultural expression through video games. By doing so, we are not only providing African game developers a stage to showcase their unique creations to a global audience, but we are also promoting the rich heritage, traditions, and futuristic visions of the continent in ways never seen before.
              <br /><br />
              Our mission encompasses fostering a supportive ecosystem equipped with the latest tools, resources, and community interactions to empower creators at all levels. AfriGameHub serves as a cultural bridge — connecting local storytellers with gamers and markets worldwide — and aims to accelerate economic growth through sustainable gaming ventures. We believe that gaming is a powerful medium to educate, entertain, and unite people worldwide with authentic African narratives.
              <br /><br />
              Through passionate storytelling and innovative gameplay, AfriGameHub is committed to becoming the leading hub where African gaming culture is celebrated, preserved, and propelled into the future.
            </p>
          </section>

          {/* Our Partners Section */}
          <section className="partners-section">
            <h2>🤝 Our Partners</h2>
            <p className="partners-placeholder">
              Coming soon: Our amazing partners who support and collaborate with AfriGameHub.
            </p>
          </section>

          {/* Support / Contact Us Section */}
          <section className="contact-section">
            <h2>📞 Support / Contact Us</h2>
            <p>If you have any questions, comments, or support needs, please don't hesitate to reach out to us.</p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:sheldonjoshjohnson@gmail.com">sheldonjoshjohnson@gmail.com</a>
              </li>
              <li>
                <strong>Tel:</strong>{' '}
                <a href="tel:+254791523356">+254 791 523 356</a>
              </li>
            </ul>
          </section>
        </main>
      </div>

      {/* Footer with Copyright */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} AfriGameHub. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Homepage;

