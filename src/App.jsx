import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import Dashboard from './Pages/Dashboard';

const App = () => (
  <GlobalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  </GlobalProvider>
);

export default App;
