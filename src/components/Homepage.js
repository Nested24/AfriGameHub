import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Upload, Users, Star, Globe, Zap } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Cultural Storytelling",
      description: "Showcase games that celebrate African heritage, traditions, and contemporary narratives"
    },
    {
      icon: Zap,
      title: "Developer Empowerment",
      description: "Provide tools, resources, and community support for indie game creators across Africa"
    },
    {
      icon: Star,
      title: "Global Reach",
      description: "Connect African developers with worldwide audiences and gaming communities"
    }
  ];

  const stats = [
    { number: "500+", label: "Games Submitted" },
    { number: "1,200+", label: "Active Developers" },
    { number: "50+", label: "Countries Represented" },
    { number: "25k+", label: "Community Members" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="transform transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              🎮 AfriGameHub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Africa's premier gaming platform where cultural narratives meet digital innovation. 
              Empowering local developers to share their creativity with the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/games"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore Games</span>
              </Link>
              <Link
                to="/submit-game"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Submit Your Game</span>
              </Link>
              <Link
                to="/community"
                className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join Community</span>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            🎯 Our Vision
          </h2>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              To become Africa's premier gaming platform, where every story from our diverse continent finds its digital voice. 
              We envision a future where African narratives, traditions, and innovations lead the global gaming revolution, 
              inspiring millions worldwide.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Through passionate storytelling and innovative gameplay, AfriGameHub is committed to becoming the leading hub 
              where African gaming culture is celebrated, preserved, and propelled into the future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            📞 Get In Touch
          </h2>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <p className="text-gray-300 mb-6">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
            <div className="space-y-4">
              <div>
                <strong className="text-cyan-400">Email:</strong>{' '}
                <a href="mailto:sheldonjoshjohnson@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                  sheldonjoshjohnson@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-cyan-400">Phone:</strong>{' '}
                <a href="tel:+254791523356" className="text-white hover:text-cyan-400 transition-colors">
                  +254 791 523 356
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;