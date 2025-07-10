import React, { useState } from 'react';
import { MessageSquare, Trophy, Users, Star, Clock, ThumbsUp, MessageCircle, Zap } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Community = () => {
  const [activeTab, setActiveTab] = useState('forum');

  // Mock data for forum posts
  const forumPosts = [
    {
      id: 1,
      title: "Tips for incorporating African folklore into game narratives",
      author: "KenyanDev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      category: "Game Design",
      isSticky: true
    },
    {
      id: 2,
      title: "Looking for collaborators for a Lagos-based racing game",
      author: "NaijaRacer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      replies: 12,
      likes: 28,
      timeAgo: "4 hours ago",
      category: "Collaboration"
    },
    {
      id: 3,
      title: "Best tools for mobile game development in 2024",
      author: "MobileGuru",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      replies: 34,
      likes: 67,
      timeAgo: "6 hours ago",
      category: "Development"
    },
    {
      id: 4,
      title: "Showcasing traditional African music in rhythm games",
      author: "RhythmMaster",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      replies: 18,
      likes: 52,
      timeAgo: "1 day ago",
      category: "Audio Design"
    }
  ];

  // Mock data for challenges
  const challenges = [
    {
      id: 1,
      title: "7-Day African Legends Game Jam",
      description: "Create a game inspired by African legends and mythology",
      participants: 156,
      timeLeft: "3 days",
      prize: "$500 + Featured Spot",
      difficulty: "Beginner Friendly",
      status: "Active"
    },
    {
      id: 2,
      title: "Mobile Game Challenge: Urban Africa",
      description: "Develop a mobile game showcasing modern African cities",
      participants: 89,
      timeLeft: "1 week",
      prize: "$1000 + Mentorship",
      difficulty: "Intermediate",
      status: "Active"
    },
    {
      id: 3,
      title: "Educational Game Hackathon",
      description: "Build educational games for African schools",
      participants: 234,
      timeLeft: "Ended",
      prize: "$2000 + Publishing Deal",
      difficulty: "Advanced",
      status: "Completed"
    }
  ];

  // Mock data for leaderboard
  const leaderboard = [
    {
      rank: 1,
      name: "CodeMaster254",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      points: 2450,
      gamesSubmitted: 8,
      country: "Kenya",
      badge: "🏆"
    },
    {
      rank: 2,
      name: "LagosLegend",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      points: 2180,
      gamesSubmitted: 6,
      country: "Nigeria",
      badge: "🥈"
    },
    {
      rank: 3,
      name: "CairoCreator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      points: 1950,
      gamesSubmitted: 7,
      country: "Egypt",
      badge: "🥉"
    },
    {
      rank: 4,
      name: "CapeTownCoder",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      points: 1720,
      gamesSubmitted: 5,
      country: "South Africa",
      badge: "⭐"
    },
    {
      rank: 5,
      name: "AccraArtist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      points: 1580,
      gamesSubmitted: 4,
      country: "Ghana",
      badge: "⭐"
    }
  ];

  const tabs = [
    { id: 'forum', label: 'Discussion Forum', icon: MessageSquare },
    { id: 'challenges', label: 'Dev Challenges', icon: Zap },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Community Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect, collaborate, and compete with fellow African game developers
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2,500+</div>
            <div className="text-gray-400 text-sm">Active Members</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 text-center">
            <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">1,200+</div>
            <div className="text-gray-400 text-sm">Forum Posts</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-orange-500/20 text-center">
            <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">45</div>
            <div className="text-gray-400 text-sm">Active Challenges</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-green-500/20 text-center">
            <Trophy className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">$50k+</div>
            <div className="text-gray-400 text-sm">Prizes Awarded</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-cyan-500/20 mb-8">
          <div className="flex flex-wrap">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl m-2'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-8">
          {activeTab === 'forum' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Discussion Forum</h2>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  New Post
                </button>
              </div>
              
              <div className="space-y-4">
                {forumPosts.map(post => (
                  <div key={post.id} className="bg-black/30 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {post.isSticky && (
                            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                              Pinned
                            </span>
                          )}
                          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 hover:text-cyan-400 cursor-pointer transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>by {post.author}</span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.timeAgo}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies} replies</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Developer Challenges</h2>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Submit Entry
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map(challenge => (
                  <div key={challenge.id} className="bg-black/30 rounded-xl p-6 border border-gray-700 hover:border-purple-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        challenge.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {challenge.status}
                      </span>
                      <span className="text-orange-400 font-semibold">{challenge.timeLeft}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                    <p className="text-gray-300 mb-4">{challenge.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Participants:</span>
                        <span className="text-cyan-400 font-semibold">{challenge.participants}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Prize:</span>
                        <span className="text-yellow-400 font-semibold">{challenge.prize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Difficulty:</span>
                        <span className="text-purple-400 font-semibold">{challenge.difficulty}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      {challenge.status === 'Active' ? 'Join Challenge' : 'View Results'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Community Leaderboard</h2>
                <select className="bg-black/40 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none">
                  <option>This Month</option>
                  <option>All Time</option>
                  <option>This Year</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {leaderboard.map(user => (
                  <div key={user.rank} className="bg-black/30 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/40 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-yellow-400 w-8">
                        {user.badge}
                      </div>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                          <span className="text-sm text-gray-400">from {user.country}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{user.points} points</span>
                          </span>
                          <span>{user.gamesSubmitted} games submitted</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-400">#{user.rank}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Full Leaderboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;