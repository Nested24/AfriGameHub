import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';

const gamesData = [
  { id: 1, name: 'Savanna Quest', genre: 'Adventure', region: 'East Africa' },
  { id: 2, name: 'Desert Racers', genre: 'Racing', region: 'North Africa' },
  { id: 3, name: 'City of Pharaohs', genre: 'Strategy', region: 'North Africa' },
  { id: 4, name: 'Jungle Beats', genre: 'Rhythm', region: 'West Africa' },
  { id: 5, name: 'Safari Shooter', genre: 'Shooter', region: 'East Africa' },
  { id: 6, name: 'Nile Mysteries', genre: 'Puzzle', region: 'North Africa' },
  { id: 7, name: 'Festival Frenzy', genre: 'Party', region: 'West Africa' },
  { id: 8, name: 'Coastline Clash', genre: 'Action', region: 'South Africa' },
];

const genres = ['All', ...Array.from(new Set(gamesData.map(game => game.genre)))];
const regions = ['All', ...Array.from(new Set(gamesData.map(game => game.region)))];

const Homepage = () => {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const numParticles = 80;
    const shapes = ['triangle', 'diamond', 'circle', 'square'];

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 2 + 0.5;
        this.size = Math.random() * 4 + 2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        const colors = ['#00ffe7', '#007fff', '#ff6b6b', '#ffa500', '#00ff88', '#ff4081'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 10) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        switch (this.shape) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(-this.size, this.size);
            ctx.lineTo(this.size, this.size);
            ctx.closePath();
            ctx.fill();
            break;
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size, 0);
            ctx.closePath();
            ctx.fill();
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          default:
            break;
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a1f2c');
      gradient.addColorStop(0.3, '#1e3c52');
      gradient.addColorStop(0.6, '#3a5e69');
      gradient.addColorStop(1, '#2c1810');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffe7';
      ctx.lineWidth = 1;

      const time = Date.now() * 0.001;
      for (let x = -50; x < canvas.width + 50; x += 100) {
        for (let y = -50; y < canvas.height + 50; y += 100) {
          const offsetX = Math.sin(time + x * 0.01) * 20;
          const offsetY = Math.cos(time + y * 0.01) * 20;
          ctx.save();
          ctx.translate(x + offsetX, y + offsetY);
          ctx.rotate(time * 0.5);
          ctx.beginPath();
          ctx.moveTo(0, -15);
          ctx.lineTo(15, 0);
          ctx.lineTo(0, 15);
          ctx.lineTo(-15, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const controllerStyle = {
    transform: `translateY(${scrollY * 0.6}px) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.15}deg)`,
    transition: 'transform 0.1s ease-out',
  };

  const filteredGames = gamesData.filter((game) => {
    return (
      (selectedGenre === 'All' || game.genre === selectedGenre) &&
      (selectedRegion === 'All' || game.region === selectedRegion)
    );
  });

  return (
    <div className="homepage-container">
      <canvas ref={canvasRef} className="homepage-canvas" />

      {/* Left Sidebar - Vision */}
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

      {/* Right Sidebar - Mission */}
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

      {/* Main Content */}
      <main className="homepage">
        <div className="floating-controller floating-controller-1" style={controllerStyle}>
          <img
            src="https://cdn.jsdelivr.net/gh/sheldonjoshjohnson/3d-ps5-controller@main/ps5-controller-glass-render.png"
            alt="3D PS5 Controller"
            className="controller-img-3d"
            aria-hidden="true"
            draggable="false"
          />
        </div>

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
                aria-label="Explore all available games"
                onClick={() => console.log('Browse Games clicked')}
              >
                🎮 <strong>Browse Games</strong>
              </button>
              <button
                className="primary-button"
                aria-label="Submit your indie game to the hub"
                onClick={() => console.log('Submit Game clicked')}
              >
                🚀 <strong>Submit Your Game</strong>
              </button>
            </div>
            <div className="button-row">
              <button
                className="join-button"
                aria-label="Join the vibrant dev community"
                onClick={() => console.log('Join Community clicked')}
              >
                🤝 <strong>Join the Community</strong>
              </button>
            </div>
          </div>
        </header>

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
        <section className="games-list" aria-live="polite" aria-atomic="true">
          {filteredGames.length === 0 ? (
            <p className="no-games-msg">No games match your selected filters.</p>
          ) : (
            filteredGames.map((game) => (
              <div
                key={game.id}
                className="game-card"
                tabIndex="0"
                aria-label={`${game.name}, Genre: ${game.genre}, Region: ${game.region}`}
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
            <br />
            <br />
            Our mission encompasses fostering a supportive ecosystem equipped with the latest tools, resources, and community interactions to empower creators at all levels. AfriGameHub serves as a cultural bridge — connecting local storytellers with gamers and markets worldwide — and aims to accelerate economic growth through sustainable gaming ventures. We believe that gaming is a powerful medium to educate, entertain, and unite people worldwide with authentic African narratives.
            <br />
            <br />
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
  );
};

export default Homepage;

