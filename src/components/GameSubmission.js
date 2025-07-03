import React, { useState } from 'react';
import { Upload, FileText, Globe, Gamepad2, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const GameSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    region: '',
    country: '',
    description: '',
    developerName: '',
    email: '',
    phone: '',
    gameType: 'browser',
    isPaid: false,
    price: '',
    tags: '',
    gameFile: null,
    screenshots: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const genres = [
    'Action', 'Adventure', 'Puzzle', 'Strategy', 'RPG', 'Simulation',
    'Racing', 'Sports', 'Rhythm', 'Educational', 'Casual', 'Platformer'
  ];

  const regions = [
    'East Africa', 'West Africa', 'North Africa', 'Central Africa', 'Southern Africa'
  ];

  const countries = [
    'Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Ghana', 'Morocco',
    'Uganda', 'Tanzania', 'Zimbabwe', 'Ethiopia', 'Algeria', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'gameFile') {
      setFormData(prev => ({ ...prev, gameFile: files[0] }));
    } else if (name === 'screenshots') {
      setFormData(prev => ({ ...prev, screenshots: Array.from(files) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      // Reset form
      setFormData({
        title: '', genre: '', region: '', country: '', description: '',
        developerName: '', email: '', phone: '', gameType: 'browser',
        isPaid: false, price: '', tags: '', gameFile: null, screenshots: []
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Submit Your Game
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Share your creation with the African gaming community and beyond. 
            Let your story reach players worldwide.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-green-300">Game submitted successfully! We'll review it and get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <span className="text-red-300">Submission failed. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Game Title */}
            <div className="md:col-span-2">
              <label className="block text-cyan-400 font-semibold mb-2">
                <Gamepad2 className="w-4 h-4 inline mr-2" />
                Game Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Enter your game title"
              />
            </div>

            {/* Genre */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Genre *</label>
              <select
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="">Select Genre</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            {/* Game Type */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Platform *</label>
              <select
                name="gameType"
                value={formData.gameType}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="browser">Browser Game</option>
                <option value="mobile">Mobile Game</option>
                <option value="desktop">Desktop Game</option>
              </select>
            </div>

            {/* Region */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">
                <Globe className="w-4 h-4 inline mr-2" />
                Region *
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="">Select Region</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Developer Name */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Developer Name *</label>
              <input
                type="text"
                name="developerName"
                value={formData.developerName}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Your name or studio name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-cyan-400 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-cyan-400 font-semibold mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Game Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your game, its story, gameplay mechanics, and cultural elements..."
              />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="block text-cyan-400 font-semibold mb-2">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="e.g., african-culture, adventure, multiplayer (comma-separated)"
              />
            </div>

            {/* Pricing */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="isPaid"
                    checked={formData.isPaid}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-cyan-500 bg-black/40 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-white">This is a paid game</span>
                </label>
              </div>
              {formData.isPaid && (
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Price in USD"
                />
              )}
            </div>

            {/* Game File Upload */}
            <div className="md:col-span-2">
              <label className="block text-cyan-400 font-semibold mb-2">
                <Upload className="w-4 h-4 inline mr-2" />
                Game File *
              </label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-cyan-500 transition-colors">
                <input
                  type="file"
                  name="gameFile"
                  onChange={handleFileChange}
                  required
                  accept=".zip,.rar,.apk,.exe,.html"
                  className="hidden"
                  id="gameFile"
                />
                <label htmlFor="gameFile" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">
                    {formData.gameFile ? formData.gameFile.name : 'Click to upload your game file'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Supported formats: .zip, .rar, .apk, .exe, .html (Max 100MB)
                  </p>
                </label>
              </div>
            </div>

            {/* Screenshots */}
            <div className="md:col-span-2">
              <label className="block text-cyan-400 font-semibold mb-2">Screenshots (Optional)</label>
              <input
                type="file"
                name="screenshots"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="w-full bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-1">Upload up to 5 screenshots of your game</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  <span>Submit Game</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameSubmission;