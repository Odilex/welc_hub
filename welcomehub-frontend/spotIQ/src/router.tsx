// src/Router.tsx
import React from 'react';
<<<<<<< HEAD:welcomehub-frontend/sportIq/src/router.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/components/Home';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from '.@/components/About';
>>>>>>> 954d02d6ffd139bcb560514adcc2571a94c5d18c:welcomehub-frontend/spotIQ/src/router.tsx

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
