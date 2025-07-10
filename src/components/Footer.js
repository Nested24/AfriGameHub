import React from 'react';
import { Heart, Globe, Mail, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' }
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/games', label: 'Browse Games' },
    { href: '/submit-game', label: 'Submit Game' },
    { href: '/community', label: 'Community' },
    { href: '/tournaments', label: 'Tournaments' },
    { href: '/about', label: 'About Us' }
  ];

  const supportLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/help', label: 'Help Center' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' }
  ];

  return (
    <footer className="relative bg-gray-950/80 backdrop-blur-xl border-t border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center pulse-glow">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text font-orbitron">
                AfriGameHub
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-space">
              Empowering African game developers by providing a platform to showcase their creativity 
              and connect with a global gaming community. Building the future of African gaming, one game at a time.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-6 font-space">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>for African developers</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 focus-ring`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-space">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors font-space hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-space">Support</h4>
            <ul className="space-y-3 mb-6">
              {supportLinks.map(({ href, label }) => (
                <li key={label}>
                  <a 
                    href={href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors font-space hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 group">
                <Mail className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <a 
                  href="mailto:sheldonjoshjohnson@gmail.com" 
                  className="hover:text-cyan-400 transition-colors font-space text-sm"
                >
                  sheldonjoshjohnson@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <Phone className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <a 
                  href="tel:+254791523356" 
                  className="hover:text-cyan-400 transition-colors font-space text-sm"
                >
                  +254 791 523 356
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <Globe className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="font-space text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left font-space">
              © {new Date().getFullYear()} AfriGameHub. All rights reserved. 
              Building the future of African gaming.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-cyan-400 transition-colors font-space">
                Privacy
              </a>
              <a href="/terms" className="hover:text-cyan-400 transition-colors font-space">
                Terms
              </a>
              <a href="/cookies" className="hover:text-cyan-400 transition-colors font-space">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;