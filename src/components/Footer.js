import React from 'react';
import { Heart, Globe, Mail, Phone, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

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
    { href: '/terms', label: 'Terms of Service' },
    { href: '/developers', label: 'Developer Resources' },
    { href: '/api', label: 'API Documentation' }
  ];

  const companyLinks = [
    { href: '/about', label: 'About AfriGameHub' },
    { href: '/careers', label: 'Careers' },
    { href: '/press', label: 'Press Kit' },
    { href: '/blog', label: 'Blog' },
    { href: '/investors', label: 'Investors' },
    { href: '/partnerships', label: 'Partnerships' }
  ];

  return (
    <footer className="relative bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text font-orbitron">
                AfriGameHub
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-space text-lg">
              Empowering African game developers to create world-class games and reach global audiences. 
              Building the future of African gaming, one game at a time.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 mb-8 font-space">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>for African developers</span>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white font-space">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none font-space"
                />
                <button className="btn-primary px-4 py-2 rounded-xl">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-space">Platform</h4>
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

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-space">Support</h4>
            <ul className="space-y-3">
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
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-space">Company</h4>
            <ul className="space-y-3 mb-6">
              {companyLinks.map(({ href, label }) => (
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
            
            {/* Contact Info */}
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

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 focus-ring shadow-lg hover:shadow-xl`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
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
              <a href="/sitemap" className="hover:text-cyan-400 transition-colors font-space">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;