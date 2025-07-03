import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import GameSubmission from './components/GameSubmission';
import GamesUploaded from './components/GamesUploaded';
import Community from './components/Community';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/submit-game" element={<GameSubmission />} />
          <Route path="/games" element={<GamesUploaded />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;