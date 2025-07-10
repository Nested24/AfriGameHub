import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Calendar, Users, Clock, Award, 
  Zap, Gift, ArrowRight, Crown 
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeTournaments = [
    {
      id: 1,
      title: "African Legends Game Jam 2024",
      description: "Create games inspired by African mythology and folklore",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      prize: "$5,000 + Publishing Deal",
      participants: 234,
      timeLeft: "5 days",
      difficulty: "All Levels",
      category: "Game Jam",
      startDate: "2024-02-01",
      endDate: "2024-02-15",
      status: "Active",
      requirements: ["Original game concept", "African cultural theme", "Playable prototype"],
      judges: ["Industry Expert", "Cultural Consultant", "Game Designer"]
    },
    {
      id: 2,
      title: "Mobile Gaming Championship",
      description: "Best mobile game developed by African developers",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      prize: "$3,000 + Mentorship Program",
      participants: 156,
      timeLeft: "12 days",
      difficulty: "Intermediate",
      category: "Competition",
      startDate: "2024-01-20",
      endDate: "2024-02-20",
      status: "Active",
      requirements: ["Mobile-optimized game", "Published on app store", "African developer"],
      judges: ["Mobile Game Expert", "UI/UX Designer", "Marketing Specialist"]
    },
    {
      id: 3,
      title: "Educational Games Challenge",
      description: "Games that teach African history and culture",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      prize: "$2,500 + School Partnership",
      participants: 89,
      timeLeft: "8 days",
      difficulty: "Beginner Friendly",
      category: "Educational",
      startDate: "2024-01-25",
      endDate: "2024-02-10",
      status: "Active",
      requirements: ["Educational content", "Age-appropriate design", "Cultural accuracy"],
      judges: ["Education Expert", "Child Psychologist", "Game Developer"]
    }
  ];

  const upcomingTournaments = [
    {
      id: 4,
      title: "VR/AR Innovation Contest",
      description: "Next-generation immersive experiences",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      prize: "$10,000 + Hardware Sponsorship",
      participants: 0,
      timeLeft: "Starts in 15 days",
      difficulty: "Advanced",
      category: "Innovation",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      status: "Upcoming"
    },
    {
      id: 5,
      title: "Indie Game Showcase",
      description: "Platform for independent developers to shine",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      prize: "$4,000 + Marketing Support",
      participants: 0,
      timeLeft: "Starts in 22 days",
      difficulty: "All Levels",
      category: "Showcase",
      startDate: "2024-03-08",
      endDate: "2024-03-22",
      status: "Upcoming"
    }
  ];

  const pastTournaments = [
    {
      id: 6,
      title: "New Year Game Jam 2024",
      description: "Start the year with creative game development",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      prize: "$2,000",
      participants: 178,
      winner: "CodeMaster254",
      winningGame: "Savanna Quest",
      status: "Completed",
      endDate: "2024-01-15"
    },
    {
      id: 7,
      title: "Holiday Puzzle Challenge",
      description: "Brain-teasing games for the holiday season",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      prize: "$1,500",
      participants: 134,
      winner: "PuzzleMaster",
      winningGame: "African Riddles",
      status: "Completed",
      endDate: "2023-12-31"
    }
  ];

  const tabs = [
    { id: 'active', label: 'Active Tournaments', count: activeTournaments.length },
    { id: 'upcoming', label: 'Upcoming', count: upcomingTournaments.length },
    { id: 'past', label: 'Past Results', count: pastTournaments.length }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner Friendly': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Game Jam': return 'bg-purple-500/20 text-purple-400';
      case 'Competition': return 'bg-cyan-500/20 text-cyan-400';
      case 'Educational': return 'bg-green-500/20 text-green-400';
      case 'Innovation': return 'bg-orange-500/20 text-orange-400';
      case 'Showcase': return 'bg-pink-500/20 text-pink-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
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
            🏆 Tournaments & Challenges
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compete with the best African developers, showcase your skills, and win amazing prizes
          </p>
        </motion.div>

        {/* Featured Tournament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-2xl overflow-hidden mb-12"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=400&fit=crop"
              alt="Featured Tournament"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 max-w-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">African Legends Game Jam 2024</h2>
                <p className="text-gray-300 mb-6">
                  The biggest game development competition celebrating African culture and mythology. 
                  Join hundreds of developers in creating the next generation of culturally rich games.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Gift className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">$5,000 Prize Pool</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400">234 Participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400">5 Days Left</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Trophy className="w-5 h-5" />
                  <span>Join Tournament</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tournament Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">45</div>
            <div className="text-gray-400 text-sm">Active Tournaments</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2,500+</div>
            <div className="text-gray-400 text-sm">Total Participants</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Gift className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">$50k+</div>
            <div className="text-gray-400 text-sm">Prizes Awarded</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">120+</div>
            <div className="text-gray-400 text-sm">Winners</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-2xl p-2 mb-8"
        >
          <div className="flex space-x-1">
            {tabs.map(({ id, label, count }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{label}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{count}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tournament Content */}
        <div className="space-y-8">
          {activeTab === 'active' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(tournament.category)}`}>
                        {tournament.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tournament.difficulty)}`}>
                        {tournament.difficulty}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{tournament.timeLeft}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tournament.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Prize Pool:</span>
                        <span className="text-green-400 font-semibold">{tournament.prize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Participants:</span>
                        <span className="text-cyan-400 font-semibold">{tournament.participants}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-purple-400 font-semibold">
                          {new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Join Now
                      </button>
                      <button className="px-4 py-2 bg-black/30 text-gray-400 hover:text-white rounded-lg transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'upcoming' && (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-48 object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                        <span className="text-white font-semibold">{tournament.timeLeft}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(tournament.category)}`}>
                        {tournament.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{tournament.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Prize Pool:</span>
                        <span className="text-green-400 font-semibold">{tournament.prize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Difficulty:</span>
                        <span className="text-purple-400 font-semibold">{tournament.difficulty}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-600 text-gray-300 py-2 rounded-lg font-semibold cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-6">
              {pastTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{tournament.title}</h3>
                      <p className="text-gray-300 text-sm mb-3">{tournament.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Ended: {new Date(tournament.endDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{tournament.participants} participants</span>
                        <span>•</span>
                        <span>Prize: {tournament.prize}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-2">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold">Winner</span>
                      </div>
                      <div className="text-white font-semibold">{tournament.winner}</div>
                      <div className="text-gray-400 text-sm">{tournament.winningGame}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Compete?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our tournaments and challenges to showcase your skills, learn from other developers, 
              and win amazing prizes while celebrating African gaming culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Browse All Tournaments</span>
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Create Tournament</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tournaments;