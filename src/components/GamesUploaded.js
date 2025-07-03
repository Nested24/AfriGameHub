import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, MessageCircle, Play, Star, Download, Globe, Calendar } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const GamesUploaded = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data for games
  useEffect(() => {
    const mockGames = [
      {
        id: 1,
        title: "Savanna Quest",
        developer: "Kenia Studios",
        genre: "Adventure",
        region: "East Africa",
        country: "Kenya",
        description: "Embark on a mystical journey through the African savanna, discovering ancient secrets and wildlife.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
        upvotes: 245,
        comments: 32,
        downloads: 1200,
        rating: 4.8,
        uploadDate: "2024-01-15",
        tags: ["adventure", "wildlife", "african-culture"],
        isPaid: false,
        platform: "Browser"
      },
      {
        id: 2,
        title: "Lagos Traffic Simulator",
        developer: "NaijaGameDev",
        genre: "Simulation",
        region: "West Africa",
        country: "Nigeria",
        description: "Navigate the bustling streets of Lagos in this realistic traffic simulation game.",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop",
        upvotes: 189,
        comments: 28,
        downloads: 890,
        rating: 4.5,
        uploadDate: "2024-01-10",
        tags: ["simulation", "city", "traffic"],
        isPaid: true,
        price: 4.99,
        platform: "Mobile"
      },
      {
        id: 3,
        title: "Pharaoh's Puzzle",
        developer: "Cairo Interactive",
        genre: "Puzzle",
        region: "North Africa",
        country: "Egypt",
        description: "Solve ancient Egyptian puzzles and unlock the secrets of the pyramids.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
        upvotes: 312,
        comments: 45,
        downloads: 1580,
        rating: 4.9,
        uploadDate: "2024-01-08",
        tags: ["puzzle", "ancient", "egypt"],
        isPaid: false,
        platform: "Browser"
      },
      {
        id: 4,
        title: "Ubuntu Warriors",
        developer: "Cape Town Games",
        genre: "Action",
        region: "Southern Africa",
        country: "South Africa",
        description: "A fighting game celebrating African martial arts and warrior traditions.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        upvotes: 156,
        comments: 22,
        downloads: 670,
        rating: 4.3,
        uploadDate: "2024-01-05",
        tags: ["action", "fighting", "martial-arts"],
        isPaid: true,
        price: 7.99,
        platform: "Desktop"
      },
      {
        id: 5,
        title: "Djembe Rhythm Master",
        developer: "Accra Beats",
        genre: "Rhythm",
        region: "West Africa",
        country: "Ghana",
        description: "Master traditional African rhythms in this engaging music game.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        upvotes: 203,
        comments: 38,
        downloads: 950,
        rating: 4.7,
        uploadDate: "2024-01-03",
        tags: ["rhythm", "music", "traditional"],
        isPaid: false,
        platform: "Mobile"
      },
      {
        id: 6,
        title: "Serengeti Safari",
        developer: "Tanzania Tech",
        genre: "Educational",
        region: "East Africa",
        country: "Tanzania",
        description: "Learn about African wildlife through an interactive safari experience.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
        upvotes: 178,
        comments: 25,
        downloads: 780,
        rating: 4.6,
        uploadDate: "2024-01-01",
        tags: ["educational", "wildlife", "safari"],
        isPaid: false,
        platform: "Browser"
      }
    ];
    setGames(mockGames);
    setFilteredGames(mockGames);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;
      const matchesRegion = selectedRegion === 'All' || game.region === selectedRegion;
      
      return matchesSearch && matchesGenre && matchesRegion;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.uploadDate) - new Date(a.uploadDate);
        case 'popular':
          return b.upvotes - a.upvotes;
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        default:
          return 0;
      }
    });

    setFilteredGames(filtered);
  }, [games, searchTerm, selectedGenre, selectedRegion, sortBy]);

  const handleUpvote = (gameId) => {
    setGames(prev => prev.map(game => 
      game.id === gameId 
        ? { ...game, upvotes: game.upvotes + 1 }
        : game
    ));
  };

  const genres = ['All', ...new Set(games.map(game => game.genre))];
  const regions = ['All', ...new Set(games.map(game => game.region))];

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Discover African Games
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore innovative games created by talented developers across Africa
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/40 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Genre Filter */}
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
            >
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="downloads">Most Downloaded</option>
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <div key={game.id} className="group bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {game.platform}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {game.isPaid ? (
                    <span className="bg-yellow-500/80 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      ${game.price}
                    </span>
                  ) : (
                    <span className="bg-green-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Free
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{game.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-2">by {game.developer}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center space-x-1">
                    <Globe className="w-3 h-3" />
                    <span>{game.country}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(game.uploadDate).toLocaleDateString()}</span>
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {game.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{game.downloads.toLocaleString()}</span>
                  </span>
                  <span>{game.genre}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleUpvote(game.id)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      <span>{game.upvotes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{game.comments}</span>
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No games found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesUploaded;