import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BrowseGames from './BrowseGames';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/browse-games" element={<BrowseGames />} />
      </Routes>
    </Router>
  );
};

export default App;

