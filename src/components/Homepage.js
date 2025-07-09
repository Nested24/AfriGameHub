import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, Upload, Users, Star, Globe, Zap, Trophy, 
  Play, ArrowRight, TrendingUp, Award, Heart, Download 
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Cultural Storytelling",
      description: "Showcase games that celebrate African heritage, traditions, and contemporary narratives with authentic storytelling.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Developer Empowerment",
      description: "Comprehensive tools, resources, and community support for indie game creators across the continent.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Global Reach",
      description: "Connect African developers with worldwide audiences and international gaming communities.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Trophy,
      title: "Competitive Gaming",
      description: "Regular tournaments, challenges, and competitions to showcase talent and win exciting prizes.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Games Submitted", icon: Gamepad2 },
    { number: "15,000+", label: "Active Developers", icon: Users },
    { number: "54", label: "Countries Represented", icon: Globe },
    { number: "500k+", label: "Community Members", icon: Heart }
  ];

  const featuredGames = [
    {
      id: 1,
      title: "Savanna Legends",
      developer: "Kenyan Studios",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      rating: 4.9,
      downloads: "50k+",
      genre: "Adventure"
    },
    {
      id: 2,
      title: "Lagos Rush",
      developer: "Naija Games",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop",
      rating: 4.7,
      downloads: "35k+",
      genre: "Racing"
    },
    {
      id: 3,
      title: "Pharaoh's Quest",
      developer: "Cairo Interactive",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
      rating: 4.8,
      downloads: "42k+",
      genre: "Puzzle"
    }
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Game Developer",
      country: "Nigeria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "AfriGameHub gave me the platform to share my cultural stories through gaming. The community support is incredible!"
    },
    {
      name: "Kwame Asante",
      role: "Indie Developer",
      country: "Ghana",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The tournaments and challenges pushed me to create better games. I've grown so much as a developer here."
    },
    {
      name: "Fatima Al-Rashid",
      role: "Mobile Game Creator",
      country: "Egypt",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "This platform connected me with players worldwide. My Egyptian mythology game reached audiences I never imagined!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text orbitron"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              🎮 AfriGameHub
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Africa's premier gaming ecosystem where cultural narratives meet digital innovation. 
              Empowering local developers to share their creativity with the world.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/games"
                className="group btn-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore Games</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/submit-game"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Submit Your Game</span>
              </Link>
              <Link
                to="/tournaments"
                className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join Tournaments</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 orbitron">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text orbitron">
              🌟 Featured Games
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the most popular and innovative games from African developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="game-card glass-effect rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors">
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500/80 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {game.genre}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">by {game.developer}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{game.downloads}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/games"
              className="inline-flex items-center space-x-2 btn-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Games</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text orbitron">
              🚀 Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Empowering African game developers with the tools and platform they need to succeed
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform pulse-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text orbitron">
              💬 Developer Stories
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our amazing community of African game developers
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-cyan-400"
                />
                <blockquote className="text-lg text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-cyan-400 font-semibold">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].country}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text orbitron">
              🎯 Ready to Start Your Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Join thousands of African developers who are already building the future of gaming. 
              Your story, your culture, your game - the world is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;