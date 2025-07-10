import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, TrendingUp, Award, Users } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('developers');
  const [timeFilter, setTimeFilter] = useState('all-time');

  const developerLeaderboard = [
    {
      rank: 1,
      name: "CodeMaster254",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      points: 15420,
      gamesSubmitted: 12,
      country: "Kenya",
      badge: "🏆",
      tier: "Legendary",
      change: "+2"
    },
    {
      rank: 2,
      name: "LagosLegend",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      points: 14180,
      gamesSubmitted: 10,
      country: "Nigeria",
      badge: "🥈",
      tier: "Master",
      change: "-1"
    },
    {
      rank: 3,
      name: "CairoCreator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      points: 13950,
      gamesSubmitted: 11,
      country: "Egypt",
      badge: "🥉",
      tier: "Master",
      change: "+1"
    },
    {
      rank: 4,
      name: "CapeTownCoder",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      points: 12720,
      gamesSubmitted: 8,
      country: "South Africa",
      badge: "⭐",
      tier: "Expert",
      change: "0"
    },
    {
      rank: 5,
      name: "AccraArtist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      points: 11580,
      gamesSubmitted: 7,
      country: "Ghana",
      badge: "⭐",
      tier: "Expert",
      change: "+3"
    },
    {
      rank: 6,
      name: "DakarDev",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face",
      points: 10890,
      gamesSubmitted: 6,
      country: "Senegal",
      badge: "⭐",
      tier: "Expert",
      change: "-2"
    },
    {
      rank: 7,
      name: "AddisInnovator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      points: 9650,
      gamesSubmitted: 5,
      country: "Ethiopia",
      badge: "💎",
      tier: "Advanced",
      change: "+1"
    },
    {
      rank: 8,
      name: "KampalaKing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      points: 8920,
      gamesSubmitted: 4,
      country: "Uganda",
      badge: "💎",
      tier: "Advanced",
      change: "-1"
    }
  ];

  const gameLeaderboard = [
    {
      rank: 1,
      title: "Savanna Quest",
      developer: "CodeMaster254",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=60&h=60&fit=crop",
      downloads: 125000,
      rating: 4.9,
      country: "Kenya",
      change: "+1"
    },
    {
      rank: 2,
      title: "Lagos Traffic Simulator",
      developer: "LagosLegend",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=60&h=60&fit=crop",
      downloads: 98000,
      rating: 4.7,
      country: "Nigeria",
      change: "-1"
    },
    {
      rank: 3,
      title: "Pharaoh's Puzzle",
      developer: "CairoCreator",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=60&h=60&fit=crop",
      downloads: 87500,
      rating: 4.8,
      country: "Egypt",
      change: "0"
    },
    {
      rank: 4,
      title: "Ubuntu Warriors",
      developer: "CapeTownCoder",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=60&h=60&fit=crop",
      downloads: 76200,
      rating: 4.6,
      country: "South Africa",
      change: "+2"
    },
    {
      rank: 5,
      title: "Djembe Rhythm Master",
      developer: "AccraArtist",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop",
      downloads: 65800,
      rating: 4.7,
      country: "Ghana",
      change: "-1"
    }
  ];

  const countryLeaderboard = [
    {
      rank: 1,
      country: "Nigeria",
      flag: "🇳🇬",
      developers: 2847,
      games: 1256,
      totalDownloads: 2450000,
      change: "+1"
    },
    {
      rank: 2,
      country: "Kenya",
      flag: "🇰🇪",
      developers: 1923,
      games: 892,
      totalDownloads: 1890000,
      change: "-1"
    },
    {
      rank: 3,
      country: "South Africa",
      flag: "🇿🇦",
      developers: 1654,
      games: 743,
      totalDownloads: 1650000,
      change: "0"
    },
    {
      rank: 4,
      country: "Egypt",
      flag: "🇪🇬",
      developers: 1432,
      games: 634,
      totalDownloads: 1420000,
      change: "+2"
    },
    {
      rank: 5,
      country: "Ghana",
      flag: "🇬🇭",
      developers: 1198,
      games: 521,
      totalDownloads: 1180000,
      change: "-1"
    }
  ];

  const tabs = [
    { id: 'developers', label: 'Top Developers', icon: Users },
    { id: 'games', label: 'Popular Games', icon: Trophy },
    { id: 'countries', label: 'Countries', icon: Award }
  ];

  const timeFilters = [
    { id: 'all-time', label: 'All Time' },
    { id: 'this-year', label: 'This Year' },
    { id: 'this-month', label: 'This Month' },
    { id: 'this-week', label: 'This Week' }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Legendary': return 'text-yellow-400';
      case 'Master': return 'text-purple-400';
      case 'Expert': return 'text-blue-400';
      case 'Advanced': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getChangeIcon = (change) => {
    if (change.startsWith('+')) return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (change.startsWith('-')) return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
  };

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text orbitron">
            🏆 Leaderboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating the top performers in the African gaming community
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2,500+</div>
            <div className="text-gray-400 text-sm">Active Developers</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">1,200+</div>
            <div className="text-gray-400 text-sm">Games Published</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">5M+</div>
            <div className="text-gray-400 text-sm">Total Downloads</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">54</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-black/30 rounded-lg p-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === id
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Time Filter */}
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="bg-black/40 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
            >
              {timeFilters.map(filter => (
                <option key={filter.id} value={filter.id} className="bg-gray-800">
                  {filter.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Leaderboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-2xl overflow-hidden"
        >
          {activeTab === 'developers' && (
            <div>
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">Top Developers</h2>
                <p className="text-gray-400">Ranked by points earned from game submissions and community engagement</p>
              </div>
              <div className="divide-y divide-gray-700">
                {developerLeaderboard.map((developer, index) => (
                  <motion.div
                    key={developer.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 hover:bg-black/20 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className="flex items-center space-x-2 w-16">
                        <span className="text-2xl font-bold text-gray-400">#{developer.rank}</span>
                        {getChangeIcon(developer.change)}
                      </div>

                      {/* Badge */}
                      <div className="text-3xl">{developer.badge}</div>

                      {/* Avatar & Info */}
                      <div className="flex items-center space-x-3 flex-1">
                        <img
                          src={developer.avatar}
                          alt={developer.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{developer.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{developer.country}</span>
                            <span>•</span>
                            <span className={getTierColor(developer.tier)}>{developer.tier}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex items-center space-x-8 text-sm">
                        <div className="text-center">
                          <div className="text-cyan-400 font-semibold">{developer.points.toLocaleString()}</div>
                          <div className="text-gray-400">Points</div>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-400 font-semibold">{developer.gamesSubmitted}</div>
                          <div className="text-gray-400">Games</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'games' && (
            <div>
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">Most Popular Games</h2>
                <p className="text-gray-400">Ranked by downloads, ratings, and community engagement</p>
              </div>
              <div className="divide-y divide-gray-700">
                {gameLeaderboard.map((game, index) => (
                  <motion.div
                    key={game.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 hover:bg-black/20 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className="flex items-center space-x-2 w-16">
                        <span className="text-2xl font-bold text-gray-400">#{game.rank}</span>
                        {getChangeIcon(game.change)}
                      </div>

                      {/* Game Image & Info */}
                      <div className="flex items-center space-x-3 flex-1">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>by {game.developer}</span>
                            <span>•</span>
                            <span>{game.country}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex items-center space-x-8 text-sm">
                        <div className="text-center">
                          <div className="text-green-400 font-semibold">{game.downloads.toLocaleString()}</div>
                          <div className="text-gray-400">Downloads</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-yellow-400 font-semibold">{game.rating}</span>
                          </div>
                          <div className="text-gray-400">Rating</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'countries' && (
            <div>
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-2xl font-bold text-white">Top Countries</h2>
                <p className="text-gray-400">Ranked by total developers, games, and community activity</p>
              </div>
              <div className="divide-y divide-gray-700">
                {countryLeaderboard.map((country, index) => (
                  <motion.div
                    key={country.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 hover:bg-black/20 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank */}
                      <div className="flex items-center space-x-2 w-16">
                        <span className="text-2xl font-bold text-gray-400">#{country.rank}</span>
                        {getChangeIcon(country.change)}
                      </div>

                      {/* Flag & Country */}
                      <div className="flex items-center space-x-3 flex-1">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-lg font-semibold text-white">{country.country}</h3>
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="text-cyan-400 font-semibold">{country.developers.toLocaleString()}</div>
                          <div className="text-gray-400">Developers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-purple-400 font-semibold">{country.games.toLocaleString()}</div>
                          <div className="text-gray-400">Games</div>
                        </div>
                        <div className="text-center">
                          <div className="text-green-400 font-semibold">{(country.totalDownloads / 1000000).toFixed(1)}M</div>
                          <div className="text-gray-400">Downloads</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to climb the leaderboard?</h3>
            <p className="text-gray-300 mb-6">
              Submit your games, engage with the community, and earn points to rise through the ranks!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/submit-game"
                className="btn-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Submit Your Game
              </Link>
              <Link
                to="/community"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Join Community
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;