import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, Upload, Users, Star, Globe, Zap, Trophy, 
  Play, ArrowRight, Heart, Download, CheckCircle, TrendingUp 
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
      description: "Showcase games that celebrate African heritage, traditions, and contemporary narratives with authentic storytelling that resonates globally.",
      color: "from-cyan-600 to-blue-600",
      glowColor: "shadow-cyan-500/25",
      benefits: ["Authentic representation", "Global reach", "Cultural preservation"]
    },
    {
      icon: Zap,
      title: "Developer Empowerment",
      description: "Comprehensive tools, resources, and community support for indie game creators across the continent to build world-class games.",
      color: "from-purple-600 to-pink-600",
      glowColor: "shadow-purple-500/25",
      benefits: ["Professional tools", "Mentorship", "Resource library"]
    },
    {
      icon: Star,
      title: "Global Distribution",
      description: "Connect African developers with worldwide audiences and international gaming communities through our extensive network.",
      color: "from-orange-600 to-red-600",
      glowColor: "shadow-orange-500/25",
      benefits: ["Worldwide reach", "Marketing support", "Revenue sharing"]
    },
    {
      icon: Trophy,
      title: "Competitive Excellence",
      description: "Regular tournaments, challenges, and competitions to showcase talent, win prizes, and gain recognition in the industry.",
      color: "from-green-600 to-emerald-600",
      glowColor: "shadow-green-500/25",
      benefits: ["Cash prizes", "Industry recognition", "Skill development"]
    }
  ];

  const stats = [
    { 
      number: "2,500+", 
      label: "Games Published", 
      icon: Gamepad2, 
      color: "text-cyan-400",
      description: "High-quality games from African developers"
    },
    { 
      number: "15,000+", 
      label: "Active Developers", 
      icon: Users, 
      color: "text-purple-400",
      description: "Talented creators across 54 countries"
    },
    { 
      number: "54", 
      label: "Countries", 
      icon: Globe, 
      color: "text-orange-400",
      description: "Representing all of Africa"
    },
    { 
      number: "500k+", 
      label: "Players Reached", 
      icon: Heart, 
      color: "text-pink-400",
      description: "Global gaming community"
    }
  ];

  const featuredGames = [
    {
      id: 1,
      title: "Savanna Legends",
      developer: "Kenyan Studios",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      rating: 4.9,
      downloads: "50k+",
      genre: "Adventure",
      gradient: "from-emerald-600 to-teal-600",
      description: "Epic adventure through African mythology",
      tags: ["Story-Rich", "Cultural", "Adventure"]
    },
    {
      id: 2,
      title: "Lagos Rush",
      developer: "Naija Games",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=300&fit=crop",
      rating: 4.7,
      downloads: "35k+",
      genre: "Racing",
      gradient: "from-orange-600 to-red-600",
      description: "High-speed racing through Nigerian cities",
      tags: ["Racing", "Multiplayer", "Urban"]
    },
    {
      id: 3,
      title: "Pharaoh's Quest",
      developer: "Cairo Interactive",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
      rating: 4.8,
      downloads: "42k+",
      genre: "Puzzle",
      gradient: "from-purple-600 to-indigo-600",
      description: "Ancient Egyptian puzzle adventure",
      tags: ["Puzzle", "Historical", "Strategy"]
    }
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Lead Game Developer",
      company: "Lagos Interactive",
      country: "Nigeria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "AfriGameHub transformed my career. From a solo developer to leading a team of 12, the platform's support and community have been invaluable.",
      gradient: "from-pink-600 to-rose-600",
      achievement: "Published 8 games, 2M+ downloads"
    },
    {
      name: "Kwame Asante",
      role: "Indie Game Developer",
      company: "Accra Studios",
      country: "Ghana",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "The tournaments pushed me to excellence. Winning the African Game Jam opened doors to international partnerships I never imagined.",
      gradient: "from-blue-600 to-cyan-600",
      achievement: "Tournament winner, International publisher"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Mobile Game Creator",
      company: "Cairo Games",
      country: "Egypt",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "My Egyptian mythology game reached 500k players worldwide. AfriGameHub's global distribution network made this dream a reality.",
      gradient: "from-purple-600 to-violet-600",
      achievement: "500k+ players, Featured on app stores"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Platform Access",
      description: "No upfront costs or hidden fees"
    },
    {
      icon: TrendingUp,
      title: "Revenue Sharing",
      description: "Keep 85% of your game's revenue"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "24/7 developer community assistance"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Professional testing and feedback"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-mesh">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="mb-8"
            >
              <h1 className="heading-primary mb-6 text-shadow-lg">
                AfriGameHub
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p 
              className="text-lead mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Africa's premier gaming ecosystem where cultural narratives meet digital innovation. 
              Empowering local developers to create world-class games and reach global audiences.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/games"
                className="group btn-primary px-10 py-4 rounded-2xl text-lg flex items-center space-x-3 neon-border min-w-[200px] justify-center"
              >
                <Gamepad2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-space font-semibold">Explore Games</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/submit-game"
                className="group btn-secondary px-10 py-4 rounded-2xl text-lg flex items-center space-x-3 neon-border-purple min-w-[200px] justify-center"
              >
                <Upload className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="font-space font-semibold">Submit Game</span>
              </Link>
            </motion.div>

            {/* Benefits Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <benefit.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-space">{benefit.title}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stats-card"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 font-orbitron`}>
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-2 font-space">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm font-inter">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6 text-shadow">
              Featured Games
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Discover award-winning games from talented African developers, 
              showcasing innovation, culture, and world-class gameplay.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="game-card"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 focus-ring">
                      <Play className="w-8 h-8" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${game.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold font-space shadow-lg`}>
                      {game.genre}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-space">{game.title}</h3>
                    <p className="text-gray-400 text-sm font-space">by {game.developer}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-inter">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs font-space">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400 font-space">{game.downloads}</span>
                    </div>
                    <Link
                      to={`/game/${game.id}`}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm font-space transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/games"
              className="inline-flex items-center space-x-2 btn-primary px-8 py-3 rounded-2xl font-space font-semibold"
            >
              <span>Browse All Games</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6 text-shadow">
              Why Choose AfriGameHub
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              We provide everything African game developers need to succeed in the global gaming industry.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="feature-card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 pulse-glow ${feature.glowColor}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="heading-tertiary text-xl mb-4">{feature.title}</h3>
                <p className="text-body mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="font-space">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-max max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-secondary mb-6 text-shadow">
              Success Stories
            </h2>
            <p className="text-lead">
              Hear from developers who've transformed their careers with AfriGameHub
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
                className="glass-effect-strong rounded-2xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className={`w-24 h-24 bg-gradient-to-r ${testimonials[currentTestimonial].gradient} rounded-full p-1 mx-auto lg:mx-0 mb-6`}>
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white font-space">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-cyan-400 font-semibold font-space">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-gray-400 text-sm font-space">
                        {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].country}
                      </p>
                      <p className="text-green-400 text-sm font-semibold font-space">
                        {testimonials[currentTestimonial].achievement}
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <blockquote className="text-xl lg:text-2xl text-gray-300 italic font-space leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                    index === currentTestimonial 
                      ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-effect-strong rounded-2xl p-12 lg:p-16"
          >
            <h2 className="heading-secondary mb-8 text-shadow">
              Ready to Launch Your Game?
            </h2>
            <p className="text-lead mb-12">
              Join thousands of African developers who are building the future of gaming. 
              Your story, your culture, your game - the world is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                to="/register"
                className="btn-primary px-10 py-4 rounded-2xl text-lg flex items-center justify-center space-x-3 font-space font-semibold min-w-[200px]"
              >
                <Users className="w-6 h-6" />
                <span>Join Community</span>
              </Link>
              <Link
                to="/submit-game"
                className="btn-secondary px-10 py-4 rounded-2xl text-lg flex items-center justify-center space-x-3 font-space font-semibold min-w-[200px]"
              >
                <Upload className="w-6 h-6" />
                <span>Submit Game</span>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 font-space">
              Free to join • No upfront costs • Keep 85% revenue
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;