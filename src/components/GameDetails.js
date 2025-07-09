import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, Heart, Share2, Download, Star, Calendar, 
  Globe, User, MessageCircle, ThumbsUp, Flag, ArrowLeft 
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Mock game data - in real app, fetch from API
    const mockGame = {
      id: parseInt(id),
      title: "Savanna Quest: The Ancient Spirits",
      developer: "Kenyan Studios",
      developerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      genre: "Adventure",
      region: "East Africa",
      country: "Kenya",
      description: "Embark on an epic journey through the mystical African savanna in this breathtaking adventure game. Discover ancient spirits, solve challenging puzzles, and uncover the secrets of your ancestors. Experience authentic African folklore brought to life with stunning visuals and immersive gameplay.",
      longDescription: "Savanna Quest takes players on an unforgettable journey through the heart of Africa, where ancient spirits guide your path and traditional wisdom holds the key to saving your village. This game combines modern gaming mechanics with authentic African storytelling, creating an experience that's both entertaining and culturally enriching.\n\nFeatures:\n• Explore vast African landscapes with stunning detail\n• Interact with mythical creatures from African folklore\n• Solve puzzles based on traditional African wisdom\n• Experience authentic music and sound design\n• Multiple endings based on your choices\n• Support for multiple African languages",
      images: [
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop"
      ],
      rating: 4.8,
      downloads: 12500,
      likes: 2340,
      uploadDate: "2024-01-15",
      tags: ["adventure", "african-culture", "puzzle", "story-rich", "single-player"],
      isPaid: false,
      platform: "Browser",
      fileSize: "45 MB",
      version: "1.2.0",
      lastUpdated: "2024-01-20",
      systemRequirements: {
        minimum: "Chrome 80+, Firefox 75+, Safari 13+",
        recommended: "Latest browser versions for optimal performance"
      }
    };

    setGame(mockGame);

    // Mock comments
    const mockComments = [
      {
        id: 1,
        user: "GameLover254",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        comment: "This game is absolutely amazing! The storytelling is incredible and the African folklore elements are beautifully integrated.",
        timestamp: "2 hours ago",
        likes: 15
      },
      {
        id: 2,
        user: "AfricanGamer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        comment: "Finally, a game that represents our culture authentically. The music and visuals are stunning!",
        timestamp: "5 hours ago",
        likes: 23
      },
      {
        id: 3,
        user: "PuzzleMaster",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        comment: "The puzzles are challenging but fair. Love how they're based on traditional wisdom!",
        timestamp: "1 day ago",
        likes: 8
      }
    ];

    setComments(mockComments);
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.title,
        text: game.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: "You",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        comment: newComment,
        timestamp: "Just now",
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  if (!game) {
    return (
      <div className="relative min-h-screen pt-20">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/games"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Games</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={game.images[currentImageIndex]}
                  alt={game.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {game.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-cyan-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 p-4 overflow-x-auto">
                {game.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-cyan-400' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Game Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>by {game.developer}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{game.country}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(game.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{game.rating}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {game.tags.map(tag => (
                  <span key={tag} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">About This Game</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {game.longDescription}
                </p>
              </div>

              {/* System Requirements */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">System Requirements</h3>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="mb-2">
                    <span className="text-cyan-400 font-medium">Minimum: </span>
                    <span className="text-gray-300">{game.systemRequirements.minimum}</span>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-medium">Recommended: </span>
                    <span className="text-gray-300">{game.systemRequirements.recommended}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Comments ({comments.length})</h3>
              
              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts about this game..."
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  className="mt-3 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map(comment => (
                  <div key={comment.id} className="bg-black/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={comment.avatar}
                        alt={comment.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-white">{comment.user}</span>
                          <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-300 mb-2">{comment.comment}</p>
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Play/Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-400 mb-1">FREE</div>
                <div className="text-gray-400 text-sm">No cost to play</div>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mb-4">
                <Play className="w-5 h-5" />
                <span>Play Now</span>
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={handleLike}
                  className={`flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg font-medium transition-colors ${
                    isLiked 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-black/30 text-gray-400 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{game.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <button
                  onClick={handleShare}
                  className="flex-1 flex items-center justify-center space-x-1 py-2 bg-black/30 text-gray-400 hover:text-cyan-400 rounded-lg font-medium transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center justify-center p-2 bg-black/30 text-gray-400 hover:text-red-400 rounded-lg transition-colors">
                  <Flag className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Game Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Game Statistics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Downloads</span>
                  <span className="text-white font-semibold">{game.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{game.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Platform</span>
                  <span className="text-white font-semibold">{game.platform}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">File Size</span>
                  <span className="text-white font-semibold">{game.fileSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Version</span>
                  <span className="text-white font-semibold">{game.version}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Last Updated</span>
                  <span className="text-white font-semibold">{new Date(game.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Developer Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Developer</h3>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={game.developerAvatar}
                  alt={game.developer}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{game.developer}</div>
                  <div className="text-gray-400 text-sm">{game.country}</div>
                </div>
              </div>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg font-semibold transition-colors">
                View Profile
              </button>
            </motion.div>

            {/* Related Games */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">More from {game.developer}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=60&h=60&fit=crop"
                    alt="Game"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">Lagos Traffic</div>
                    <div className="text-gray-400 text-xs">Simulation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop"
                    alt="Game"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">Rhythm Master</div>
                    <div className="text-gray-400 text-xs">Music</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;