import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, Globe, Users, Zap, Target, Award, 
  Gamepad2, Star, TrendingUp, Shield, Code, Lightbulb 
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description: "We celebrate and preserve African culture through authentic storytelling and representation in games.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive ecosystem where developers can learn, collaborate, and grow together.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing the boundaries of game development with cutting-edge technology and creative solutions.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting African developers with worldwide audiences and opportunities.",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const team = [
    {
      name: "Sheldon Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about empowering African developers and showcasing our rich cultural heritage through gaming.",
      location: "Nairobi, Kenya"
    },
    {
      name: "Amara Okafor",
      role: "Head of Community",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Building bridges between developers across Africa and fostering collaborative relationships.",
      location: "Lagos, Nigeria"
    },
    {
      name: "Kwame Asante",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Leading our technical vision and ensuring our platform scales to serve millions of users.",
      location: "Accra, Ghana"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Cultural Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Ensuring authentic representation of African cultures and traditions in our platform.",
      location: "Cairo, Egypt"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Platform Launch",
      description: "AfriGameHub officially launched with 100 founding developers",
      icon: Gamepad2
    },
    {
      year: "2023",
      title: "First 1,000 Games",
      description: "Reached our first milestone of 1,000 games submitted to the platform",
      icon: Star
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Featured in international gaming conferences and media outlets",
      icon: Award
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Expanded to 15,000+ active developers across 54 African countries",
      icon: TrendingUp
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Enterprise-grade security protecting your games and personal information"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Comprehensive suite of tools for game development, testing, and deployment"
    },
    {
      icon: Lightbulb,
      title: "Learning Resources",
      description: "Tutorials, workshops, and mentorship programs for skill development"
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Reach players worldwide through our international distribution network"
    }
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text orbitron">
            About AfriGameHub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to transform Africa into a global gaming powerhouse by empowering 
            local developers and celebrating our rich cultural heritage through interactive entertainment.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white orbitron">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To create the premier platform where African game developers can showcase their creativity, 
              connect with global audiences, and build sustainable careers while preserving and promoting 
              our continent's diverse cultures through the universal language of gaming.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text orbitron">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at AfriGameHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto pulse-glow`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text orbitron">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate individuals working to build the future of African gaming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-400"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{member.bio}</p>
                <div className="flex items-center justify-center space-x-1 text-gray-400 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text orbitron">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in building Africa's premier gaming platform
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`glass-effect rounded-2xl p-6 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      {index % 2 === 0 && (
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <div className={index % 2 === 1 ? 'text-right' : ''}>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        <p className="text-cyan-400 font-semibold">{milestone.year}</p>
                      </div>
                      {index % 2 === 1 && (
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text orbitron">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to succeed as an African game developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text orbitron">
              Join Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Whether you're a developer, gamer, or supporter of African creativity, there's a place for you 
              in our community. Together, we're building the future of African gaming.
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
                to="/contact"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;