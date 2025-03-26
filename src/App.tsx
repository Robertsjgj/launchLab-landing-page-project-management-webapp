import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SaasLanding } from './pages/SaasLanding';
import { CoachLanding } from './pages/CoachLanding';
import { AppLanding } from './pages/AppLanding';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<SaasLanding />} />
          <Route path="/coach" element={<CoachLanding />} />
          <Route path="/app" element={<AppLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;