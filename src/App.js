import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages';
import { BackToTop} from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />

          {/* Redirect to home page if no matching route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
