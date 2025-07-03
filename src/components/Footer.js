import React from 'react';
import { Heart, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black/40 backdrop-blur-md border-t border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              AfriGameHub
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering African game developers by providing a platform to showcase their creativity 
              and connect with a global gaming community.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for African developers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/games" className="text-gray-400 hover:text-cyan-400 transition-colors">Browse Games</a></li>
              <li><a href="/submit-game" className="text-gray-400 hover:text-cyan-400 transition-colors">Submit Game</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-cyan-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:sheldonjoshjohnson@gmail.com" className="hover:text-cyan-400 transition-colors">
                  sheldonjoshjohnson@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+254791523356" className="hover:text-cyan-400 transition-colors">
                  +254 791 523 356
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AfriGameHub. All rights reserved. 
            Building the future of African gaming.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;